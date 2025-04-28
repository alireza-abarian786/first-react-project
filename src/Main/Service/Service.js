import './Service.css'
import ServiceBox from './ServiceBox/ServiceBox'

export default function Service() {
  return (
    <div className="container-service">

        <div className="container-service__title">
            <h2>خدمات</h2>
            <p>خدمات ما را بررسی کنید</p>
        </div>

        <div className="container-service__boxes">

            <ServiceBox></ServiceBox>
            <ServiceBox></ServiceBox>
            <ServiceBox></ServiceBox>
            <ServiceBox></ServiceBox>
            <ServiceBox></ServiceBox>
            <ServiceBox></ServiceBox>

        </div>
      
    </div>
  )
}
