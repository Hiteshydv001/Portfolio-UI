import { IServiceItem } from "@/types";

const services: IServiceItem[] = [
  {
    id: 1,
    title: "AI & Machine Learning Solutions",
    icons: [
      "/skills/tensorflow.svg",
      "/skills/pytorch.svg",
      "/skills/huggingface.svg",
      "/skills/nlp.png",
      "/skills/opencv.svg",
    ],
    shortDescription:
      "I develop AI-driven solutions for business intelligence and automation.",
    description:
      "I specialize in building AI models for NLP, computer vision, and predictive analytics. Using deep learning and generative AI, I create custom models for automation, decision-making, and data-driven insights. Unlock the power of AI for your business with scalable and efficient solutions.",
  },
  {
    id: 2,
    title: "Data Science & Analytics",
    icons: [
      "/skills/jupyter.svg",
      "/skills/sql.svg",
      "/skills/postgresql.svg",
      "/skills/git.svg",
      "/skills/github.svg",
    ],
    shortDescription: "I analyze and visualize data to extract meaningful insights.",
    description:
      "I provide advanced data analytics services, including statistical analysis, feature engineering, and predictive modeling. I use Python, SQL, and big data tools to transform raw data into actionable insights that drive business growth and decision-making.",
  },
  {
    id: 3,
    title: "MLOps & Model Deployment",
    icons: [
      "/skills/docker.svg",
      "/skills/kubernetes.svg",
      "/skills/aws.svg",
      "/skills/tensorflow.svg",
      "/skills/jupyter.svg",
    ],
    shortDescription: "I deploy scalable AI models for real-world applications.",
    description:
      "I streamline machine learning deployment using MLOps best practices. From building CI/CD pipelines to deploying models on cloud platforms, I ensure that AI solutions are production-ready, scalable, and continuously improving through automated model retraining.",
  },
  {
    id: 4,
    title: "Web Development & Automation",
    icons: [
      "/skills/react.svg",
      "/skills/nextjs.svg",
      "/skills/javascript.svg",
      "/skills/nodejs.svg",
      "/skills/docker.svg",
    ],
    shortDescription: "I build intelligent web applications and automation tools.",
    description:
      "I develop full-stack applications with AI integration for smarter user experiences. Leveraging frameworks like React.js, Next.js, and Node.js, I create web-based AI tools, chatbots, and automated solutions that enhance user engagement and streamline operations.",
  },
  {
    id: 5,
    title: "Big Data & Cloud Computing",
    icons: [
      "/skills/spark.svg",
      "/skills/hadoop.svg",
      "/skills/aws.svg",
      "/skills/azure.svg",
      "/skills/databricks.svg",
    ],
    shortDescription: "I process and manage large-scale data using cloud solutions.",
    description:
      "I handle big data processing using Apache Spark, Hadoop, and cloud platforms like AWS and Azure. From ETL pipelines to distributed computing, I help businesses leverage cloud computing to scale efficiently and optimize performance.",
  },
  {
    id: 6,
    title: "Research & AI Consulting",
    icons: [
      "/skills/ai.jpg",
      "/skills/nlp.png",
      "/skills/jupyter.svg",
      "/skills/git.svg",
      "/skills/github.svg",
    ],
    shortDescription: "I provide AI research insights and strategy consultation.",
    description:
      "With experience in AI research and academic projects, I assist in developing cutting-edge solutions. I provide consultation on AI trends, ethics, and implementation strategies to ensure businesses stay ahead in the evolving AI landscape.",
  },
];

export default services;
