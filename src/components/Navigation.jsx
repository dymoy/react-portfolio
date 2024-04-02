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
        <nav className="navbar navbar-expand">
            <div className="container-fluid">
                <ul className="navbar-nav me-auto">
                    {/* Map the navbar array to create a NavLink component for each item*/}
                    {navbar.map((item) => (
                        <li className='nav-item' key={item.name}>
                            <NavLink
                                key={item.name}
                                to={item.href}
                                // Style the NavLink depending on the current/ active page
                                style={({isActive}) => {
                                    return {
                                        color: isActive ? creamHex : greenHex,
                                        backgroundColor: isActive ? greenHex : creamHex
                                    }
                                }}
                                className='nav-link mx-1 my-1 p-2 text-center rounded'>
                                {item.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
} 
