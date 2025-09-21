import { Link } from "react-router-dom";

function Layout({ children }) {
    return (
        <div>
            <nav className="navbar">
                <Link to="/">
                    <img src="/logo_mk.png" alt="Logo" className="logo"/>
                </Link>
                <Link to="/">Home</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/services">Services</Link>
                <Link to="/contactpage">Contact Page</Link>
            </nav>
            <br />
            <hr />
            <div className="main-content">
                {children}
            </div>
        </div>
    )
}

export default Layout;