import './Portfolio.css'
import PortfolioBox from './PortfolioBox/PortfolioBox'

export default function Portfolio() {
  return (
        <div className="container-service">
    
            <div className="container-service__title portfolio-title">
                <h2>نمونه کارها</h2>
                <p>نمونه کارهای ما را بررسی کنید</p>
            </div>

            <div>
                <ul id="portfolio-flters">
                    <li className="filter-active">همه</li>
                    <li>برنامه</li>
                    <li>محصول</li>
                    <li>اینترنت</li>
                </ul>
            </div>
    
            <div className="row portfolio-boxes">

                {/* <div className="portfolio-boxes__item-1"></div>
                <div className="portfolio-boxes__item-2"></div>
                <div className="portfolio-boxes__item-3"></div>
                <div className="portfolio-boxes__item-4"></div>
                <div className="portfolio-boxes__item-5"></div>
                <div className="portfolio-boxes__item-6"></div>
                <div className="portfolio-boxes__item-7"></div>
                <div className="portfolio-boxes__item-8"></div>
                <div className="portfolio-boxes__item-9"></div> */}

                <PortfolioBox src="https://theme-script.ir/templates/kasuka/assets/img/portfolio/portfolio-3.jpg"></PortfolioBox> 
                <PortfolioBox src="https://theme-script.ir/templates/kasuka/assets/img/portfolio/portfolio-2.jpg"></PortfolioBox> 
                <PortfolioBox src="https://theme-script.ir/templates/kasuka/assets/img/portfolio/portfolio-1.jpg" size="100%"></PortfolioBox> 
                <PortfolioBox src="https://theme-script.ir/templates/kasuka/assets/img/portfolio/portfolio-5.jpg" size="100%"></PortfolioBox>
                <PortfolioBox src="https://theme-script.ir/templates/kasuka/assets/img/portfolio/portfolio-4.jpg"></PortfolioBox> 
                <PortfolioBox src="https://theme-script.ir/templates/kasuka/assets/img/portfolio/portfolio-7.jpg"></PortfolioBox>
                <PortfolioBox src="https://theme-script.ir/templates/kasuka/assets/img/portfolio/portfolio-9.jpg"></PortfolioBox>
                <PortfolioBox src="https://theme-script.ir/templates/kasuka/assets/img/portfolio/portfolio-6.jpg"></PortfolioBox>
                <PortfolioBox src="https://theme-script.ir/templates/kasuka/assets/img/portfolio/portfolio-8.jpg"></PortfolioBox>
    
            </div>
            
        </div>
    )
}
