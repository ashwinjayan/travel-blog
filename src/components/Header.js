import logo from "../images/travel-header.png";

export default function Header() {
    return (
        <header className="header">
            <img src={logo} alt="header-logo" />
            <h4>my travel journal.</h4>
        </header>
    );
}