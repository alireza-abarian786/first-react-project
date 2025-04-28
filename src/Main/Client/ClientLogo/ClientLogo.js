import './ClientLogo.css'

export default function ClientLogo(props) {
    let imageLogo = `https://theme-script.ir/templates/kasuka/assets/img/clients/client-${props.number}.png`
    
    return (
          <div className="container-clients__image-box">
              <img src={imageLogo} alt="Client" />
          </div>      
    )
  }