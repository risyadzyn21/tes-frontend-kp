import ProfilePic from "../../components/change-profile/ProfilePic"
import AppHeaderPhoto from "../../components/header/AppHeaderPhoto"


function ChangePhoto() {
  return (
    <div>
      <AppHeaderPhoto />
      <div className='AppHomeProfile'>
        <ProfilePic/>
      </div>
    </div>
  )
}

export default ChangePhoto
