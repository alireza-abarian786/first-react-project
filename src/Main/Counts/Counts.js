import './Counts.css'
import CountItem from './CountItem/CountItem'

export default function Counts() {
  return (
    <div className="container-count container-sections">

        <div className="container-count__image">
            <img src="https://theme-script.ir/templates/kasuka/assets/img/counts-img.jpg" alt="about" width="100%" height="100%" />
        </div>

        <div className="container-count__description">
              <h3>شایسته ترین لذت را به هر حال ارائه می دهد</h3>
              <p>خود درد ممکن است درد زیادی باشد ، اما دلیل اصلی آن درد است ، اما من به آن زمان می دهم تا مانند یک درد و درد بزرگ در آن فرو برود. درد مقصر است</p>
              
              <div className="container-count__description-content">
                <CountItem icon="bi bi-emoji-smile" count="65" title="مشتریان خوشحال" text="خوشحالیم که از معمار چیزی دریافت کنیم." />
                <CountItem icon="bi bi-journal-richtext" count="85" title="پروژه ها" text="برای بدست آوردن و زمانی که او کل کسانی را که از او تعریف می کنند رد می کند و آنها را حقیر می شمارد" />
                <CountItem icon="bi bi-clock" count="35" title="سال تجربه" text="یا اجازه دهید به دنبال نوعی مزیت باشد" />
                <CountItem icon="bi bi-award" count="20" title="جوایز" text="درد دردناک تر است در زمانی دیگر که هیچکس او را متهم نمی کند و هیچ وقت او را متهم نمی کند" />
              </div>
        </div>

    </div> 
  )
}
