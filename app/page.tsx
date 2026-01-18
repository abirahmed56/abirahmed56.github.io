import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Abir Ahmed | Generative Audio & AI Researcher</title>
        <meta
          name="description"
          content="Abir Ahmed – Generative AI researcher focusing on speech synthesis, audio generation, diffusion models, and low-resource learning."
        />
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-sky-50 to-pink-50">
        <section className="max-w-4xl mx-auto px-6 py-20 space-y-14">
          
          {/* ---------- Header ---------- */}
          <div className="text-center space-y-3">
            <h1 className="text-4xl font-semibold text-gray-900">
              Abir Ahmed
            </h1>
            <p className="text-lg text-gray-600">
              Prospective MSc Applicant
            </p>
          </div>

          {/* ---------- Who I Am ---------- */}
          <section className="bg-white/70 backdrop-blur rounded-2xl p-8 shadow-sm">
            <p className="text-gray-700 leading-relaxed text-[15px]">
              I am a Software Engineering graduate from{" "}
              <b>Shahjalal University of Science and Technology (SUST)</b>,
              Bangladesh, with a strong research focus on{" "}
              <b>generative models for audio and image synthesis</b>.
              My primary interests include <b>speech synthesis, zero-shot
              voice cloning, audio to audio translation</b>, and <b>diffusion-based generative models</b>,
              especially in low-resource scenarios.
            </p>
          </section>

          {/* ---------- Educational Background ---------- */}
          <section className="bg-white/70 backdrop-blur rounded-2xl p-8 shadow-sm">
            <h2 className="text-xl font-semibold text-sky-700 mb-4">
              Educational Background
            </h2>
            <p className="text-gray-700 text-[15px] leading-relaxed">
              <b>BSc in Software Engineering</b> — Shahjalal University of Science
              and Technology (2019–2024) <br />
              CGPA: <b>3.58 / 4.00</b> <br />
              Relevant coursework: Artificial Intelligence, Machine Learning,
              Data Science, Deep Learning, Algorithms, Software Architecture.
            </p>
          </section>

          {/* ---------- Research Focus ---------- */}
          <section className="bg-white/70 backdrop-blur rounded-2xl p-8 shadow-sm">
            <h2 className="text-xl font-semibold text-purple-700 mb-4">
              Research Focus
            </h2>
            <p className="text-gray-700 text-[15px] leading-relaxed">
              In my research, I focus strongly on{" "}
              <b>theory, fundamentals, and architectural understanding</b> of
              state-of-the-art generative models. I work across multiple
              architectures—GANs, VAEs, Transformers, and diffusion models—to
              strengthen my conceptual foundation rather than relying on
              black-box usage.
            </p>
            <p className="text-gray-700 text-[15px] leading-relaxed mt-3">
              I am a quick learner, adaptive to new research directions, and
              highly motivated to work on <b>challenging, high-impact problems</b>.
              My long-term goal is to become a strong researcher and educator in
              AI, addressing real-world challenges faced by low-resource
              countries like Bangladesh.
            </p>
          </section>

          {/* ---------- Research Interests ---------- */}
          <section className="bg-white/70 backdrop-blur rounded-2xl p-8 shadow-sm">
            <h2 className="text-xl font-semibold text-emerald-700 mb-4">
              Research Interests
            </h2>
            <ul className="list-disc list-inside text-gray-700 text-[15px] space-y-1">
              <li>Speech Synthesis & Zero-Shot Voice Cloning</li>
              <li>Generative Audio Models (TTS, Voice Conversion)</li>
              <li>Diffusion Models & Training-Free Generation</li>
              <li>Music & Audio Signal Processing with Deep Learning</li>
              <li>Low-Resource and Controlled Generation</li>
              <li>Multimodal Learning (Audio–Image–Text)</li>
            </ul>
          </section>

          {/* ---------- Research Experience ---------- */}
          <section className="bg-white/70 backdrop-blur rounded-2xl p-8 shadow-sm">
            <h2 className="text-xl font-semibold text-rose-700 mb-4">
              Research Experience
            </h2>

            <ul className="space-y-3 text-gray-700 text-[15px]">
              <li>
                <b>Efficient Zero-Shot Voice Cloning for Bengali Speech Synthesis</b>  
                <span className="text-sm text-gray-500"> (ICCIT 2024)</span>
              </li>
              <li>
                <b>Percept-Diff: Innovations in Stable Diffusion for High-Fidelity IHC Image Generation</b>  
                <span className="text-sm text-gray-500"> (3ICT 2024)</span>
              </li>
              <li>
                <b>DCT-GAN: A Diversity-Controlled Training Strategy for Medical Image Synthesis</b>  
                <span className="text-sm text-gray-500"> (Submitted to IEEE Access)</span>
              </li>
              <li>
                <b>Emotion-Aware Zero-Shot Voice Synthesis for Low-Resource Scenarios</b>  
                <span className="text-sm text-gray-500"> (Ongoing)</span>
              </li>
              <li>
                <b>Audio-to-Audio Translation Preserving Speaker Identity</b>  
                <span className="text-sm text-gray-500"> (Ongoing)</span>
              </li>
            </ul>
          </section>

          {/* ---------- Openness ---------- */}
          <section className="bg-white/70 backdrop-blur rounded-2xl p-8 shadow-sm">
            <h2 className="text-xl font-semibold text-cyan-700 mb-4">
              Openness to Research
            </h2>
            <p className="text-gray-700 text-[15px] leading-relaxed">
              Although my primary expertise lies in audio and image generation,
              I previously worked on <b>time-series forecasting</b> during my
              industry internship and have experimented with <b>LLMs</b>.
              I am open to exploring any challenging research problem that
              requires strong fundamentals and creativity.
            </p>
          </section>

          {/* ---------- Footer ---------- */}
          <footer className="text-center text-sm text-gray-500 pt-6">
            CV, publications, demos, and project details are available in the
            respective sections of this website.
          </footer>

        </section>
      </main>
    </>
  );
}
