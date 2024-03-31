import { Link } from 'react-router-dom';

export default function Navigation() {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li>
                        <Link key={1} className="nav-link text-light" to="about">ABOUT ME</Link>
                    </li>
                    <li>
                        <Link key={2} className="nav-link text-light" to="#portfolio">PORTFOLIO</Link>
                    </li>
                    <li>
                        <Link key={3} className="nav-link text-light" to="#resume">RESUME</Link>
                    </li>
                    <li>
                        <Link key={4} className="nav-link text-light" to="#contact">CONTACT ME</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
} 
