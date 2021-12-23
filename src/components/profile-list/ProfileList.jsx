import { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { getProfileAsync } from '../../redux/actions/action';
import './ProfileList.scss'

function ProfileList() {
  const dispatch = useDispatch()
  const { profile, isLoading } = useSelector(
    (state) => state.profileReducer
  );

  useEffect(() => {
    dispatch(getProfileAsync())
  }, [dispatch])

  return (
    <div className='profile-container'>
      {profile.map(profil => {
        return (
          <div key={profil.id} className='profile-list'>
            <img src={profil.path} alt={profil.filename} className='profile-name'/>
          </div>
        )
      })}
    </div>
  )
}

export default ProfileList
