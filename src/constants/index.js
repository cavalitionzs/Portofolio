import logo from '../assets/images/logo.png'
import refine from '../assets/images/refine.ico'
import {
    contact,
    css,
    express,
    github,
    html,
    javascript,
    linkedin,
    nextjs,
    nodejs,
    react,
    tailwindcss,
    typescript,
    php,
    ci,
    c,
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: php,
        name: "Php",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: c,
        name: "C",
        type: "Backend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: ci,
        name: "CodeIgniter",
        type: "Backend",
    },
    {
        imageUrl: refine,
        name: "Refine",
        type: "Backend",
    },
];

const company_name = 'Atma Jaya Yogyakarta University';

export const experiences = [
    {
        title: "Assistant Lecturer",
        company_name: company_name,
        icon: logo,
        iconBg: "#a2d2ff",
        date: "Feb 2024 - Present",
        points: [
            "Teaching University students about Web-based Information Systems",
            "We're Introducing University students to React typescript and Next.js, which are React frameworks",
        ],
    },
    {
        title: "Assistant Lecturer",
        company_name: company_name,
        icon: logo,
        iconBg: "#a2d2ff",
        date: "Feb 2023 - Jun 2023",
        points: [
            "Teaching University students about Programming Principle",
            "Introducing University students to the C programming language, Informatics logic, and Raptor",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/chandra-wijaya-kusuma',
    }
];

export const projects = [
    {
        iconUrl: ci,
        theme: 'btn-back-black',
        name: 'Point of Sales Web based',
        description: `Developed a web that used for Cashier, helping users that didn't used web for their systems.`,
        link: '/projects/maintenance',
    },
    
];