import './Portfolio.css'
import PortfolioBox from './PortfolioBox/PortfolioBox'

export default function Portfolio() {
  return (
        <div className="container-sections">
    
            <div className="container-sections__title">
                <h2>نمونه کارها</h2>
                <p>نمونه کارهای ما را بررسی کنید</p>
            </div>

            <div>
                <ul id="portfolio-filters">
                    <li className="filter-active">همه</li>
                    <li>برنامه</li>
                    <li>محصول</li>
                    <li>اینترنت</li>
                </ul>
            </div>
    
            <div className="portfolio-boxes">

                <PortfolioBox numberSrc="3" number="1" /> 
                <PortfolioBox numberSrc="2" number="2" /> 
                <PortfolioBox numberSrc="1" number="3" size="100%" /> 
                <PortfolioBox numberSrc="5" number="4" size="100%" />
                <PortfolioBox numberSrc="4" number="5" /> 
                <PortfolioBox numberSrc="7" number="6" />
                <PortfolioBox numberSrc="9" number="7" />
                <PortfolioBox numberSrc="6" number="8" />
                <PortfolioBox numberSrc="8" number="9" />
    
            </div>
            
        </div>
    )
}
