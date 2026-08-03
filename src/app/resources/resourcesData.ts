// src/app/resources/resourcesData.ts
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';


export interface CoverageSection {
  title: string;
  bullets: string[];
  color?: 'orange' | 'blue' | 'purple' | 'green' | 'red' | 'taupe' | 'teal' | 'indigo';
}

export interface Resource {
  id: string;
  title: string;
  coverImage: string;
  brochureLink: string;
  targetAudience: string;
  targetAudienceIntro?: string;
  competencies?: string[];
  duration?: string;
  objectives: string[];
  objectivesLabel?: string;
  programOutline?: string;
  coverageSections?: CoverageSection[];
  learningActivities?: string[];
}

export const resourcesData: Resource[] = [
  {
    id: 'interviewing-skills',
    title: 'Interviewing Skills Workshop',
    coverImage: `${basePath}/images/interviewing_banner2.png`,
    brochureLink: '#',
    targetAudience: 'Employees who participate in candidate interviews and hiring decisions across functions and business units.',
    objectives: [
      'Understand the principles and importance of effective interviewing in hiring decisions',
      'Prepare and conduct structured, fair, and competency-based interviews',
      'Apply questioning, probing, and active listening techniques to gather relevant information',
      'Use the STAR and Behavioral Event Interviewing (BEI) methods to assess candidates effectively',
      'Recognize and minimize common interviewing biases and selection errors',
      'Evaluate candidates objectively and contribute to better hiring decisions',
      'Deliver a positive candidate experience while maintaining professionalism throughout the interview process'
    ],
    coverageSections: [
      {
        title: 'Interviewing Fundamentals',
        bullets: [
          'Importance of effective interviewing',
          'Characteristics of successful interviews',
          'Cost and impact of poor hiring decisions',
          'Interviewer roles and responsibilities'
        ],
        color: 'orange'
      },
      {
        title: 'Interview Preparation',
        bullets: [
          'Understanding the Job Description',
          'Resume Review and Candidate Profiling',
          'Pre-Interview Planning and Briefing',
          'Knowledge, Skills, and Competency Assessment'
        ],
        color: 'blue'
      },
      {
        title: 'Conducting Professional Interviews',
        bullets: [
          'Opening and Closing an Interview',
          'Building Rapport with Candidates',
          'Assessing Verbal and Non-Verbal Cues',
          'Creating a Positive Candidate Experience'
        ],
        color: 'purple'
      },
      {
        title: 'Types of Interviews & Questioning Techniques',
        bullets: [
          'Structured Interviews',
          'Behavioral Interviews',
          'Case/Problem-Solving Interviews',
          'Framing relevant and competency-based questions'
        ],
        color: 'green'
      },
      {
        title: 'Effective Questioning & Behavioural Interviewing',
        bullets: [
          'Types of Interview Questions',
          'Behavioral Event Interviewing (BEI)',
          'STAR (Situation, Task, Action, Result) Method',
          'Probing Techniques and Active Listening Skills'
        ],
        color: 'taupe'
      },
      {
        title: 'Objective Evaluation & Bias Awareness',
        bullets: [
          'Using Assessment Forms and Rating Scales',
          'Evidence-Based Candidate Evaluation',
          'Common Interview Biases and Selection Traps',
          'Fair and Consistent Decision-Making'
        ],
        color: 'red'
      },
      {
        title: 'Post-Interview Best Practices',
        bullets: [
          'Documentation and Interview Notes',
          'Panel Discussions and Candidate Comparison',
          'Final Evaluation and Hiring Recommendations',
          'Communication and Follow-Up Process'
        ],
        color: 'orange'
      },
      {
        title: 'Virtual Interviewing Excellence',
        bullets: [
          'Virtual Interview Etiquette and Preparation',
          'Managing Technology and Online Presence',
          'Effective Communication in Virtual Settings',
          'Maintaining Professionalism and Confidentiality'
        ],
        color: 'blue'
      },
      {
        title: 'Experiential Learning Activities',
        bullets: [
          'Worst Interview Experience Reflection',
          'STAR-Based Question Framing Exercise',
          'Behavioral Interview Role Plays',
          'Spot the Trap Game',
          'Candidate Assessment Practice Exercises'
        ],
        color: 'green'
      }
    ],
    learningActivities: [
      'Worst Interview Experience Reflection',
      'STAR-Based Question Framing Exercise',
      'Behavioral Interview Role Plays',
      'Spot the Trap Game',
      'Candidate Assessment Practice Exercises'
    ]
  },
  {
    id: 'advanced-excel',
    title: 'Advanced Excel',
    coverImage: `${basePath}/images/advanced_excel_banner_hero.jpg`,
    brochureLink: '#',
    targetAudience: 'Employees who use Microsoft Excel for data analysis, reporting, MIS, operations, finance, HR, and business decision-making.',
    objectives: [
      'Apply advanced Excel functions to improve data analysis and productivity',
      'Use logical, lookup, and counting functions to solve business problems efficiently',
      'Organize, validate, and manage large datasets accurately',
      'Create dynamic Pivot Tables and meaningful reports for decision-making',
      'Design interactive dashboards to present data insights effectively'
    ],
    coverageSections: [
      {
        title: 'Logical Functions',
        bullets: [
          'IF Function',
          'Nested IF Statements',
          'AND, OR, and NOT Functions',
          'Combining Logical Functions for Business Scenarios'
        ],
        color: 'orange'
      },
      {
        title: 'Lookup and Reference Functions',
        bullets: [
          'VLOOKUP for Dynamic Data Retrieval',
          'Looking Up Data from Any Column',
          'Error Handling in Lookups',
          'Practical Business Applications'
        ],
        color: 'blue'
      },
      {
        title: 'Counting & Data Analysis Functions',
        bullets: [
          'COUNT',
          'COUNTA',
          'COUNTIF',
          'COUNTIFS',
          'SUMIF',
          'SUMIFS',
          'Data Summarization Techniques'
        ],
        color: 'green'
      },
      {
        title: 'Pivot Tables & Reporting',
        bullets: [
          'Creating Live Pivot Tables',
          'Data Summarization and Analysis',
          'Pivot Charts',
          'Dynamic Reporting Techniques'
        ],
        color: 'taupe'
      },
      {
        title: 'Dashboard Creation & Data Visualization',
        bullets: [
          'Conditional Formatting',
          'Interactive Charts',
          'KPI Tracking Dashboards',
          'Dashboard Design Best Practices',
          'Executive Reporting Techniques'
        ],
        color: 'purple'
      }
    ],
    learningActivities: [
      'Interactive Sales Dashboard Build from Scratch',
      'Financial Modeling and Forecasting Simulation',
      'Data Cleaning Challenge with Power Query',
      'Formula Optimization Speed Lab'
    ]
  },
  {
    id: '6-sigma-green-belt',
    title: '6 SIGMA Green Belt Training',
    coverImage: `${basePath}/images/6sigmabelt_banner_hero.jpg`,
    brochureLink: '#',
    targetAudience: 'Candidates with fairly good educational background in any stream and willing to go the extra mile.',
    targetAudienceIntro: 'To consider the following competencies for choosing the right candidate.',
    competencies: [
      'Analytical frame of mind',
      'Problem solving ability',
      'Process Orientation',
      'Change facilitation',
      'Communication skill',
      'Team player'
    ],
    duration: '8 Days split equally in 2 months',
    objectives: [
      'Understand and apply the 6 SIGMA methodology for process improvement.',
      'Use qualitative and quantitative tools to identify process inefficiencies and improvement opportunities.',
      'Identify "Burning Platforms" (grey areas) that negatively impact the organization\'s top line and bottom line.',
      'Apply the D.M.A.I.C (Define, Measure, Analyze, Improve and Control) methodology to drive business improvements.',
      'Execute improvement projects under the guidance of a Master Black Belt.',
      'Identify and eliminate root causes of process issues through data-driven analysis.',
      'Implement sustainable solutions that improve profitability, productivity, and quality.',
      'Contribute to operational excellence by reducing defects, errors, and process variations.'
    ],
    programOutline: '6 SIGMA Green Belt Training is imparted using the D.M.A.I.C (Define, Measure, Analyze, Improve and Control) methodology towards process improvement and reaping benefit for customers and organization at large. It is the Discipline Used to Accelerate Improvement in Business.',
  },
  {
    id: 'winning-edge',
    title: 'Winning Edge',
    coverImage: `${basePath}/images/winningedge_banner.jpg`,
    brochureLink: '#',
    targetAudience: 'For anyone who believes in growing stronger every day. Sharpen Your Skills. Strengthen Your Edge.',
    objectives: [
      'Develop self-awareness and understand the importance of self-leadership',
      'Apply proactive thinking and take ownership of actions and decisions',
      'Set meaningful goals and align actions with personal and professional aspirations',
      'Improve time management and prioritization for enhanced productivity',
      'Build stronger interpersonal relationships through effective communication and empathy',
      'Practice the 7 Habits of Highly Effective People to achieve sustained personal and professional success'
    ],
    coverageSections: [
      {
        title: 'Self-Leadership and Self-Awareness',
        bullets: [
          'Understanding self-leadership and its importance',
          'Self-awareness and personal effectiveness',
          'Johari Window for self-discovery',
          'Personal SWOT Analysis'
        ],
        color: 'orange'
      },
      {
        title: 'Developing Proactive Habits',
        bullets: [
          'Habit 1: Be Proactive',
          'Circle of Influence vs. Circle of Concern',
          'Taking responsibility for choices and actions'
        ],
        color: 'green'
      },
      {
        title: 'Personal Vision and Goal Setting',
        bullets: [
          'Habit 2: Begin with the End in Mind',
          'Personal leadership and vision creation',
          'Defining personal mission and future goals'
        ],
        color: 'blue'
      },
      {
        title: 'Personal Productivity and Time Management',
        bullets: [
          'Habit 3: Put First Things First',
          'Time Management Matrix',
          'Prioritization and effective planning'
        ],
        color: 'taupe'
      },
      {
        title: 'Building Strong Interpersonal Relationships',
        bullets: [
          'Habit 4: Think Win-Win',
          'Habit 5: Seek First to Understand, Then to Be Understood',
          'Empathic communication and active listening'
        ],
        color: 'purple'
      },
      {
        title: 'Collaboration and Team Synergy',
        bullets: [
          'Habit 6: Synergize',
          'Creative cooperation and teamwork',
          'Leveraging diverse perspectives for better outcomes'
        ],
        color: 'red'
      },
      {
        title: 'Continuous Growth and Self-Renewal',
        bullets: [
          'Habit 7: Sharpen the Saw',
          'Physical, mental, emotional, and spiritual well-being',
          'Creating a personal self-development and self-care plan'
        ],
        color: 'orange'
      },
      {
        title: 'Experiential Learning Activities',
        bullets: [
          'Circle of Influence Exercise',
          'Vision Board Creation',
          'Time Management Matrix Activity',
          'Active Listening Exercise',
          'Team Synergy Activities',
          'Future Self Reflection Exercise'
        ],
        color: 'blue'
      }
    ],
    learningActivities: [
      'Circle of Influence Exercise',
      'Vision Board Creation',
      'Time Management Matrix Activity',
      'Active Listening Exercise',
      'Team Synergy Activities',
      'Future Self Reflection Exercise'
    ]
  },
  {
    id: 'we-before-me',
    title: 'We Before Me',
    coverImage: `${basePath}/images/webeforeme_banner.jpg`,
    brochureLink: '#',
    targetAudience: 'When we put the team before ourselves, we create stronger relationships, better ideas, and greater success together.',
    objectives: [
      'Understand the difference between individual contribution and team success',
      'Develop a strong "WE" mindset and collaborative approach',
      'Recognize the stages of team development and improve team effectiveness',
      'Build trust and strengthen workplace communication',
      'Handle minor conflicts constructively and professionally',
      'Apply teamwork principles through experiential activities and discussions'
    ],
    coverageSections: [
      {
        title: 'Understanding Teamwork vs Individual Effort',
        bullets: [
          'Why teamwork matters',
          'Benefits of collaboration',
          'Individual vs collective success'
        ],
        color: 'orange'
      },
      {
        title: 'Building a Strong "WE" Mindset',
        bullets: [
          'Moving from "I" to "We"',
          'Shared goals and accountability',
          'Supporting team members'
        ],
        color: 'green'
      },
      {
        title: 'Team Development & Effectiveness',
        bullets: [
          'Stages of team growth',
          'Characteristics of high-performing teams',
          'Roles and responsibilities'
        ],
        color: 'blue'
      },
      {
        title: 'Handling Minor Conflicts Collaboratively',
        bullets: [
          'Understanding workplace conflicts',
          'Conflict resolution techniques',
          'Finding win-win solutions'
        ],
        color: 'taupe'
      },
      {
        title: 'Building Trust and Communication',
        bullets: [
          'Importance of trust in teams',
          'Active listening',
          'Effective communication practices'
        ],
        color: 'purple'
      },
      {
        title: 'Experiential Team Activities',
        bullets: [
          'Interactive exercises',
          'Learning through participation',
          'Team problem-solving activities'
        ],
        color: 'red'
      }
    ],
    learningActivities: [
      'Interactive exercises',
      'Learning through participation',
      'Team problem-solving activities'
    ]
  }
];
