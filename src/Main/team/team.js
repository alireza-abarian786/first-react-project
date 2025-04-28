import './Team.css'
import TeamBox from './TeamBox/TeamBox'

export default function team() {
  return (
    <div className="container-sections">
        <div className="container-sections__title">
            <h2>تیم</h2>
            <p>تیم ما را بررسی کنید</p>
        </div>

        <div className="container-team__boxes">
            <TeamBox image="1" name="والتر وایت" job="مدیر ارشد اجرایی" />
            <TeamBox image="2" name="سارا جونسون" job="مدیر تولید" />
            <TeamBox image="3" name="ویلیام اندرسون" job="CTO" />
            <TeamBox image="4" name="آماندا جپسون" job="حسابدار" />
        </div>
    </div>
  )
}
