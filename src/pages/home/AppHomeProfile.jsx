import './AppHomeProfile.scss'
import ChangeProfile from "../../components/change-profile/ChangeProfile"
import AppHeaderProfile from "../../components/header/AppHeaderProfile"
import ProfileList from "../../components/profile-list/ProfileList"


function AppHomeProfile() {
  return (
    <div>
      <AppHeaderProfile />
      <div className='AppHomeProfile'>
        <ChangeProfile />
        <ProfileList />
      </div>
    </div>
  )
}

export default AppHomeProfile
