import { FaCookieBite, FaGamepad, FaLaptop, FaQuoteLeft, FaWrench } from "react-icons/fa";

export const navLinks = [
    {
        "title": "Projects",
        "url": "/projects",
        "showInNavbar": true,
        "icon": <FaLaptop className="inline" />
    },
    {
        "title": "Blog",
        "url": "/posts",
        "showInNavbar": true,
        "icon": <FaQuoteLeft className="inline" />
    },
    {
        "title": "Games",
        "url": "/games",
        "showInNavbar": true,
        "icon": <FaGamepad className="inline" />
    },
    {
        "title": "Privacy and Cookies",
        "url": "/privacy-and-cookies",
        "showInNavbar": false,
        "showInFooter": true,
        "icon": <FaCookieBite className="inline" />
    },
    {
        "title": "Tools",
        "url": "/tools",
        "showInNavbar": true,
        "icon": <FaWrench className="inline" />
    }
]