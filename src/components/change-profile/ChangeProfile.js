import './ChangeProfile.scss'
import { Link } from 'react-router-dom';
import * as Io5Icons from 'react-icons/io5'

function ChangeProfile() {
  return (
    <div className='home-profile'>
      <div className='home-profile-container'>
        <Link to='/ganti-foto' className='home-profile-button'>
          <Io5Icons.IoCameraOutline />
        </Link>
        <div>
          <div>John Doe</div>
          <div>Kelas 10 IPA 8</div>
        </div>
      </div>
    </div>

  )
}

export default ChangeProfile
