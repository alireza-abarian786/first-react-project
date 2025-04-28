import './App.css'
import Header from '../Header/Header'
import About from '../Main/About/About'
import Client from '../Main/Client/Client'
import Feature from '../Main/Feature/Feature'
import Service from '../Main/Service/Service'
import BannerCta from '../Main/BannerCta/BannerCta'
import Portfolio from '../Main/Portfolio/Portfolio'
import Counts from '../Main/Counts/Counts'
import Testimonials from '../Main/testimonials/Testimonial'
import Team from '../Main/team/team'
import Contact from '../Main/Contact/Contact'

export default function App() {
  return (
    <div>
        <Header/>
        <About />
        <Client />
        <Feature />
        <Service />
        <BannerCta />
        <Portfolio />
        <Counts/>
        <Testimonials />
        <Team />
        <Contact />
    </div>
  )
}
