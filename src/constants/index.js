import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'UI/UX Design',
    icon: ux,
  },
  {
    title: 'Software Prototyping',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'Rails',
    icon: rubyrails,
  },
  {
    name: 'graphql',
    icon: graphql,
  },
  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    date: 'July 2020 - Present',
    title: 'SugarCRM, PHP Developer',
    company_name: 'Nablasol Digital Pvt Ltd',
    icon: 'src/assets/company/nablasol.png', // Replace with actual icon path
    iconBg: '#eaeaec',
    description: 'Full Stack Development, Requirement Gathering, Analysis, Design, Development, Integration, Support.',
    responsibilities: [
      'Developed and maintained SugarCRM solutions for campaign management.',
      'Managed integration and development of modules such as Lead Management, Billing, and Marketing.',
      'Coordinated with the team for requirement gathering and client support.'
    ],
  },
  {
    date: 'March 2016 - February 2020',
    title: 'Web Developer',
    company_name: 'AvikTechnosoft Pvt Ltd',
    icon: 'src/assets/company/aviktechnosoft.png', // Replace with actual icon path
    iconBg: '#eaeaec',
    description: 'Full Stack Development, Requirement Gathering, Analysis, Design, Development',
    responsibilities: [
      'Developed web applications and managed social media API integrations.',
      'Worked on projects like ESP and Campaign Pulse.',
      'Performed design, development, and integration of solutions in PHP, MySQL, and other technologies.'
    ],
  },
  {
    date: 'April 2012 - January 2016',
    title: 'IT Consultant and Trainer',
    company_name: 'IT ART Technologies',
    icon: 'src/assets/company/itart.png', // Replace with actual icon path
    iconBg: '#eaeaec',
    description: 'Provided consulting and training on Microsoft Technologies, prepared training materials, delivered training sessions.',
  }
];

const projects = [
  {
    id: 'project-1',
    name: 'CtaxCRM',
    description:
      'Ctax is a SugarCRM project focused on Campaign Management, including modules for Lead Management, Billing, and Marketing. Developed for Ctax, USA.',
      image: 'src/assets/projects/CtaxCRM.PNG',
    repo: 'https://www.ctaxcrm.com',
    demo: 'https://www.ctaxcrm.com',
  },
  {
    id: 'project-2',
    name: 'ESP',
    description:
      'ESP provides a generic ERP solution for event organization, supporting universities, corporate events, and seminars. Clients include Detroit Athletic Club and Harvard Medical University.',
      image: 'src/assets/projects/Esp.PNG',
    repo: 'https://www.esp.systems/',
    demo: 'https://www.esp.systems/',
  },
  {
    id: 'project-3',
    name: 'Campaign Pulse',
    description:
      'Campaign Pulse is a project developed with Laravel and React.js, offering solutions for managing marketing campaigns and tracking results.',
      image: 'src/assets/projects/Cpulse.PNG',
    repo: 'https://github.com/CampaignPulse', // Replace with actual repo if available
    demo: 'https://campaignpulse.example.com', // Replace with actual demo link if available
  },
];

export { services, technologies, experiences, projects };
