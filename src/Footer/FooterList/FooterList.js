import './FooterList.css'
import FooterMenu from '../FooterMenu/FooterMenu'

export default function FooterList(props) {
  return (
        <div className="footer-links">
            <h4>{props.title}</h4>
            <ul>
                {   
                    props.item.map((item , index) => {
                        return <FooterMenu menu={item} key={index} />
                    }) 
                }
            </ul>
        </div>
  )
}
