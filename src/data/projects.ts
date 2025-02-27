import { IProjectItem, ProjectType, RepoType } from "@/types";

const projects: IProjectItem[] = [
  {
    id: "multi-agent-rag-tools",
    title: "Multi-Agent RAG Tools",
    description:
      "Engineered a Multi-Agent AI System for automated text summarization, research article generation, and data sanitization, improving processing efficiency by 40%.",
    icon: "/skills/python.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.OpenSource,
    githubUrl: "https://github.com/Hiteshydv001/Multi-RAG-Agent.git",
    tags: ["Python", "Streamlit", "FAISS", "Hugging Face", "Gemini API", "Flask", "NextJS"],
  },
  {
    id: "linkedin-automate-comment",
    title: "LinkedIn Automate Comment",
    description:
      "Built an AI automation system for LinkedIn interactions, increasing engagement efficiency by 50%. Processes 1,000+ posts daily using sentiment analysis and LLM-generated comments.",
    icon: "/skills/python.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.OpenSource,
    githubUrl: "https://github.com/Hiteshydv001/LinkedIn-Automate-Comment",
    tags: ["Python", "Selenium", "Gemini API", "FastAPI", "Streamlit", "Vercel", "Playwright"],
  },
  {
    id: "waste-classification-model",
    title: "Waste Classification Model",
    description:
      "Designed an AI-based waste classification system with 92% accuracy using CNN and YOLO for real-time detection. Selected among the top 60 projects in a Government of India conference.",
    icon: "/skills/tensorflow.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Research,
    githubUrl: "https://github.com/Hiteshydv001/Waste-classification-model-cnn.git",
    tags: ["TensorFlow", "OpenCV", "Streamlit", "Python", "PIL"],
  },
  {
    id: "guard-ai",
    title: "Guard AI: Remote Proctoring System",
    description:
      "Created an AI-powered remote proctoring system with facial recognition, gaze tracking, and lip movement detection to enhance online exam security.",
    icon: "/skills/python.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.OpenSource,
    githubUrl: "https://github.com/Hiteshydv001/Guard-AI",
    tags: ["Python", "FastAPI", "OpenCV", "Machine Learning", "Streamlit", "Vercel"],
  },
];

export default projects;
