import './Header.css'
import Navbar from "./Navbar/Navbar"
import BoxHeader from "./BoxHeader/Box"
import TitleHeader from "./TitleHeader/Title"

export default function Header () {
    return (
        <div className="container-header">
            <Navbar></Navbar>
            <div className="container-header__main">
                <TitleHeader></TitleHeader>
                <div className="container-header__main__boxes">
                <BoxHeader icon="bi bi-list-columns" text="متن نمایشی"></BoxHeader>
                <BoxHeader icon="bi bi-clipboard-data" text="نمودار کیفی"></BoxHeader>
                <BoxHeader icon="bi bi-calendar2-week" text="نمونه کارها"></BoxHeader>
                <BoxHeader icon="bi bi-brush-fill" text="عملکرد های پایانی"></BoxHeader>
                <BoxHeader icon="bi bi-server" text="اطلاعات ذخیره شده"></BoxHeader>
                </div>
            </div>
        </div>
        
    )
}