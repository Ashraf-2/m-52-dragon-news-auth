import logo from "../../../../src/assets/logo.png"
import moment from "moment";
const Header = () => {
    
    return (
        <div className="text-center ">
            <img src={logo} alt="logo" className="mx-auto" />
            <p>Journalism Without Fear and Favour</p>
            <p className="text-xl">{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
    );
};

export default Header;