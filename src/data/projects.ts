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
    id: 'dfarm',
    title: "D'Farm Dream - UI/UX & QA",
    role: 'QA Engineer & UI/UX Designer',
    date: 'October 2024',
    description: 'Redesign of an IoT-based poultry ERP system for better usability and accessibility.',
    longDescription: [
      'A comprehensive redesign of an IoT-based poultry ERP system, transforming a complex, multi-module platform into an intuitive, user-friendly experience.',
    ],
    image: '/images/dfarmdrean2.png',
    colorPalette: ['#126948', '#79ba78', '#75B89F', '#f3cb52', '#f4e9b1', '#9E9E9E'],
    mockups: ['/images/mockup1.png', '/images/mockup2.png', '/images/mockup3.png', '/images/mockup4.png', '/images/mockup5.png', '/images/mockup6.png'],
    sections: [
      {
        heading: 'Why I Created This Project',
        content: [
          'Throughout my involvement with D\'Farm Dream, Indonesia\'s pioneering modern egg-laying poultry farm utilizing an IoT-based system, I faced the challenge of managing a complex agricultural platform that integrated employee workflows, coop and warehouse management, as well as financial and investor monitoring.',
          'In my dual role as a QA Engineer and UI/UX Designer, I focused on enhancing the overall user experience by applying responsive and user-friendly design principles using Figma, while rigorously performing manual testing and bug reporting to ensure the system\'s stability and quality.',
        ],
      },
    ],
  },
  {
    id: 'stylehub',
    title: 'StyleHub - E-commerce UI/UX & QA',
    role: 'QA Engineer & UI/UX Designer',
    date: 'July 2024',
    description: 'AI-powered e-commerce platform with personalized recommendations and robust testing.',
    longDescription: [
      'A robust redesign and quality assurance effort for an AI-powered e-commerce platform, blending UI/UX improvements with manual and automated testing.',
    ],
    image: '/images/stylehub.png',
    colorPalette: ['#E4D3C7', '#1D1D1B', '#939393', '#CDBFB5'],
    mockups: ['/images/mockupstylehub1.png', '/images/mockupstylehub2.png', '/images/mockupstylehub3.png', '/images/mockupstylehub4.png', '/images/mockupstylehub5.png'],
    sections: [
      {
        heading: 'Why I Created This Project',
        content: [
          'Throughout my work on StyleHub, an AI-powered e-commerce platform, I faced the challenge of ensuring a smooth shopping experience on a system combining personalized recommendations, real-time inventory updates, and dynamic user flows.',
          'In my dual role as QA Engineer and UI/UX Designer, I focused on creating an intuitive, user-friendly interface in Figma while performing comprehensive manual and automated testing with Playwright.',
        ],
      },
    ],
  },
  {
    id: 'orangehrm',
    title: 'OrangeHRM - QA Automation',
    role: 'QA Engineer',
    date: 'June 2025',
    description: 'Automation testing suite using Playwright for core HR modules.',
    longDescription: [
      'A comprehensive automation and quality assurance project for a web-based HR management system, combining manual and automated testing to validate core features.',
    ],
    image: '/images/orangeHRM.png',
    techStack: [
      { name: 'VS Code', icon: '/images/vscodelogo.png' },
      { name: 'Playwright', icon: '/images/playwrightlogo.png' },
      { name: 'JavaScript', icon: '/images/javascripticon.png' },
      { name: 'GitHub', icon: '/images/githublogo.png' },
      { name: 'Spreadsheet', icon: '/images/spreadsheeticon.png' },
    ],
    sections: [
      {
        heading: 'Why I Created This Project',
        content: [
          'This project was a personal dummy initiative to deepen my expertise in QA automation using Playwright, allowing me to simulate real-world testing processes and refine my skills in building reliable, maintainable test scripts.',
        ],
        images: ['/images/login.png', '/images/testhook.png', '/images/testpositive.png', '/images/testnegative.png', '/images/implementscripting.png', '/images/implementscripting2.png', '/images/bugreport1.png', '/images/bugreport2.png'],
      },
    ],
  },
]
