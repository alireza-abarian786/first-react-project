import './App.css'
import Navbar from "../Header/Navbar/Navbar"
import TitleHeader from '../Header/TitleHeader/Title'
import BoxHeader from '../Header/BoxHeader/Box'
import About from '../Main/About/About'
import Client from '../Main/Client/Clients'
import Pagination from '../Main/Client/Pagination/Pagination'
import Feature from '../Main/Feature/Feature'
import Service from '../Main/Service/Service'
import BannerCta from '../Main/BannerCta/BannerCta'
import Portfolio from '../Main/Portfolio/Portfolio'


export default function App() {
  return (
    <div>
        <div className="container-header">
            <Navbar></Navbar>
            <div className="container-header__main">
              <TitleHeader></TitleHeader>
              <div className="container-header__main__boxes">
                <BoxHeader></BoxHeader>
                <BoxHeader></BoxHeader>
                <BoxHeader></BoxHeader>
                <BoxHeader></BoxHeader>
                <BoxHeader></BoxHeader>
              </div>
            </div>
        </div>

        <div className="container-main">
          <About></About>

          <div className="container-clients">
            <div className="container-clients__images">
              <Client></Client>
              <Client></Client>
              <Client></Client>
              <Client></Client>
              <Client></Client>
            </div>
            <div className="container-clients__pagination">
              <Pagination></Pagination>
              <Pagination></Pagination>
              <Pagination></Pagination>
              <Pagination></Pagination>
              <Pagination></Pagination>
              <Pagination></Pagination>
              <Pagination></Pagination>
              <Pagination></Pagination>
            </div>
          </div>

          <Feature></Feature>
          <Service></Service>
          <BannerCta></BannerCta>
          <Portfolio></Portfolio>

        </div>

    </div>
  )
}
