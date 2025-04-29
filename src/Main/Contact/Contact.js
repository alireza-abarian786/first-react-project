import "./Contact.css";
import ContactInfo from "./ContactInfo/ContactInfo";

export default function Contact() {
  return (
    <div className="container-sections">

      <div className="container-sections__title">
        <h2>تماس با ما</h2>
        <p>با ما تماس بگیرید</p>
      </div>

      <div className="container-sections__iframe">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"></iframe>
      </div>

      <div className="container-sections__contact">
          <div className="contact">
            <ContactInfo icon="bi bi-geo-alt" title="مکان" text="تهران خیابان آزادی" />
            <ContactInfo icon="bi bi-envelope" title="ایمیل" text="info@example.com" />
            <ContactInfo icon="bi bi-phone" title="شماره تماس" text="0123467889" />
          </div>

            <form className="container-sections__contact__form">
              <div className="name-form">
                  <input type="text" name="name" className="form-control" placeholder="نام" required="" />
                  <input type="email" className="form-control" name="email" placeholder="ایمیل" required="" />
              </div>

              <div className="title-form">
                <input type="text" className="form-control" name="subject" placeholder="عنوان" required="" />
              </div>

              <div className="description-form">
                <textarea className="form-control" name="message" rows="5" placeholder="پیام" required=""></textarea>
              </div>

              <div className="load-form">
                <div className="loading">بارگذاری</div>
                <div className="error-message"></div>
                <div className="sent-message">پیام شما ارسال شد متشکرم!</div>
              </div>

              <div className="btn-form">
                <button>ارسال پیام</button>
              </div>

            </form>

        </div>

    </div>
  );
}
