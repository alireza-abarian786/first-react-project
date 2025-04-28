import './Navbar.css'

export default function Navbar() {
  return (
    <div className='container-navbar'>

        <div className='container-navbar__logo-box'>
          <h2>
            <a href="##" className='container-navbar__logo-box__link'>
              <img width="40" height="40" src="https://theme-script.ir/templates/kasuka/assets/img/logo.png" alt="logo" />
              <span>KASUKA</span>
            </a>
          </h2>
        </div>

        <div className='container-navbar__menu-box'>
          <ul>
            <li><a href="##" className='container-navbar__menu-box__link'> خانه </a></li>
            <li><a href="##" className='container-navbar__menu-box__link'> درباره ی ما </a></li>
            <li><a href="##" className='container-navbar__menu-box__link'> خدمات </a></li>
            <li><a href="##" className='container-navbar__menu-box__link'> نمونه کارها </a></li>
            <li><a href="##" className='container-navbar__menu-box__link'> تیم </a></li>
            <li><a href="##" className='container-navbar__menu-box__link'>  لیست کشویی </a></li>
            <li><a href="##" className='container-navbar__menu-box__link'> تماس با ما </a></li>
          </ul>
        </div>

        <button className='container-navbar__btn'>شروع</button>
      
    </div>
  )
}
