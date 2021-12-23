import './AppHeader.scss'
import * as Io5Icons from 'react-icons/io5'

function AppHeaderProfile() {
  return (
    <div>
      <nav className='header'>
        <Io5Icons.IoArrowBackCircleSharp className='back-button'/>
        <div className='header-title'>
          Profil
        </div>
      </nav>
    </div>
  )
}

export default AppHeaderProfile
