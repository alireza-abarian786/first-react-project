import './Footer.css'
import Social from '../Main/team/Social/Social'
import FooterList from './FooterList/FooterList'

export default function Footer() {

    const liContent = [
        ["خانه" ,"درباره ی ما" ,"خدمات" , "شرایط استفاده از خدمات"  , "سیاست حفظ حریم خصوصی" ],
        [ "طراحی وب سایت" , "توسعه وب " , "مدیریت تولید " , "بازار یابی"  , "طراحی گرافیک"],
    ]



  return (
    <div className="container-footer">

        <div className="container-footer__content">

            <div className="container-footer__content__logo-box">
                <h2>
                    <a href="##" className="container-footer__content__logo-box__link">
                        <img width="80" height="80" alt="logo" src="https://theme-script.ir/templates/kasuka/assets/img/logo.png" />
                        <span>KASUKA</span>
                    </a>
                </h2>

                <div className="footer-contact">
                    <p>تهران خیابان آزادی</p>
                    <p>تلفن: 01234567895</p>
                    <p>ایمیل: info@example.com</p>
                </div>

                <Social icon="bi bi-twitter" />
                <Social icon="bi bi-facebook" />
                <Social icon="bi bi-instagram" />
                <Social icon="bi bi-skype" />
                <Social icon="bi bi-linkedin" />
            </div>

            <div className="footer-menu">
                <FooterList title="لینک های مفید" item={liContent[0]} />
            </div>

            <div className="footer-menu">
                <FooterList title="خدمات ما" item={liContent[1]} />
            </div>

            <div className="footer-newsletter">
                <h4>خبرنامه ما</h4>
                <p>با این حال ، هیچ یک از چیزهایی که من می خوانم تقصیر بزرگ ما نخواهد بود</p>
                <form action="" method="post">
                    <input type="email" name="email" />
                    <input type="submit" value="دنبال کردن" />
                </form>
            </div>

        </div>

        <div className="container-footer__copyright">
            <strong>طراحی شده توسط <span>علیرضا آباریان</span></strong>
            <a href="https://github.com/alireza-abarian786">Alireza-Abarian</a>
        </div>
      
    </div>
  )
}
