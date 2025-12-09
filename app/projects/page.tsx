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
    section: "Academic",
    title: "Shopap: Using Monorepo and Next.js",
    authors: "Abir Ahmed, Sonjoy Saha",
    bullets: [
      "DCT-GAN improves GAN training by maintaining balanced diversity using a simple feature-based controller",
      "Uses DINOv2 features to prevent mode collapse without adding extra networks",
      "Produces fast, high-quality, and diverse MRI images from limited data",
    ],
    link: "/researches/dct-gan",
    imageID: "datc.png",
    imageD: "Overall workflow of DCT-GAN",
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
      {renderSection("Academic", Academic)}
      {renderSection("Industry", Industry)}
      {renderSection("Personal", Personal)}
    </div>
  );
}
