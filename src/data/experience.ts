export interface Experience {
  company: string
  role: string
  period: string
  logo: string
  highlights: string[]
}

export const experiences: Experience[] = [
  {
    company: 'PT. IDstar Cipta Teknologi',
    role: 'Quality Assurance Engineer',
    period: 'October 2025 - Present',
    logo: '/images/IDstar logo.webp',
    highlights: [
      'Designed, executed, and maintained test cases for web and mobile applications based on business and system requirements.',
      'Performed Functional Testing, Regression Testing, Integration Testing, and Release Validation to ensure application quality before deployment.',
      'Identified, documented, and managed defects throughout the testing lifecycle until resolution and closure.',
      'Collaborated with Developers, Product Owners, Business Analysts, and stakeholders in Agile/Scrum environments to ensure quality deliverables in every sprint.',
      'Supported User Acceptance Testing (UAT) activities and validated application readiness prior to production releases.',
      'Supporting digital transformation and enterprise system initiatives for leading Indonesian telecommunications companies.',
    ],
  },
  {
    company: 'PT. Zealtech Solution Indonesia',
    role: 'Software QA Engineer',
    period: 'October 2024 - October 2025',
    logo: '/images/zealtech solution indonesia.png',
    highlights: [
      'Led QA activities across multiple client projects, including test planning, test design, test execution, defect management, and release validation.',
      'Collaborated with cross-functional teams in Agile environments to ensure product quality and business requirement compliance.',
      'Developed and maintained Playwright automation scripts to support functional and regression testing.',
      'Performed manual and automated testing while managing defects through Jira until release completion.',
    ],
  },
  {
    company: 'Elisoft Technology',
    role: 'QA Engineer',
    period: 'July 2024 - October 2024',
    logo: '/images/elisoft.jpg',
    highlights: [
      'Led Quality Assurance activities for web and Progressive Web Application (PWA) development projects.',
      'Designed and executed test cases while performing functional, integration, regression, and end-to-end testing.',
      'Managed defect lifecycle, test documentation, and release validation to ensure application quality and business requirement compliance.',
      'Collaborated with developers and stakeholders in Agile environments to support reliable product delivery.',
    ],
  },
]
