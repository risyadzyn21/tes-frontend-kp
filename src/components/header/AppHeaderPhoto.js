import './AppHeader.scss'
import * as Io5Icons from 'react-icons/io5'

function AppHeaderPhoto() {
  return (
    <div>
      <nav className='header'>
        <Io5Icons.IoArrowBackCircleSharp className='back-button' />
        <div className='header-title'>
          Ganti Foto Profil
        </div>
      </nav>
    </div>
  )
}

export default AppHeaderPhoto
