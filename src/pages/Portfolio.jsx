import Project from '../components/Project';

// Import images
import nookly_bg_img from '../assets/imgs/nookly_bg_img.png';
import jate_bg_img from '../assets/imgs/jate_bg_img.png';
import tech_blog_bg_img from '../assets/imgs/tech_blog_bg_img.png';
import note_taker_bg_img from '../assets/imgs/note_taker_bg_img.png';
import jukebox_bg_img from '../assets/imgs/jukebox_bg_img.png';
import weather_bg_img from '../assets/imgs/weather_bg_img.png';

// Array containing project details
const projects = [
    {
        key: 1,
        name: "Nookly",
        desc: "Unlock the value of your unwanted household items with Nookly: Recycle Home Items.",
        bg_img: nookly_bg_img,
        repo: "https://github.com/dymoy/nookly",
        url: "https://dymoy-nookly-ba5930951a44.herokuapp.com/",
    },
    {
        key: 2,
        name: "PWA Text Editor",
        desc: "This single-page application is a text-editor that follows PWA criteria and allows a user to reliably write and save notes.",
        bg_img: jate_bg_img,
        repo: "https://github.com/dymoy/pwa-text-editor",
        url: "https://pwa-text-editor-xj19.onrender.com/",
    },
    {
        key: 3,
        name: "MVC Tech Blog",
        desc: "A CMS-style tech blog where developers can publish blog posts and comment on other developers' posts",
        bg_img: tech_blog_bg_img,
        repo: "https://github.com/dymoy/mvc-tech-blog",
        url: "https://dymoy-mvc-tech-blog-f7331d8522c8.herokuapp.com/",
    },
    {
        key: 4,
        name: "Note Taker",
        desc: "A note-taking app that utilizes Express back-end framework and allows users to view, save, and delete notes",
        bg_img: note_taker_bg_img,
        repo: "https://github.com/dymoy/note-taker",
        url: "https://dymoy-note-taker-d934ef0ed5cc.herokuapp.com/",
    },
    {
        key: 5,
        name: "Jukebox",
        desc: "Looking for a song? Jukebox utilizes Web APIs to generate a random song for you. Favorite your songs to keep track of them!",
        bg_img: jukebox_bg_img,
        repo: "https://github.com/dymoy/jukebox",
        url: "https://dymoy.github.io/jukebox/",
    },
    {
        key: 6,
        name: "Weather Dashboard",
        desc: "This application utilizes server-side APIs so that users can query the current and 5-day forecast for a specific city.",
        bg_img: weather_bg_img,
        repo: "https://github.com/dymoy/weather-dashboard",
        url: "https://dymoy.github.io/weather-dashboard/",
    }
];

export default function Portfolio() {
    return (
        <section id="portfolio" className='section d-flex flex-row flex-wrap justify-content-start align-items-start'>
            <div>
                <h2 className='section-title type-animate'>Check out these projects! </h2>
                <p>Hover over each card to reveal links to the deployed application and the GitHub repository.</p>
            </div>
            <div className="projects mb-5">
                {/* Map the projects array to create a Project component for each item */}
                {projects.map((project) => {
                    return <Project key={project.key} name={project.name} desc={project.desc} bg_img={project.bg_img} repo={project.repo} url={project.url} />
                })}
            </div>
        </section>
    );
}
