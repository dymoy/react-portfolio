import ProfilePic from '../assets/imgs/profile_pic.jpg';
import { NavLink } from 'react-router-dom';

export default function About() {
    return (
        <section id="about" className='section d-flex justify-content-between align-items-center'>
            <div id="about-content-container" className="col-md-7 text-dark">
                <h6>Hello, world! My name is</h6>
                <h1 id="full-name" className='type-animate'>Derek Moy</h1>
                <h5> I am a <span id='role'>Full Stack Web Developer</span>.</h5>
                <br/><br/>
                <p>Welcome to my online portfolio! If you've found your way here, you are probably looking to learn more about me and my work.</p>
                <p>I am currently pursuing a certificate for Web Development at the <i>University of Texas at Austin</i>. I'm interested in building web tools that enhance the way we interact with online content and our community; and am looking to develop innovative full-stack projct for your organization.</p>
                <p>So, take a look around! If you're interested in connecting to discuss my work, make your way to the "Contact Me" section to reach me. I look forward to hearing from you! </p>
                <br/><br/>
                <div>
                    <NavLink
                        key="PORTFOLIO"
                        to="/portfolio"
                        className='about-btn'>
                        View Projects &#x2192;
                    </NavLink>
                </div>
            </div>
            <div id="about-pic-container" className='col-md-3 d-flex justify-content-center'>
                <img id="pic" src={ProfilePic} alt="Profile Picture" />
            </div>
        </section>
    );
}