import Link from "next/link";
import Image from "next/image";

interface Project {
  title: string;
  authors: string;
  venue?: string;
  date?: string;
  link?: string;
  bullets: string[];
  section: "research" | "industry";
  youtubeId?: string; // 👈 real YouTube embed support
  imageID?: string;
}

const projects: Project[] = [
  {
    section: "research",
    title: "Efficient Zero-Shot Voice Cloning for Bengali Speech Synthesis",
    authors: "Abir Ahmed, Prapti Roy, Durjoy Chandra Paul, and M. Shahidur Rahman",
    bullets: [
      "A versatile audio super-resolution model that upsamples music, speech, and sound effects from 4–32kHz to 44.1kHz.",
      "Combines text and spectral roll-off embeddings for robust and semantically aligned reconstruction.",
      "Based on a DiT backbone trained with a flow matching objective.",
      "Achieves state-of-the-art performance in both objective and subjective evaluations.",
    ],
    link: "/zs-vcl",
    imageID: "XXXXX",
  },

  // {
  //   section: "research",
  //   title: "FlashSR: One-step Versatile Audio Super-resolution via Diffusion Distillation",
  //   authors: "Jaekwon Im, Juhan Nam",
  //   venue: "ICASSP 2025",
  //   bullets: [
  //     "A one-step diffusion model for audio super-resolution from 4–32kHz to 48kHz.",
  //     "Includes SR Vocoder designed for mel-spectrogram SR.",
  //     "14× faster than real-time on a single A6000 GPU.",
  //   ],
  //   link: "#",
  //   youtubeId: "YYYYY",
  // },

  // {
  //   section: "industry",
  //   title: "VOX Factory",
  //   authors: "AudAI (Co-founder & AI / SW Engineer)",
  //   date: "May 2023 — Jul 2025",
  //   bullets: [
  //     "Research on neural vocoders and singing voice synthesis.",
  //     "Product development of Vox Factory using SolidJS.",
  //   ],
  //   link: "#",
  //   youtubeId: "ZZZZZ",
  // },

  // {
  //   section: "industry",
  //   title: "AI Voice Collaboration with SM Entertainment (nævis - Sensitive)",
  //   authors: "AudAI (Co-founder & AI / SW Engineer)",
  //   date: "Released Aug 2025",
  //   bullets: [
  //     "AudAI provided AI voice technology for SM Entertainment’s virtual artist nævis.",
  //   ],
  //   youtubeId: "AAAAA",
  // },
];

export default function ProjectsPage() {
  const research = projects.filter((p) => p.section === "research");
  const industry = projects.filter((p) => p.section === "industry");

  return (
    <div className="max-w-4xl mx-auto py-10 px-6">
      {/* ----- Research Section ----- */}
      <h2 className="text-xl font-semibold border-b pb-2 mb-6">Research</h2>

      {research.map((p, i) => (
        <div key={i} className="mb-14">
          {/* Title */}
          <h3 className="text-2xl font-bold mb-1">{p.title}</h3>

          <p className="text-gray-700 text-sm mb-1">{p.authors}</p>

          {p.venue && <p className="text-gray-600 text-sm italic mb-1">{p.venue}</p>}
          {p.date && <p className="text-gray-600 text-sm italic mb-1">{p.date}</p>}

          {p.link && (
            <Link
              href={p.link}
              className="text-blue-600 underline text-sm mb-3 inline-block"
            >
              project page
            </Link>
          )}

          {/* Bullet list */}
          <ul className="list-disc ml-6 text-sm text-gray-800 mb-4">
            {p.bullets.map((b, idx) => (
              <li key={idx}>{b}</li>
            ))}
          </ul>

          {/* YouTube embed */}
          {p.youtubeId && (
            <div className="w-full rounded-lg overflow-hidden border mt-3">
              <iframe
                className="w-full aspect-video"
                src={`https://www.youtube.com/embed/${p.youtubeId}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          )}
          {/* Image */}
          {p.imageID && (
            <div className="w-full rounded-lg overflow-hidden border mt-3">
              <Image
                src="/zs-vcl.jpeg" // replace with your actual diagram path
                width={900}
                height={600}
                alt="Model Diagram"
                className="rounded-lg shadow"
              />
              <p className="text-center text-sm text-gray-600 mt-2">
                Fig. 3. Proposed Architecture
              </p>
            </div>
      )}
    </div>
  ))
}

{/* ----- Industry Section ----- */ }
<h2 className="text-xl font-semibold border-b pb-2 mt-16 mb-6">Industry</h2>

{
  industry.map((p, i) => (
    <div key={i} className="mb-14">
      <h3 className="text-2xl font-bold mb-1">{p.title}</h3>

      <p className="text-gray-700 text-sm mb-1">{p.authors}</p>
      {p.date && <p className="text-gray-600 text-sm italic mb-1">{p.date}</p>}

      {p.link && (
        <Link
          href={p.link}
          className="text-blue-600 underline text-sm mb-3 inline-block"
        >
          project page
        </Link>
      )}

      <ul className="list-disc ml-6 text-sm text-gray-800 mb-4">
        {p.bullets.map((b, idx) => (
          <li key={idx}>{b}</li>
        ))}
      </ul>

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
  ))
}
    </div >
  );
}
