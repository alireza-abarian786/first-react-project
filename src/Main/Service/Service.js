import './Service.css'
import ServiceBox from './ServiceBox/ServiceBox'

export default function Service() {
  return (
    <div className="container-sections">

        <div className="container-sections__title">
            <h2>خدمات</h2>
            <p>خدمات ما را بررسی کنید</p>
        </div>

        <div className="container-service__boxes">

            <ServiceBox icon="bi bi-speedometer2" title="دردهای بزرگ" text="آنها استثنائاتی هستند که به دنبال سیاه پوستان هستند ، آنها نمی بینند ، آنها کسانی هستند که در خدمات خود مقصر هستند" />
            <ServiceBox icon="bi bi-file-earmark-text" title="اما همانطور که مشاهده می کنید" text="آنها استثنائاتی هستند که به دنبال سیاه پوستان هستند ، آنها نمی بینند ، آنها کسانی هستند که در خدمات خود مقصر هستند" />
            <ServiceBox icon="bi bi-dribbble" title="لورم اپیسوم" text="برای آرامش بخشیدن و لذت بردن از مفاسد ، چه دردها و چه دردسرهایی را دریافت خواهند کرد" />
            <ServiceBox icon="bi bi-bank" title="دیوا دان" text="روشها یا تلاشهای ما علاوه بر این ، خطا فرار می کند ، بگذار کوچکتر عاقل باشد" />
            <ServiceBox icon="bi bi-door-open" title="لولا را پاک کنید" text="آنها استثنائاتی هستند که به دنبال سیاه پوستان هستند ، آنها نمی بینند ، آنها کسانی هستند که در خدمات خود مقصر هستند" />
            <ServiceBox icon="bi bi-globe-central-south-asia" title="هیچکس دیگر" text="اما در واقع ما هم آنها را متهم می کنیم و هم با یک نفرت عادلانه شایسته چاپلوسی هستیم" />

        </div>
      
    </div>
  )
}
