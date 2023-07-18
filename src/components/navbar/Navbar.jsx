import logo from "../../helpers/logo.png";
import "./Navbar.scss";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="horoscope" />
      </div>
      <div className="links">
        <a href="#Horoscope">Horoscope</a>
        <a href="#Daily">Daily</a>
        <a href="#Tarot">Tarot</a>
        <a href="#Article">Article</a>
        <a href="#Contact">Contact</a>
      </div>
    </div>
  );
};
export default Navbar;
