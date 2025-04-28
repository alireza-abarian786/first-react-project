import './FeatureItems.css'
export default function FeatureItems(props) {
  return (
        <div className="container-feature__description-content">

            <div>
                <i className={props.icon}></i>
            </div>

            <div>
                <h4>{props.title}</h4>
                <p>{props.text}</p>
            </div>

        </div>
  )
}
