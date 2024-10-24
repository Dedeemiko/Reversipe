import { Link } from "react-router-dom"
import "./Footer.scss";
import InstagramIcon from "../../assets/icons/Instagram-Icon.svg";
import LinkedinIcon from "../../assets/icons/Linkedin-Icon.svg";
import GitHubLogo from "../../assets/icons/Github-Logo.svg";

function Footer() {

    return (
        <footer className="footer">
            <h3 className="footer__header">
                Contact Us
            </h3>

            <div className="footer__icons">
                <Link to="https://www.instagram.com/tseun.e/">
                    <img src={InstagramIcon} alt="Instagram icon" />
                </Link>
                <Link to="https://www.linkedin.com/in/dedeemiko/">
                    <img src={LinkedinIcon} alt="Linkedin icon" />
                </Link>
                <Link to="https://github.com/Dedeemiko">
                    <img src={GitHubLogo} alt="Github icon" />
                </Link>
            </div>
        </footer>
        );
    }


export default Footer;