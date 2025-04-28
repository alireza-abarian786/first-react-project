import "./Feature.css"
import FeatureItems from "./FeatureItems/FeatureItems"

export default function Feature() {
  return (
        <div className="container-feature container-sections">

            <div className="container-feature__image">
                <img src="https://theme-script.ir/templates/kasuka/assets/img/features.jpg" alt="about" width="100%" />
            </div>

            <div className="container-feature__description">

                <FeatureItems icon="bi bi-pass-fill" title="تبلیغ سختی است" text="نتایج یا در نتیجه هر یک از این اهداف اشتغال حاصل می شوند" />
                <FeatureItems icon="bi bi-box" title="کدام یک از اینهاست" text="کسانی که هوس سیاهان می کنند نمی بینند ، آنها مقصر هستند که خدمات خود را رها کرده اند" />
                <FeatureItems icon="bi bi-images" title="یا کور شده است" text="یا می پذیرد یا زمانی که هیچ کس از همه اجتناب نمی کند. همه دردهایی که آنها را بیشتر می کند" />
                <FeatureItems icon="bi bi-shield" title="حقیقت مبارک" text="آنها بدون تحمل حقیقت در زمان ستایش زندگی از هیچ چیزی پیروی نمی کنند" />

            </div>

        </div>                
  )
}
