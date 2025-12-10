"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, ChevronUp } from "lucide-react";

interface Research {
  title: string;
  authors: string;
  venue?: string;
  date?: string;
  link?: string;
  bullets: string[];
  section: "Academic" | "Industry" | "Personal";
  youtubeId?: string;
  imageID?: string;
  imageD?: string;
}

const researches: Research[] = [
  {
    section: "Personal",
    title: "Employee Oversight",
    authors: "",
    bullets: [
      "Developed a Next.js-based system to manage employee tasks, attendance, and performance tracking.",
      "Implemented interactive dashboards and automated reports for monitoring productivity and efficiency",
      "Designed modular frontend and backend structure for scalable record handling and workflow management.",
    ],
    link: "/projects/employee-oversight",
    imageID: "",
    imageD: "Sample analysis output",
  },
  {
    section: "Academic",
    title: "Result-Processing-System",
    authors: "",
    bullets: [
      "Developed a comprehensive web application to automate university result processing.",
      "Did proper requirement analysis and design relational database using MySQL.",
      "Used ExpressJS as backend and React as Frontend to develop this application.",
    ],
    link: "/projects/result-processing",
    imageID: "",
    imageD: "Sample analysis output",
  },
  {
    section: "Academic",
    title: "Planet-RTS-137",
    authors: "",
    bullets: [
      "Developed a 2D Unity platformer with player movement, shooting, and collision mechanics.",
      "Designed 3 levels with enemies, obstacles, checkpoints, and collectible coins.",
      "Implemented gameplay logic using C# scripts for AI, scoring, and level progression.",
    ],
    link: "/projects/planet-rts",
    imageID: "",
    imageD: "Sample analysis output",
  },
  {
    section: "Industry",
    title: "Stock Market Forecasting",
    authors: "",
    bullets: [
      "Designed and experimented with multiple machine learning models for time series forecasting.",
      "Developed preprocessing and feature engineering strategies to improve model accuracy.",
      "Produced initial LSTM-based notebooks demonstrating stock price prediction and 30-day forecasts.",
    ],
    link: "/projects/stock-forecast",
    imageID: "stock-forecast/forecast.png",
    imageD: "Sample analysis output",
  },
  {
    section: "Industry",
    title: "Sales-Sense: Sales data analysis",
    authors: "",
    bullets: [
      "Retrived and analyzed sales data to extract key insights.",
      "Developed FastAPI endpoints for analytics visualization.",
      "Integrated Mapbox for location-based tracking.",
    ],
    link: "/projects/sales-sense",
    imageID: "sales-sense/salesarea1.png",
    imageD: "Sample analysis output",
  },
  {
    section: "Industry",
    title: "Shopap: Multi-Theme E-Commerce",
    authors: "",
    bullets: [
      "It is built with Next.Js and Monorepo",
      "Built two different interface using shared state management code",
      "It made faster customize Shopapp webside changing only layout components according to client interest",
    ],
    link: "/projects/shopapp",
    imageID: "shopapp/monorepo.png",
    imageD: "Overall Architecture of ShopApp",
  },
];

export default function ProjectsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const Academic = researches.filter((p) => p.section === "Academic");
  const Industry = researches.filter((p) => p.section === "Industry");
  const Personal = researches.filter((p) => p.section === "Personal");

  // Small helper to render category
  const renderSection = (title: string, items: Research[]) => (
    <>
      <h2 className="text-xl font-semibold border-b pb-2 mt-10 mb-6">{title}</h2>

      {items.map((p, index) => {
        const isOpen = openIndex === p.title.length + index; // unique key

        return (
          <div key={index} className="mb-6 border rounded-lg p-4 bg-white shadow-sm">
            {/* -------- Title Row -------- */}
            <button
              onClick={() =>
                setOpenIndex(isOpen ? null : p.title.length + index)
              }
              className="w-full text-left flex justify-between items-center"
            >
              <span className="text-lg font-semibold">{p.title}</span>
              <span className="text-2xl">{isOpen ? <ChevronUp size={20}/> : <ChevronDown size={20}/>}</span>
            </button>

            {/* -------- Expanded Content -------- */}
            {isOpen && (
              <div className="mt-4 border-t pt-4 space-y-3">
                <p className="text-gray-700 text-sm">{p.authors}</p>

                {p.venue && (
                  <p className="text-gray-600 text-sm italic">{p.venue}</p>
                )}
                {p.date && (
                  <p className="text-gray-600 text-sm italic">{p.date}</p>
                )}

                {p.link && (
                  <Link
                    href={p.link}
                    className="text-blue-600 underline text-sm inline-block"
                  >
                    See Details
                  </Link>
                )}

                <ul className="list-disc ml-6 text-sm text-gray-800">
                  {p.bullets.map((b, idx) => (
                    <li key={idx}>{b}</li>
                  ))}
                </ul>

                {/* Image */}
                {p.imageID && (
                  <div className="w-full rounded-lg overflow-hidden border mt-3">
                    <Image
                      src={`/${p.imageID}`}
                      width={900}
                      height={600}
                      alt={p.imageD || "Project Image"}
                      className="rounded-lg shadow"
                    />
                    <p className="text-center text-sm text-gray-600 mt-2">
                      {p.imageD || "Figure"}
                    </p>
                  </div>
                )}

                {/* YouTube */}
                {p.youtubeId && (
                  <div className="w-full rounded-lg overflow-hidden border mt-3">
                    <iframe
                      className="w-full aspect-video"
                      src={`https://www.youtube.com/embed/${p.youtubeId}`}
                      allowFullScreen
                    />
                  </div>
                )}
              </div>
            )}
          </div>
        );
      })}
    </>
  );

  return (
    <div className="max-w-4xl mx-auto py-10 px-6">
      {renderSection("Industry", Industry)}
      {renderSection("Academic", Academic)}
      {renderSection("Personal", Personal)}
    </div>
  );
}
