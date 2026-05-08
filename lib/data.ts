export const jeffData = {
  name: "Jeff Idle",
  pronouns: "He/Him",
  location: "Osseo, Minnesota, United States",
  linkedin: "https://www.linkedin.com/in/jeff-idle-148b0522/",
  tagline: "Strategic Workforce Leader | Analytics, Planning & Total Rewards | Building the Functions Executives Rely On | JD, MBA",
  
  currentRole: {
    company: "Blattner Company",
    title: "Workforce Data & Analytics Senior Manager",
    started: "2023",
    location: "Avon, MN",
    mission: "Helping lead America to a clean energy future",
    description: "The largest builder of utility-scale solar and wind farms in the United States"
  },
  
  experience: [
    {
      company: "Blattner Company",
      title: "Workforce Data & Analytics Senior Manager",
      period: "2023–Present",
      location: "Avon, MN",
      current: true,
      industry: "CLEAN ENERGY",
      highlight: "Built workforce planning function at the largest builder of utility-scale solar and wind farms in the US",
      quote: "I look forward to doing my part to help Blattner Company lead America to a clean energy future!"
    },
    {
      company: "Wells Fargo",
      title: "HR Data Science Team Lead",
      period: "Previous",
      industry: "FINANCIAL SERVICES",
      highlight: "Built Wells Fargo's HR data science team from scratch"
    },
    {
      company: "University of Minnesota",
      title: "Student Analytics",
      period: "Previous",
      industry: "HIGHER EDUCATION",
      highlight: "Built student analytics team from scratch"
    },
    {
      company: "Cargill",
      title: "HR Business Intelligence",
      period: "Previous",
      industry: "GLOBAL AGRIBUSINESS",
      highlight: "Built Cargill's HR BI function. Worked with Vice Chairman Dave Raisbeck on deferred-compensation rules. Stakes: millions of dollars, significant reputational risk for the company.",
      quote: "That's the kind of work I've cared about since then: helping senior leaders leave a meeting confident about their choices."
    }
  ],
  
  education: [
    {
      degree: "JD",
      school: "University of Minnesota, Carlson School of Management",
      note: "Earned while working full time"
    },
    {
      degree: "MBA",
      school: "University of Minnesota, Carlson School of Management",
      note: "Earned while working full time"
    }
  ],
  
  about: `About twenty years ago, I sat across from Cargill's vice chairman, Dave Raisbeck. We worked through new deferred-compensation rules. The penalties for mistakes were in the millions, and the reputational risk for him and the company was significant. We had forty-five minutes scheduled, but we finished in thirty-five. He smiled and said, "I think I know what I just decided." That's the kind of work I've cared about since then: helping senior leaders leave a meeting confident about their choices and trusting the data and reasoning that guided them.

The simplest way to explain my job is that I help people feel good about their decisions. I'm a strategic workforce leader with over twenty years of experience. I've built analytics and planning functions that turn workforce data into executive judgment in various sectors, including financial services, energy, construction, higher education, and global agribusiness.

Strategy is how I naturally think — I'm always looking ahead. I treat every worker with the same respect, whether they are a front-line employee or a CEO. I came from a technical background and earned both a JD and an MBA from Carlson while working full time. Continuous self-development has always been my approach to career growth.

I'm closely observing how organizations are incorporating AI into analytics work. I believe AI can be a powerful assistant, but I'm skeptical about the idea that AI will replace analytics professionals who rely on existing data. The critical aspects of judgment — asking the right questions, building trust in the data, and turning insights into actions — remain essential even with better tools.`,
  
  philosophy: [
    {
      title: "Strategy First",
      icon: "🎯",
      text: "Strategy is how I naturally think—I'm always looking ahead."
    },
    {
      title: "Respect Everyone",
      icon: "🤝",
      text: "I treat every worker with the same respect, whether they are a front-line employee or a CEO."
    },
    {
      title: "Data + Judgment",
      icon: "📊",
      text: "The critical aspects of judgment—asking the right questions, building trust in the data, and turning insights into actions—remain essential even with better tools."
    }
  ],
  
  aiView: "I'm closely observing how organizations are incorporating AI into analytics work. I believe AI can be a powerful assistant, but I'm skeptical about the idea that AI will replace analytics professionals who rely on existing data. The critical aspects of judgment — asking the right questions, building trust in the data, and turning insights into actions — remain essential even with better tools.",
  
  skills: [
    "Workforce Analytics",
    "HR Data Science",
    "Workforce Planning",
    "Total Rewards",
    "Strategic Leadership",
    "Clean Energy HR"
  ],
  
  industries: [
    "Financial Services",
    "Energy",
    "Construction",
    "Higher Education",
    "Global Agribusiness",
    "Clean Energy"
  ],
  
  volunteerInterests: [
    "Child Welfare",
    "Community Improvement",
    "Education",
    "Employment / Workforce Development",
    "Science and Technology",
    "Veteran Support",
    "Children"
  ],
  
  instruments: [
    {
      name: "Drums",
      icon: "🥁",
      description: "The backbone of any band — and my approach to analytics. Without a solid rhythm section, nothing else works."
    },
    {
      name: "Trumpet",
      icon: "🎺",
      description: "Precision, breath control, and knowing when to be loud vs. when to hold back. Applies equally to presenting data to executives."
    },
    {
      name: "Guitar",
      icon: "🎸",
      description: "From acoustic fingerpicking to electric — versatility is the point. Same with analytics: knowing which tool to use when."
    }
  ],
  
  musicPhilosophy: [
    { music: "🎵 RHYTHM", work: "CONSISTENT ANALYTICAL PROCESS" },
    { music: "🎵 HARMONY", work: "CROSS-FUNCTIONAL COLLABORATION" },
    { music: "🎵 IMPROVISATION", work: "ADAPTING MODELS TO NEW QUESTIONS" },
    { music: "🎵 PERFORMANCE", work: "PRESENTING INSIGHTS TO EXECUTIVES" },
    { music: "🎵 PRACTICE", work: "CONTINUOUS SELF-DEVELOPMENT" }
  ],
  
  stats: {
    yearsExperience: "20+",
    teamsBuilt: 4,
    connections: "500+",
    instruments: 3
  },
  
  whatLookingFor: [
    "Broader role in analytics, workforce planning, and total rewards",
    "Organizations that prioritize cross-functional collaboration",
    "Directing execution through a team he's built (not day-to-day operations)"
  ],
  
  teamsBuilt: [
    { company: "Cargill", team: "HR BI", number: 1 },
    { company: "University of Minnesota", team: "Student Analytics", number: 2 },
    { company: "Wells Fargo", team: "HR Data Science", number: 3 },
    { company: "Blattner Company", team: "Workforce Planning & Analytics", number: 4 }
  ]
};

export type JeffData = typeof jeffData;
