export interface ProjectCase {
  id: string;
  title: string;
  category: string;
  summary: string;
  details: string[];
  metrics: { label: string; value: string }[];
}

export const CANDIDATE_INFO = {
  fullName: 'Ngoc Minh Pham',
  role: 'Finance Intern',
  subRole: 'Quantitative Data Analysis & Financial Risk Management',
  university: 'Foreign Trade University (FTU)',
  major: 'Bachelor of Science in International Finance',
  periodStudy: 'Sep 2024 - Present',
  phone: '0984080972',
  email: 'ngominhqq3106@gmail.com',
  linkedin: 'https://www.linkedin.com/in/minh-pham-ngoc-a409a7362/?isSelfProfile=true',
  location: 'Thanh Xuan, Hanoi, Vietnam',
  birthDate: 'October 30, 2006',
  gender: 'Female',
  ielts: 'IELTS 6.0 (2021)',
  objective: 'To master advanced data management and quantitative analytics, corporate finance modeling, and systemic financial risk governance.',
  tagline: 'Planting seeds of rigorous quantitative analysis to harvest sustainable financial value.',
  bio: 'An ambitious International Finance scholar at Foreign Trade University (FTU) blending rigorous quantitative modeling with real-world market acumen and social leadership. From mining an enterprise database of 5,000+ real estate assets at Thien Khoi to orchestrating a 9.2%/year yield on university club capital with zero risk of default, I treat every financial datapoint like a vital leaf nourishing a resilient financial canopy.'
};

export const PILLARS = [
  {
    icon: 'Seedling',
    title: 'Deep Roots: Foundational Financial Acumen',
    subtitle: 'International Finance at FTU',
    description: 'Grounding in global capital flows, central banking mechanisms, macroeconomics, and institutional financial statement analysis.'
  },
  {
    icon: 'ShieldCheck',
    title: 'Resilient Trunk: Risk Governance & Capital Discipline',
    subtitle: 'Preserving & Maximizing Treasury Value',
    description: 'Proven track record as Vice President of Finance at FTU Blood Donation Club, maintaining 100% capital safety while achieving a 9.2%/year yield.'
  },
  {
    icon: 'TrendingUp',
    title: 'Spreading Canopy: Big Data & Quantitative Modeling',
    subtitle: 'Advanced Excel, Google Sheets & Econometrics',
    description: 'Extracted insights across 5,000+ properties at Thien Khoi and performed econometric data cleaning across 200+ listed enterprises.'
  }
];

export const WORK_EXPERIENCES = [
  {
    id: 'thien-khoi',
    company: 'Thien Khoi Group',
    position: 'Real Estate Financial Consultant',
    period: 'Jun 2026 - Present',
    location: 'Hanoi, Vietnam',
    type: 'Practical Market Intelligence',
    highlights: [
      'Gained direct administrative access to and analyzed a comprehensive regional repository of over 5,000 residential and commercial properties.',
      'Conducted in-depth financial advisory, profiling client risk appetite, cash flow requirements, and long-term capital appreciation targets.',
      'Filtered and proposed optimized property packages grounded in real transaction pricing, liquidity velocity, and urban zoning plans.',
      'Supported clients throughout the acquisition lifecycle: scheduling on-site due diligence, negotiating terms, and bridging investors with property principals.'
    ],
    skillsLearned: ['5,000+ Property Database', 'Cash Flow Modeling', 'Real Estate Valuation', 'Negotiation & Advisory', 'Cap Rate Optimization']
  },
  {
    id: 'ftu-research',
    company: 'Foreign Trade University (FTU)',
    position: 'Scientific Research Scholar (Academic Research)',
    period: 'Aug 2025 - Jun 2026',
    location: 'Hanoi, Vietnam',
    type: 'Quantitative Academic Research',
    highlights: [
      'Collected, normalized, and empirically analyzed a large-scale financial dataset of 200+ publicly traded corporations on HOSE and HNX.',
      'Modeled statistical correlations between capital structure (Debt/Equity), operational efficiency (ROE, ROA), and systemic market risk (Beta).',
      'Collaborated effectively within a high-performing academic research team, deploying regression models and statistical hypothesis testing.',
      'Authored publication-grade data visualizations and analytical briefs contributing empirical rigor to university-level research papers.'
    ],
    skillsLearned: ['200+ Enterprise Dataset', 'Econometric Modeling', 'Hypothesis Testing', 'Data Cleaning & Outlier Filtering', 'Financial Ratio Analysis']
  }
];

export const ACTIVITIES = [
  {
    id: 'doi-mau-ftu',
    role: 'Vice President of Finance',
    organization: 'FTU Blood Donation Club (Doi Mau Ngoai Thuong)',
    period: '2024 - Present',
    badge: 'Treasury Leadership & Capital Optimization',
    achievements: [
      'Spearheaded entire budgetary governance, revenue-expense forecasting, and cash management for campus-wide humanitarian blood drives saving thousands of lives.',
      'Formulated and executed a prudent short-to-medium treasury allocation strategy, generating an annualized yield of up to 9.2%/year with absolute capital preservation.',
      'Engineered automated real-time financial tracking sheets ensuring 100% fiscal transparency and optimizing procurement costs for major campaigns.',
      'Organized large-scale volunteer operations engaging thousands of student donors and university stakeholders.'
    ],
    keyNumber: '9.2%/year',
    keyMetric: 'Annualized Treasury Return'
  }
];

export const COMPETITIONS = [
  {
    name: 'Go Finance 2025 Competition',
    rank: 'Top 50 Nationwide',
    time: 'Jun 2025 - Jul 2025',
    organizer: 'National Economics University (NEU) & SIC Securities Club',
    description: 'One of Northern Vietnam’s most prestigious and grueling collegiate finance and securities championships.',
    learnings: 'Tackled real-world corporate valuation, financial restructuring, and M&A case studies; honed high-intensity teamwork and defensive pitching before senior industry judges.'
  },
  {
    name: 'Smart Finance 2026 Competition',
    rank: 'Top 48 (Active Journey)',
    time: 'Oct 2026 - Present',
    organizer: 'National Collegiate Financial Championship',
    target: 'Currently aiming for the National Top 12',
    description: 'A nationwide competition centered around cutting-edge financial solutions commemorating World Savings Day.',
    learnings: 'Analyzing modern saving behaviors and digital micro-investments; engineering innovative quantitative frameworks for Gen Z financial resilience.'
  }
];

export const SKILL_CATEGORIES = [
  {
    category: 'Finance, Investment & Banking',
    icon: 'BadgePercent',
    skills: [
      { name: 'Corporate Finance & Banking Knowledge', level: 90, desc: 'Capital markets, interest rate policies, equity valuation methodologies' },
      { name: 'Quantitative Financial Data Analysis', level: 88, desc: 'Statistical modeling, econometric regressions, sensitivity analysis' },
      { name: 'Financial Statement Analysis (FSA)', level: 85, desc: 'Balance sheets, cash flow waterfalls, forensic accounting checks' },
      { name: 'Risk Management & Asset Allocation', level: 86, desc: 'Portfolio diversification, liquidity buffers, achieving 9.2% club yield' }
    ]
  },
  {
    category: 'Data Engineering & Analytical Tools',
    icon: 'Database',
    skills: [
      { name: 'Advanced Microsoft Excel', level: 92, desc: 'INDEX-MATCH, Nested XLOOKUP, Pivot Dashboards, Solver, Scenario Manager' },
      { name: 'Google Sheets & Collaborative Dashboards', level: 90, desc: 'QUERY, ARRAYFORMULA, real-time shared budget ledgers' },
      { name: 'Big Data Processing & Mining', level: 86, desc: 'Cleaning 5,000+ real estate assets & 200+ listed company metrics' },
      { name: 'Financial Data Visualization', level: 84, desc: 'Executive dashboard reporting, clean charts, statistical scatter plots' }
    ]
  },
  {
    category: 'Languages & Professional Attributes',
    icon: 'Languages',
    skills: [
      { name: 'English: IELTS 6.0 (2021)', level: 80, desc: 'Professional fluency in English financial reports, Bloomberg briefs, academic papers' },
      { name: 'Client Advisory & Negotiation', level: 88, desc: 'Real-world property consultative experience at Thien Khoi Group' },
      { name: 'Executive Leadership & Treasury Governance', level: 90, desc: 'Vice President of Finance overseeing club budget and strategy' },
      { name: 'Critical Thinking & Case Solving', level: 87, desc: 'Tested in the competitive arenas of Go Finance and Smart Finance' }
    ]
  }
];

export const HOBBIES = [
  {
    name: 'Competitive Badminton',
    icon: 'Activity',
    quote: 'Every decisive smash requires unwavering conviction; every step back demands composed breath.',
    reflection: 'Badminton fosters lightning-fast reflexes, cardiovascular endurance, and the ability to maintain laser focus under intense competitive pressure — traits indispensable when executing rapid financial decisions in volatile markets.'
  },
  {
    name: 'Behavioral Finance & Economics Literature',
    icon: 'BookOpen',
    quote: 'Books are the richest organic soil feeding intellectual depth and quiet clarity.',
    reflection: 'I immerse myself in behavioral finance masterpieces like The Psychology of Money and value investing classics. Reading teaches me to peer past fluctuating numbers into human incentives and market psychology.'
  },
  {
    name: 'Morning Podcasts & Mindful Postcards',
    icon: 'Headphones',
    quote: 'Dawn is most vivid when we welcome fresh seeds of wisdom into our minds.',
    reflection: 'Greeting the sunrise with a herbal brew and podcasts on macroeconomic trends and mindful living grounds my energy, inspiring continuous curiosity throughout demanding analytical days.'
  }
];

export const SAMPLE_REAL_ESTATE_ITEMS = [
  { id: 'HN-01', district: 'Thanh Xuan', area: '45m²', floors: '5 Floors', price: '$245,000', yield: '8.4%', cashFlow: '$870/mo', legal: 'Clear Title Deed', highlights: 'Near Nga Tu So hub, car access lane, high tenant occupancy and cash flow' },
  { id: 'HN-02', district: 'Dong Da', area: '52m²', floors: '6 Floors + Elevator', price: '$350,000', yield: '9.1%', cashFlow: '$1,520/mo', legal: 'Square Title Deed', highlights: 'Prime university & office corridor, 8 fully furnished turnkey serviced studios' },
  { id: 'HN-03', district: 'Cau Giay', area: '40m²', floors: '4 Floors', price: '$220,000', yield: '7.8%', cashFlow: '$720/mo', legal: 'Ready for Closing', highlights: 'Near Vietnam National University, intellectual community, dependable yield' },
  { id: 'HN-04', district: 'Hai Ba Trung', area: '60m²', floors: '7 Floors + Elevator', price: '$495,000', yield: '9.6%', cashFlow: '$2,200/mo', legal: 'Fire Safety Certified', highlights: 'Premium serviced apartment complex, institutional grade rental velocity' },
  { id: 'HN-05', district: 'Ha Dong', area: '50m²', floors: '5 Floors', price: '$195,000', yield: '8.0%', cashFlow: '$640/mo', legal: 'Spotless Legal', highlights: 'Adjacent to Cat Linh - Ha Dong Metro line, strong capital appreciation runway' },
  { id: 'HN-06', district: 'Thanh Xuan', area: '38m²', floors: '5 Floors New', price: '$205,000', yield: '8.2%', cashFlow: '$680/mo', legal: 'Subdivided Deed', highlights: '30m from main arterial boulevard, schools and markets nearby, 100% leased' }
];

export const SAMPLE_RESEARCH_ENTERPRISES = [
  { code: 'VNM', industry: 'Consumer Goods', roe: '28.4%', roa: '18.2%', deRatio: '0.42', beta: '0.75', status: 'Remarkably robust balance sheet and dividend stability' },
  { code: 'FPT', industry: 'Information Tech', roe: '27.1%', roa: '14.6%', deRatio: '0.68', beta: '0.88', status: 'High compound revenue growth and expanding global footprint' },
  { code: 'HPG', industry: 'Heavy Industry', roe: '14.8%', roa: '7.9%', deRatio: '0.72', beta: '1.24', status: 'Cyclical capital intensity, resilient operating cash flow' },
  { code: 'MWG', industry: 'Consumer Retail', roe: '12.3%', roa: '5.8%', deRatio: '1.15', beta: '1.10', status: 'Store network optimization and gross margin expansion' },
  { code: 'REE', industry: 'Energy & Utilities', roe: '16.5%', roa: '9.4%', deRatio: '0.55', beta: '0.82', status: 'Predictable cash flows from renewable energy and prime office leases' },
  { code: 'PNJ', industry: 'Luxury & Jewelry', roe: '23.8%', roa: '13.1%', deRatio: '0.38', beta: '0.90', status: 'High gross margins with lean working capital management' }
];
