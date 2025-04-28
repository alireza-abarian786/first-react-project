import "./Feature.css"
import FeatureItems from "./FeatureItems/FeatureItems"

export default function Feature() {
  return (
        <div className="container-feature">

            <div className="container-feature__image">
                <img src="https://theme-script.ir/templates/kasuka/assets/img/features.jpg" alt="about" />
            </div>

            <div className="container-feature__description">

                <FeatureItems></FeatureItems>
                <FeatureItems></FeatureItems>
                <FeatureItems></FeatureItems>
                <FeatureItems></FeatureItems>

            </div>

        </div>                
  )
}
