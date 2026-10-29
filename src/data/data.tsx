/* eslint-disable simple-import-sort/imports */
import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  MapIcon,
} from '@heroicons/react/24/outline';

import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/visax-RMukvw_Gc0k-unsplash.jpg';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Suhaib Ahmed Khateeb - Portfolio',
  description: "Portfolio of Suhaib Ahmed Khateeb, Software Engineer & Systems Analyst.",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage, 
  name: `I'm Suhaib Ahmed Khateeb.`,
  description: (
    <>
      <p className="mb-4">
        I am a Saudi-based <strong>Software Engineer and Systems Analyst</strong> with seven years of experience architecting data-centric applications and leading end-to-end ERP integrations.
      </p>
      <p>
        My technical foundation spans <strong>Python, SQL, and full-stack development</strong>. I am currently focusing my expertise on <strong>data modeling and AI development</strong>, recently launching a custom Node.js AI chatbot to optimize vendor discovery for a sustainable B2B marketplace.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/Suhaib_Resume_2026.pdf',
      text: 'View Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact Me',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I deliver end-to-end solutions, leveraging extensive experience across Odoo V10 through V19. My expertise covers the complete project lifecycle, from initial requirements gathering and seamless data migration to full-scale system implementations. I build tailored workflows, customize core modules, and develop proprietary applications from scratch to optimize business operations.`,
  aboutItems: [
    {label: 'Location', text: 'Riyadh, Saudi Arabia', Icon: MapIcon},
    {label: 'Study', text: 'C. Abdul Hakeem College of Engineering', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Marsoom Company', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Programming Languages',
    skills: [
      {name: 'Python', level: 9},
      {name: 'SQL', level: 9},
      {name: 'JavaScript / Node.js', level: 8},
      {name: 'PHP', level: 7},
    ],
  },
  {
    name: 'Databases & Data',
    skills: [
      {name: 'PostgreSQL', level: 9},
      {name: 'Data Modeling & Migration', level: 9},
      {name: 'Query Optimization', level: 8},
      {name: 'ETL', level: 8},
    ],
  },
  {
    name: 'Platforms & Frameworks',
    skills: [
      {name: 'Odoo ERP (V10 - V19)', level: 10},
      {name: 'CodeIgniter 4', level: 8},
      {name: 'WordPress / WooCommerce', level: 8},
      {name: 'Magento', level: 7},
    ],
  },
  {
    name: 'Practices',
    skills: [
      {name: 'System Integration', level: 9},
      {name: 'ERP Implementation', level: 9},
      {name: 'Project Management', level: 8},
      {name: 'ISO 27001:2022 Environment', level: 8},
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'AI Chatbot for Sustainly Green',
    description: 'Designed and built an AI-powered chatbot using Node.js for an online B2B marketplace for sustainable products.',
    url: '#',
    image: porfolioImage1,
  },
  {
    title: 'Odoo App Store Contributions',
    description: 'Active developer of custom modules and technical solutions for the official Odoo App Store.',
    url: 'https://apps.odoo.com/apps/browse?repo_maintainer_id=294298',
    image: porfolioImage2,
  },
];

/**
 * Resume section
 */
export const education: TimelineItem[] = [
  {
    date: '2014 - 2018',
    location: 'India',
    title: 'Bachelor of Technology, Information Technology',
    content: <p>Graduated from C. Abdul Hakeem College of Engineering and Technology.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'Jan 2025 - Present',
    location: 'Marsoom Company, Riyadh',
    title: 'System Analyst and Developer',
    content: (
      <ul className="flex flex-col gap-y-2 list-inside list-disc text-sm text-left">
        <li>Designed and developed a Saudi-compliant HR management system from scratch, covering payroll and EOS calculations.</li>
        <li>Design and maintain proprietary debt collection software, translating business requirements into data models.</li>
        <li>Built a quality management system on CodeIgniter 4 and SQL to support compliance tracking.</li>
        <li>Administer and customize Odoo ERP across Finance, Purchasing, and Inventory.</li>
        <li>Run system performance assessments, reducing report generation time by 65%.</li>
      </ul>
    ),
  },
  {
    date: 'Mar 2023 - Dec 2024',
    location: 'LUSTRO, Riyadh',
    title: 'Software Engineer & Odoo Project Manager',
    content: (
      <ul className="flex flex-col gap-y-2 list-inside list-disc text-sm text-left">
        <li>Led the end-to-end Odoo ERP implementation as project manager and consultant.</li>
        <li>Ran requirements sessions with stakeholders and mapped them to Odoo modules.</li>
        <li>Planned and executed data migration from the legacy ERP to Odoo ensuring data integrity.</li>
        <li>Managed project scope, timeline, and deliverables coordinating with 10+ team members.</li>
        <li>Maintained the company WooCommerce website and delivered marketing campaigns.</li>
      </ul>
    ),
  },
  {
    date: 'Jul 2022 - Feb 2023',
    location: 'Rkiza Company, Riyadh',
    title: 'Odoo Developer',
    content: (
      <ul className="flex flex-col gap-y-2 list-inside list-disc text-sm text-left">
        <li>Developed and supported major Odoo modules including POS, Inventory, Accounts, and Sales.</li>
        <li>Integrated Odoo with Magento to support e-commerce operations and data synchronization.</li>
        <li>Authored complete documentation of the Odoo system for developers and end-users.</li>
        <li>Worked directly with business users to gather requirements and translate them into technical solutions.</li>
      </ul>
    ),
  },
  {
    date: 'Jan 2022 - Jun 2022',
    location: 'Health Gates Co., Riyadh',
    title: 'IT Officer',
    content: (
      <ul className="flex flex-col gap-y-2 list-inside list-disc text-sm text-left">
        <li>Developed new apps and modules for a healthcare management system on the Odoo ERP.</li>
        <li>Troubleshot and resolved system issues to minimize downtime for staff.</li>
        <li>Handled system administration tasks supporting day-to-day IT operations.</li>
      </ul>
    ),
  },
  {
    date: 'Sep 2019 - Nov 2021',
    location: 'SHAR Company, Riyadh',
    title: 'Computer Programmer',
    content: (
      <ul className="flex flex-col gap-y-2 list-inside list-disc text-sm text-left">
        <li>Maintained Odoo ERP system, module customization, and customized accounting reports.</li>
        <li>Maintained the business process workflow platform Process Maker.</li>
        <li>Managed multiple company websites including building a WooCommerce site from scratch.</li>
      </ul>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Colleague',
      text: 'Suhaib is an exceptional systems analyst who consistently translates complex business requirements into elegant, automated ERP solutions.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Feel free to reach out for collaborations, consulting, or software engineering opportunities.',
  items: [
    {
      type: ContactType.Email,
      text: 'shads7039@gmail.com',
      href: 'mailto:shads7039@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Riyadh, Saudi Arabia',
      href: 'https://maps.google.com/?q=Riyadh,Saudi+Arabia',
    },
    {
      type: ContactType.LinkedIn,
      text: 'Suhaib Ahmed Khateeb',
      href: 'https://linkedin.com/in/suhaibahmed-khateeb-a2b91114a',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://linkedin.com/in/suhaibahmed-khateeb-a2b91114a'},
];