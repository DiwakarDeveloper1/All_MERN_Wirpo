import logo from '../images/name.jfif';
import './Header.css';
const Header = () => {
    return (
        <div class="container head">
            <div class="row one">
                <div class="col-12 col-sm-5 "><img class="new" src={logo} alt="logo" height="250px" width="500px"/></div>
                <div class="col-12 col-sm-7 text"><h1 class="text1">Jhon Deo</h1></div>
            </div>
        </div>
    )
}
export default Header;