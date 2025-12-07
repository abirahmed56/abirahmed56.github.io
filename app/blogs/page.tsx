"use client";
import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, ChevronUp } from "lucide-react";

interface BlogItem {
  title: string;
  tags: string[];
  description: string;
  link: string;
}
// https://www.linkedin.com/pulse/practical-guide-beginning-ml-research-abir-ahmed-nftcc

export default function Page() {
  const ml_blogs: BlogItem[] = [
    {
      title: "A Practical Guide to Beginning ML Research",
      tags: ["beginners", "ml", "research"],
      description:
        "This blog briefly covers:\n\n- A simple 5-phase roadmap to start ML research\n- What to learn in the first 30 days?\n- Which topics you should cover?",
      link: "https://www.linkedin.com/pulse/practical-guide-beginning-ml-research-abir-ahmed-nftcc",
    },
  ];
  const web_blogs: BlogItem[] = [
    {
      title: "React State Management",
      tags: ["beginners", "react"],
      description:
        "Here are all the sections primarily covered in this blog:\n\n- What is state in React?\n- How to manage state in class components?\n- How to manage state in functional components?\n- Examples of different built-in hooks\n- Context and Custom Hooks\n- Redux\n- Factors to consider when choosing between Redux and Context API",
      link: "https://dev.to/abirahmed/react-state-management-327m",
    },
    {
      title: "Creating Interactive Maps with React and Mapbox GL JS in a NextJs App",
      tags: ["map", "nextjs"],
      description:
        "Here are all the sections primarily covered in this blog:\n\n- Overview of the library\n- How to set up starter project using the library?\n- How to integrate Mapbox GL JS with React in Next.js?\n- adding custom markers and line overlay",
      link: "https://dev.to/logiqbits/creating-interactive-maps-with-react-and-mapbox-gl-js-in-a-nextjs-app-53pn",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="p-6 max-w-3xl mx-auto space-y-6">
      <h2 className="text-xl font-semibold border-b pb-2 mb-6">Artificial Intelligence</h2>

      {ml_blogs.map((blog, index) => (
        <div key={index} className="border rounded-xl overflow-hidden">
          {/* Title Row */}
          <button
            onClick={() => toggle(index)}
            className="w-full p-4 flex justify-between items-center bg-gray-100 hover:bg-gray-200"
          >
            <span className="text-lg font-medium">{blog.title}</span>
            {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>

          {/* Expanded Content */}
          {openIndex === index && (
            <div className="p-5 space-y-3 bg-white">
              <div className="flex gap-2 flex-wrap">
                {blog.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-sm bg-gray-200 px-2 py-0.5 rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <p className="text-gray-700 whitespace-pre-line">{blog.description}</p>

              <Link
                href={blog.link}
                target="_blank"
                className="inline-block mt-2 text-blue-600 font-medium hover:underline"
              >
                Read the blog →
              </Link>
            </div>
          )}
        </div>
      ))}
      <h2 className="text-xl font-semibold border-b pb-2 mb-6">Web Development</h2>

      {web_blogs.map((blog, index) => (
        <div key={index} className="border rounded-xl overflow-hidden">
          {/* Title Row */}
          <button
            onClick={() => toggle(index)}
            className="w-full p-4 flex justify-between items-center bg-gray-100 hover:bg-gray-200"
          >
            <span className="text-lg font-medium">{blog.title}</span>
            {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>

          {/* Expanded Content */}
          {openIndex === index && (
            <div className="p-5 space-y-3 bg-white">
              <div className="flex gap-2 flex-wrap">
                {blog.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-sm bg-gray-200 px-2 py-0.5 rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <p className="text-gray-700 whitespace-pre-line">{blog.description}</p>

              <Link
                href={blog.link}
                target="_blank"
                className="inline-block mt-2 text-blue-600 font-medium hover:underline"
              >
                Read the blog →
              </Link>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}