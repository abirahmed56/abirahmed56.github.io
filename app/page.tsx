import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <section className="flex flex-col items-center gap-0">
      {/* Smaller, centered cover image */}
      <Image
        src="/cover.jpeg"
        alt="Cover"
        width={700}
        height={150}
        className="object-contain mx-auto"
      />

      {/* Centered announcement */}
      <div className="bg-gray-100 p-4 rounded-md text-medium text-center w-full max-w-md">
        🚀 Seeking MS/PhD positions for Fall 2026. 🚀
      </div>

      {/* Centered paragraph */}
      <p className="text-gray-800 leading-relaxed text-[15px] text-center max-w-3xl">
        I am a graduate student and candidate for MS/PHD program. <br />
        My research focus is generative AI and Actively working on <br />
        Image (Medical image Synthesis) and Audio (Speech Synthesis) domain.
      </p>
    </section>
  );
}
