import "./ContactInfo.css";

export default function ContactInfo(props) {
  return (
    <div className="info">
      <div className="address">
        <i className={props.icon}></i>
        <h4>{props.title}:</h4>
        <p>{props.text}</p>
      </div>
    </div>
  );
}
