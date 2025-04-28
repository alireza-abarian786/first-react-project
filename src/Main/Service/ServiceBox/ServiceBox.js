import './ServiceBox.css'

export default function ServiceBox(props) {
  return (
    <div className="service-box">

        {/* <div> */}
          <i className={props.icon}></i>
        {/* </div> */}
        <h4>{props.title}</h4>
        <p>{props.text}</p>      
    </div>
  )
}
