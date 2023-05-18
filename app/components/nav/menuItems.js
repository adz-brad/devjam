import { MdInsights, MdLaptopMac, MdAppRegistration, MdSpeed, MdCloudSync, MdOutlineArticle, MdOutlineLibraryBooks } from 'react-icons/md'
import { FaPeopleArrows, FaRegCompass } from 'react-icons/fa'

export const menuItems = [
    {
        title: 'Services',
        links: [
            {
                title: 'Web Development',
                path: '/full-stack-web-development',
                description: 'Unlock the power of modern web development with our cutting-edge development services.',
                icon: <MdLaptopMac className="text-3xl" />
            },
            {
                title: 'API Integrations',
                path: '/api-saas-integrations',
                description: 'Seamlessly connect your applications and services with robust API integration solutions.',
                icon: <MdCloudSync className="text-3xl" />
            },
            {
                title: 'Solutions Architecture',
                path: '/web-solutions-architecture',
                description: 'Elevate your web applications with fast, scalable and flexible architectures that empower you to do more.',
                icon: <MdAppRegistration className="text-3xl" />
            },
            {
                title: 'Performance Optimization',
                path: '/web-performance-optimization',
                description: 'Supercharge your user engagement with modern performance, accessibility and SEO optimizations.',
                icon: <MdSpeed className="text-3xl" />
            },
            {
                title: 'Consultations',
                path: '/web-development-consultations',
                description: 'Connect with industry experts to help you navigate the ever-evolving web development landscape.',
                icon: <FaPeopleArrows className="text-3xl" />
            }
        ],
        path: null
    },
    {
        title: 'Pricing',
        links: null,
        path: '/pricing'
    },
    {
        title: 'Resources',
        links: [
            {
                title: 'Our Journey',
                path: '/our-journey',
                description: 'Learn more about our committment to delivering the highest grade quality through modern web architectures.',
                icon: <FaRegCompass className="text-3xl" />
            },
            {
                title: 'Case Studies',
                path: '/case-studies',
                description: '',
                icon: <MdInsights className="text-3xl" />
            },
            {
                title: 'Blog',
                path: '/blog',
                description: 'Insightful articles from web development experts to help you stay up to date with the latest trends.',
                icon: <MdOutlineArticle className="text-3xl" />
            },
            {
                title: 'Documentation',
                path: '/documentation',
                description: 'A collection of helpful guides to help you navigate the devJam ecosystem.',
                icon: <MdOutlineLibraryBooks className="text-3xl" />
            }
        ],
        path: null
    }
]