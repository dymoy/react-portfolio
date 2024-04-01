import { NavLink } from 'react-router-dom';

export default function Navigation() {
    const navbar = [
        {name: "ABOUT ME", href: "/", current: true},
        {name: "PORTFOLIO", href: "/portfolio", current: true},
        {name: "RESUMÉ", href: "/resume", current: true},
        {name: "CONTACT ME", href: "/contact-me", current: true},
    ];

    const greenHex = "#3B684D";
    const creamHex = "#F0E7D8";

    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    {navbar.map((item) => (
                        <NavLink
                            key={item.name}
                            to={item.href}
                            style={({isActive}) => {
                                return {
                                    color: isActive ? creamHex : greenHex,
                                    backgroundColor: isActive ? greenHex : creamHex
                                }
                            }}
                            className='nav-link mx-1 my-1 p-2 text-center rounded'>
                            {item.name}
                        </NavLink>
                    ))}
                </ul>
            </div>
        </nav>
    );
} 
