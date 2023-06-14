import './Header.css';
const Header = (props) => {
    return (
        <div class="container"> 
            <div class="col-12">
                <h2>{props.title}</h2>
                <p>{props.description}</p>
            </div>

        </div>
    )
}
export default Header;