import './CountItem.css'

export default function CountItem(props) {
    return (
        <div className="count-box">
            <i className={props.icon}></i>
            <span>{props.count}</span>
            <p><strong>{props.title}: </strong>{props.text}</p>
        </div>
    )
}
