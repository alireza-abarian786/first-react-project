import './TeamBox.css'
import Social from '../../team/Social/Social'

export default function TeamBox(props) {

    let imageMember = `	https://theme-script.ir/templates/kasuka/assets/img/team/team-${props.image}.jpg`

  return (
        <div className="member">
            <div className="member-img">
                <img src={imageMember} alt="image-member" />
                <div className="social">
                    <Social icon="bi bi-twitter" />
                    <Social icon="bi bi-facebook" />
                    <Social icon="bi bi-instagram" />
                    <Social icon="bi bi-linkedin" />
                </div>
            </div>
            <div className="member-info">
                <h4>{props.name}</h4>
                <span>{props.job}</span>
            </div>
        </div>
    )
}
