import Project from '../components/Project';

// Import images
import nookly_bg_img from '../assets/imgs/nookly_bg_img.png';
import jate_bg_img from '../assets/imgs/jate_bg_img.png';


const projects = [
    {
        key: 1,
        name: 'Nookly',
        desc: "Unlock the value of your unwanted household items with Nookly: Recycle Home Items.",
        bg_img: nookly_bg_img,
        repo: "https://github.com/dymoy/nookly",
        url: "https://dymoy-nookly-ba5930951a44.herokuapp.com/",
    },
    {
        key: 2,
        name: 'PWA Text Editor',
        desc: "This single-page application is a text-editor that follows PWA criteria and allows a user to reliably write and save notes.",
        bg_img: jate_bg_img,
        repo: "https://github.com/dymoy/pwa-text-editor",
        url: "https://pwa-text-editor-xj19.onrender.com/",
    }
];

export default function Portfolio() {
    return (
        <section id="portfolio" className='section d-flex flex-column justify-content-center align-items-start'>
            <div>
                <h3 className='section-title'>Check out my projects!</h3>
                <p>Hover over each card to reveal links to the deployed application and the GitHub repository.</p>
            </div>
            <div className="projects d-flex flex-row justify-content-start align-items-center">
                {projects.map((project) => {
                    return <Project key={project.key} name={project.name} desc={project.desc} bg_img={project.bg_img} repo={project.repo} url={project.url} />
                })}
            </div>
        </section>
    );
}