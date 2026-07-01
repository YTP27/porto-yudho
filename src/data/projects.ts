export interface Project {
  id: string
  title: string
  role: string
  date: string
  description: string
  longDescription: string[]
  image: string
  colorPalette?: string[]
  mockups?: string[]
  techStack?: { name: string; icon: string }[]
  sections?: {
    heading: string
    content: string[]
    images?: string[]
  }[]
}

export const projects: Project[] = [
  {
    id: 'indico',
    title: 'INDICO Engage by Telkomsel',
    role: 'QA PIC',
    date: '2025',
    description:
      'Led end-to-end QA for an AI-powered digital engagement platform. Managed 500+ test cases and coordinated UAT across multiple Agile sprint cycles.',
    longDescription: [
      'As QA PIC for INDICO Engage, Telkomsel\u2019s AI-powered digital engagement platform, I was responsible for product quality across the full development lifecycle. From test planning and scenario design to manual execution, defect management, and release validation.',
    ],
    image: '/images/INDICO Engage/INDICO Thumbnail.jpg',
    techStack: [
      { name: 'Playwright', icon: '/icons/playwright.svg' },
      { name: 'Trello', icon: '/icons/trello.svg' },
      { name: 'Spreadsheet', icon: '/icons/spreadsheet.svg' },
      { name: 'Postman', icon: '/icons/postman.svg' },
    ],
    sections: [
      {
        heading: 'Overview',
        content: [
          'INDICO Engage uses AI-driven automation and personalization to improve how Telkomsel interacts with its customers. It\u2019s a high-traffic platform within Telkomsel\u2019s digital ecosystem, so quality assurance had to be both thorough and efficient.',
          'I designed and managed over 500 test cases across multiple modules, covering functional, integration, and regression testing. I also coordinated User Acceptance Testing (UAT) throughout each Agile sprint, working directly with business stakeholders to make sure every release met acceptance criteria.',
          'I built Playwright automation scripts to complement manual testing, which made regression cycles faster and more reliable. I worked alongside developers, product owners, and business analysts to keep quality on track through every sprint.',
        ],
        images: ['/images/INDICO Engage/1.jpg', '/images/INDICO Engage/2.jpg'],
      },
    ],
  },
  {
    id: 'mayzar',
    title: 'MAYZAR ERP & POS SYSTEM',
    role: 'QA PIC',
    date: '2025',
    description:
      'Led QA for an ERP and Point-of-Sale system from ground-up development to production. Focused on business process accuracy and release readiness.',
    longDescription: [
      'As QA PIC for MAYZAR, I shaped the QA strategy from day one. The project covered both ERP and POS functionalities, so test coverage had to span inventory, sales, finance, and operational workflows.',
    ],
    image: '/images/MAYZAR/MAYZAR landing.png',
    techStack: [
      { name: 'Playwright', icon: '/icons/playwright.svg' },
      { name: 'Spreadsheet', icon: '/icons/spreadsheet.svg' },
      { name: 'Jira', icon: '/icons/jira.svg' },
    ],
    sections: [
      {
        heading: 'Overview',
        content: [
          'MAYZAR is built for businesses that need integrated retail and back-office management. It handles order management, payment processing, inventory tracking, and financial reporting all in one place.',
          'I designed and executed test cases around critical workflows like sales transactions, inventory movements, and financial reconciliation. I managed defect tracking and release readiness, making sure every build was production-ready before deployment.',
          'I split my time between manual testing and Playwright-based automation. Working closely with the dev team, I kept defect turnaround times short and maintained quality standards throughout the project.',
        ],
        images: [
          '/images/MAYZAR/mayzar dashboard.png',
          '/images/MAYZAR/mayzar POS.png',
          '/images/MAYZAR/cover manual book 1.png',
        ],
      },
    ],
  },
  {
    id: 'acpedia',
    title: 'ACPEDIA PLATFORM',
    role: 'QA PIC',
    date: '2025',
    description:
      'QA lead for a service management platform handling sales, installation, and maintenance workflows. Built automated regression suites to speed up releases.',
    longDescription: [
      'As QA PIC for ACPEDIA, I was in charge of quality for a web platform that connects sales, technician dispatch, and post-service follow-up into a single workflow.',
    ],
    image: '/images/ACPEDIA/ACPEDIA Thumbnail.png',
    techStack: [
      { name: 'Playwright', icon: '/icons/playwright.svg' },
      { name: 'Spreadsheet', icon: '/icons/spreadsheet.svg' },
      { name: 'Jira', icon: '/icons/jira.svg' },
    ],
    sections: [
      {
        heading: 'Overview',
        content: [
          'ACPEDIA is a web-based platform that helps service companies manage their entire operation, from lead generation and order entry to technician scheduling and customer follow-up.',
          'I ran functional, regression, and end-to-end tests across all major business flows. I worked side by side with developers throughout the defect lifecycle and made sure every sprint ended with a stable, shippable product.',
          'In an Agile setup, I made quality part of every phase. I used Playwright for automated regression testing and Jira to track defects, keeping the team aligned on quality metrics from story refinement to release.',
        ],
        images: [
          '/images/ACPEDIA/acpedia 1.png',
          '/images/ACPEDIA/acpedia teknisi view.png',
          '/images/ACPEDIA/acpedia teknisi view 2.png',
        ],
      },
    ],
  },
  {
    id: 'xlsatu',
    title: 'XLSATU Migration Project',
    role: 'QA PIC',
    date: '2025',
    description:
      'Led QA for a cloud migration from AWS to Tencent Cloud. Validated 50+ scenarios across purchasing, payments, and microservices with zero downtime.',
    longDescription: [
      'As QA PIC for the XLSATU Migration Project, I made sure a critical infrastructure move from AWS to Tencent Cloud went smoothly. The goal was zero disruption to business operations.',
    ],
    image: '/images/XLSATU/XL SATU Thumbnail.jpg',
    techStack: [
      { name: 'Jira', icon: '/icons/jira.svg' },
      { name: 'Spreadsheet', icon: '/icons/spreadsheet.svg' },
      { name: 'Playwright', icon: '/icons/playwright.svg' },
    ],
    sections: [
      {
        heading: 'Overview',
        content: [
          'Migrating enterprise services from one cloud provider to another is high risk. The XLSATU project involved moving multiple services, data pipelines, and integrations while keeping everything running for end users.',
          'I designed and executed over 50 test scenarios focused on purchasing, payment processing, and operational transactions. I also validated individual microservices to make sure each component worked correctly in the new cloud environment.',
          'I coordinated with infrastructure, development, and operations teams to hit every quality gate before production cutover. The migration completed with minimal business impact.',
        ],
        images: [],
      },
    ],
  },
  {
    id: 'ess',
    title: 'ESS XLSMART (Enterprise HCIS System)',
    role: 'QA PIC',
    date: '2025',
    description:
      'QA lead for an HCIS platform migration. Ran 90+ test cases across 22 integrated services to validate HR workflows end to end.',
    longDescription: [
      'As QA PIC for the ESS XLSMART HCIS migration, I made sure human capital management processes kept running smoothly across 22 services during a platform migration.',
    ],
    image: '/images/ESS Web App/XLSMART THUMBNAIL.png',
    techStack: [
      { name: 'Manual Testing', icon: '/icons/manual-testing.svg' },
      { name: 'Jira', icon: '/icons/jira.svg' },
    ],
    sections: [
      {
        heading: 'Overview',
        content: [
          'ESS XLSMART handles employee data, payroll, attendance, and leave management. The migration project moved the whole system to a new platform while keeping data integrity and business logic intact.',
          'I designed and executed more than 90 test cases across 22 services, covering functional, integration, and regression testing. HR workflows like onboarding, payroll calculations, and managerial approvals all had to work correctly in the new environment.',
          'I worked with developers, business analysts, and HR stakeholders to make sure every requirement was tested. The transition went smoothly with minimal disruption to day-to-day HR operations.',
        ],
        images: [],
      },
    ],
  },
  {
    id: 'sidiva',
    title: 'SIDIVA XLSMART Mobile Application',
    role: 'QA Engineer',
    date: '2025',
    description:
      'Handled regression testing and feature validation for a mobile app\u2019s purchasing and payment modules. Focused on transaction reliability and user experience.',
    longDescription: [
      'I handled regression testing and feature validation for SIDIVA XLSMART\u2019s purchasing and payment features, making sure every transaction was secure and reliable.',
    ],
    image: '/images/SIDIVA/SIDIVA Thumbnail.png',
    techStack: [
      { name: 'Manual Testing', icon: '/icons/manual-testing.svg' },
      { name: 'Jira', icon: '/icons/jira.svg' },
    ],
    sections: [
      {
        heading: 'Overview',
        content: [
          'SIDIVA XLSMART is a mobile app that lets users manage purchases and payments on the go. Since it handles financial transactions, quality and security were top priorities.',
          'I ran regression tests and validated new features before every release, catching regressions early and working with developers to resolve defects quickly.',
          'I made sure every release met business requirements and quality standards before it reached users.',
        ],
        images: [
          '/images/SIDIVA/SIDIVA mobile test 1.jpg',
          '/images/SIDIVA/SIDIVA mobile test 2.jpeg',
        ],
      },
    ],
  },
  {
    id: 'dfarm',
    title: "D'Farm Dream - IoT Poultry Platform",
    role: 'QA PIC & UI/UX Designer',
    date: 'October 2024',
    description:
      'QA lead and UI/UX designer for Indonesia\u2019s first IoT-connected poultry farm platform. Spanned Web, PWA, and ERP integrations.',
    longDescription: [
      'A dual-role project covering both quality assurance and UI/UX design for Indonesia\u2019s pioneering IoT-based poultry farm. I made a complex agricultural system more usable while keeping it stable across Web and PWA.',
    ],
    image: '/images/Dfarm Dream/dfarmdrean2.png',
    colorPalette: ['#126948', '#79ba78', '#75B89F', '#f3cb52', '#f4e9b1', '#9E9E9E'],
    mockups: [
      '/images/Dfarm Dream/mockup1.png',
      '/images/Dfarm Dream/mockup2.png',
      '/images/Dfarm Dream/mockup3.png',
      '/images/Dfarm Dream/mockup4.png',
      '/images/Dfarm Dream/mockup5.png',
      '/images/Dfarm Dream/mockup6.png',
    ],
    techStack: [
      { name: 'Katalon Studio', icon: '/icons/katalon.svg' },
      { name: 'Selenium', icon: '/icons/selenium.svg' },
      { name: 'Spreadsheet', icon: '/icons/spreadsheet.svg' },
    ],
    sections: [
      {
        heading: 'Overview',
        content: [
          'D\u2019Farm Dream is Indonesia\u2019s first IoT-connected poultry farm. The platform brings together employee management, coop and warehouse tracking, financial reports, and investor monitoring into one system accessible from both Web and PWA.',
          'On the QA side, I designed and ran test scenarios across multiple internal modules and their integrations. I used Katalon Studio for automation and spreadsheets to track coverage.',
          'As a UI/UX designer, I used Figma to create wireframes, prototypes, and final designs that made the platform much easier to use for farm operators and management.',
        ],
        images: [
          '/images/Dfarm Dream/Logo Dfarm.svg',
          '/images/Dfarm Dream/login page.png',
        ],
      },
    ],
  },
  {
    id: 'orangehrm',
    title: 'OrangeHRM - QA Automation',
    role: 'QA Engineer',
    date: 'June 2025',
    description:
      'Built a Playwright automation framework for OrangeHRM. Covers employee management, leave, and recruitment with data-driven tests and structured reporting.',
    longDescription: [
      'A personal project to build a professional-grade test automation framework using Playwright. I applied what I\u2019d learned from enterprise projects to simulate real-world QA processes on OrangeHRM.',
    ],
    image: '/images/orangeHRM/orangeHRM.png',
    techStack: [
      { name: 'VS Code', icon: '/icons/vscode.svg' },
      { name: 'Playwright', icon: '/icons/playwright.svg' },
      { name: 'JavaScript', icon: '/icons/javascript.svg' },
      { name: 'GitHub', icon: '/icons/github.svg' },
      { name: 'Spreadsheet', icon: '/icons/spreadsheet.svg' },
    ],
    sections: [
      {
        heading: 'Overview',
        content: [
          'This was a personal initiative to sharpen my automation skills. I built a full Playwright test suite for OrangeHRM, an open-source HR system, treating it like a real enterprise engagement.',
          'The framework covers employee management, leave management, and recruitment modules. I used custom test hooks for setup and teardown, data-driven tests for broader coverage, and mixed positive and negative scenarios.',
          'I also created structured bug reports with reproduction steps and environmental context. The project showed I can build maintainable, scalable test frameworks from scratch.',
        ],
        images: [
          '/images/orangeHRM/login.png',
          '/images/orangeHRM/testhook.png',
          '/images/orangeHRM/testpositive.png',
          '/images/orangeHRM/testnegative.png',
          '/images/orangeHRM/implementscripting.png',
          '/images/orangeHRM/implementscripting2.png',
          '/images/orangeHRM/bugreport1.png',
          '/images/orangeHRM/bugreport2.png',
        ],
      },
    ],
  },
]
