import React from "react";

const blogs = [
  {
    title: "The Future of AI in 2025",
    description:
      "Artificial Intelligence is evolving rapidly, shaping industries from healthcare to finance. In 2025, we can expect even more advancements in AI-powered automation, generative AI applications, and ethical considerations surrounding AI adoption.",
    date: "February 20, 2025",
  },
  {
    title: "Understanding Generative AI",
    description:
      "Generative AI refers to AI systems that can create text, images, music, and more. With models like GPT-4 and Stable Diffusion, AI is revolutionizing content generation. This article explores its working principles and real-world applications.",
    date: "January 15, 2025",
  },
  {
    title: "Machine Learning for Beginners",
    description:
      "Machine Learning is the backbone of AI. This beginner-friendly guide covers the basics of supervised and unsupervised learning, popular ML algorithms, and how to get started with tools like Scikit-Learn and TensorFlow.",
    date: "December 5, 2024",
  },
  {
    title: "Deploying AI Models with FastAPI",
    description:
      "Once you build an AI model, deploying it efficiently is the next step. FastAPI provides a lightweight, high-performance way to deploy ML models as APIs. This guide walks you through the steps of setting up FastAPI and integrating an ML model.",
    date: "November 10, 2024",
  },
];

function BlogPage() {
  return (
    <div className="min-h-screen p-20 bg-[var(--bgColor)] dark:bg-[var(--bgColor)] dark:bg-grid-white/[0.1] bg-grid-white/[0.1]">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-[var(--textColor)] dark:text-[var(--textColor)]">
          Blog Posts
        </h1>
        <p className="text-center text-[var(--textColorLight)] mt-2">
          Stay updated with my insights on AI, Machine Learning, and more.
        </p>

        <div className="mt-8 space-y-6">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="p-6 bg-[var(--dialogColor)] dark:bg-[var(--dialogColor)] rounded-lg shadow"
            >
              <h2 className="text-2xl font-semibold text-[var(--primaryColor)]">
                {blog.title}
              </h2>
              <p className="text-sm text-[var(--textColorLight)]">{blog.date}</p>
              <p className="mt-2 text-[var(--textColor)]">{blog.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BlogPage;
