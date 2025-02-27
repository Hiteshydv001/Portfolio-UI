import { IExperienceItem } from "@/types";

const experiences: IExperienceItem[] = [
  {
    designation: "Project Maintainer & Mentor",
    company: "Social Winter of Code",
    startDate: "Dec 2024",
    isCurrentJob: true,
    location: "Remote",
    description: [
      "Guiding contributors in AI-based open-source projects.",
      "Developed AI applications using Flask, Next.js, and MongoDB.",
      "Collaborated with a team of developers to maintain and enhance project features.",
      "Ensured code quality through reviews and best practices.",
    ],
  },
  {
    designation: "Blockchain Intern",
    company: "Vodafone Idea Foundation",
    startDate: "Jan 2025",
    endDate: "Feb 2025",
    isCurrentJob: false,
    location: "Remote",
    description: [
      "Implemented a blockchain-based land registry system.",
      "Worked with Ethereum, Solidity, and Web3.py to ensure secure, transparent transactions.",
      "Designed and deployed smart contracts for immutable land ownership records.",
      "Enhanced system security by integrating cryptographic techniques.",
    ],
  },
  {
    designation: "Web Developer",
    company: "African Association of Entrepreneurs",
    startDate: "Oct 2024",
    endDate: "Jan 2025",
    isCurrentJob: false,
    location: "Remote",
    description: [
      "Developed the French version of the AAE website.",
      "Translated blogs and articles from English to French.",
      "Implemented CMS solutions for easier content management.",
      "Collaborated with international teams to improve website accessibility.",
    ],
  },
  {
    designation: "AI/ML Intern",
    company: "Edunet Foundation (AICTE & SHELL)",
    startDate: "Nov 2024",
    endDate: "Dec 2024",
    isCurrentJob: false,
    location: "Remote",
    description: [
      "Built a waste classification model using CNN & YOLO for real-time detection.",
      "Selected among the top 40 projects evaluated by industry experts.",
      "Developed an interactive dashboard for monitoring waste classification performance.",
      "Optimized model efficiency for large-scale deployment.",
    ],
  },
  {
    designation: "AI Research Volunteer",
    company: "Think Blue Data",
    startDate: "Sep 2024",
    endDate: "Oct 2024",
    isCurrentJob: false,
    location: "Remote",
    description: [
      "Annotated datasets for urban planning and building topology models.",
      "Contributed to AI-based solutions for societal planning in Thailand.",
      "Worked with geospatial datasets to improve predictive accuracy.",
      "Enhanced data collection methods to improve research outcomes.",
    ],
  },
];

export default experiences;
