import './PortfolioBox.css'

export default function PortfolioBox(props) {
  let imagePortfolio = `https://theme-script.ir/templates/kasuka/assets/img/portfolio/portfolio-${props.numberSrc}.jpg`

  return (
        <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
                <img src={imagePortfolio} height={props.size || 'auto'} alt="images" />
                <div className="portfolio-info">
                    <h4>برنامه {props.number}</h4>
                    <p>برنامه {props.number}</p>
                    <div className="portfolio-links">
                        <a href="##"> 
                            <i className="bi bi-plus"></i>
                        </a>
                        <a href="##"> 
                            <i className="bi bi-link-45deg"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>      
  )
}
