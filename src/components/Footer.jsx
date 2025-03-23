import './styles/Footer.css'
function Footer() {
    let currentYear = new Date().getFullYear();
    return (
        <footer>
            © {currentYear} Kitty Images
        </footer>
    )
 }

export default Footer;