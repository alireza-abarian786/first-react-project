import './Testimonial.css'
import Pagination from '../Client/Pagination/Pagination'

export default function Testimonial() {
  return (
    <div className="container-testimonial">
        <div className="container-testimonial__content">
            <img src="https://theme-script.ir/templates/kasuka/assets/img/testimonials/testimonials-5.jpg" alt="" />
            <h3>جان لارسون</h3>
            <h4>کارآفرین</h4>
            <p>
              <i className="bi bi-quote quote-right"></i>
              چه کسی برخی از مواردی را که من خواهم خواند ، مطمئن بودم که برخی از آنها به موقع عفو ما به دلیل تقصیر زایمان تقصیر خواهند آمد ، تقصیر او نیست  من می خوانم که او می آید ، تقصیر خواهد بود چیزی جز
              <i className="bi bi-quote quote-left"></i>
            </p>
            <div className="container-testimonial__content__pagination">
              <Pagination/>
              <Pagination/>
              <Pagination active={true}/>
              <Pagination/>
              <Pagination/>
            </div>
        </div>
    </div>
  )
}
// transform: rotate(180deg)