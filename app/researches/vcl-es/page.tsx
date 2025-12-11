"use client";

import Image from "next/image";

export default function EmotionAwareVoiceSynthesisBlog() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-14 space-y-10">

      {/* HEADER */}
      <header className="text-center space-y-3 mb-12">
        <h1 className="text-4xl font-bold">Emotion-Aware Zero-Shot Voice Synthesis for Low-Resource Scenarios</h1>
        <p className="text-gray-600 text-lg">
          Ongoing research on extending Bangla zero-shot voice cloning to include emotion-aware speech synthesis 
          in low-resource scenarios.
        </p>
      </header>

      {/* OVERVIEW */}
      <Card title="Overview">
        <p>
          This ongoing work focuses on <strong>emotion-aware, zero-shot voice synthesis</strong> that can generate 
          expressive speech while preserving the target speaker’s identity. It builds upon my previous work, 
          <strong>“Efficient Zero-Shot Voice Cloning for Bengali Speech Synthesis”</strong>, which was published in ICCIT 2024 
          (<a href="https://ieeexplore.ieee.org/document/11022026" target="_blank" className="text-blue-600 underline">link to paper</a>).
        </p>
        <p className="mt-3">
          In the previous work, the system used only 27 hours of Bangla speech from 12 speakers to train a speaker encoder 
          based on <strong>VITS: Conditional Variational Autoencoder with Adversarial Learning</strong>. The pipeline could take 
          Bangla text and a reference speaker audio and synthesize speech in the target speaker's voice. 
          A secondary pretrained converter from the OpenVoice paper further improved the audio quality in a two-step cloning process.
        </p>
      </Card>

      {/* MOTIVATION */}
      <Card title="Motivation">
        <p>
          While the previous system successfully performed zero-shot voice cloning for Bangla, it lacked emotion expressiveness. 
          The goal of this project is to extend the system to be <strong>emotion-aware</strong> while improving cloning quality.
        </p>
        <ul className="list-disc ml-6 mt-2 space-y-1">
          <li>Enhance naturalness and expressiveness of synthesized speech</li>
          <li>Maintain target speaker identity in zero-shot settings</li>
          <li>Work under low-resource conditions using pretrained models and small datasets</li>
        </ul>
      </Card>

      {/* UPDATED PIPELINE */}
      <Card title="Updated Pipeline (Prototype)">
        <p>
          The updated pipeline improves speaker cloning by training a new speaker encoder with ~160 hours of speech from 59 speakers, 
          up from 27 hours and 12 speakers previously. The workflow follows a two-step cloning process similar to the previous work:
        </p>

        <ul className="list-disc ml-6 space-y-2 mt-2">
          <li><strong>Step 1:</strong> Generate natural cloned speech from the speaker encoder trained from scratch on expanded data.</li>
          <li><strong>Step 2:</strong> Use a pretrained multilingual converter to further improve audio quality, using the synthesized output and reference speaker audio as input.</li>
        </ul>

        <div className="mt-6 space-y-3">
          <p><strong>Demo for updated system:</strong></p>
          <p className="mt-2">Text: "সম্পূর্ণ সূর্যালোকে ফ্ল্যাশ ফটোগ্রাফি সবচেয়ে ভালোভাবে ব্যবহার করা হয়।"</p>
          <p className="mt-2"><strong>Reference Speaker Audio:</strong></p>
          <audio controls src="/vcl-es/reference_audio.wav" className="w-full"></audio>

          <p className="mt-4"><strong>Ground Truth:</strong></p>
          <audio controls src="/vcl-es/ground_truth.wav" className="w-full"></audio>

          <p className="mt-4"><strong>Synthesized Output:</strong></p>
          <audio controls src="/vcl-es/synthesized_output.wav" className="w-full"></audio>
        </div>

        <p className="mt-3">
          For the previous version demo, please visit: 
          <a href="https://bengali-zero-shot-voice-cloning.netlify.app/" target="_blank" className="text-blue-600 underline">here</a>.
        </p>
      </Card>

      {/* EMOTION-AWARE EXTENSION */}
      <Card title="Emotion-Aware Extension">
        <p>
          The next step is to incorporate <strong>emotion conditioning</strong> in the zero-shot pipeline. 
          The system will accept an additional <strong>reference emotion audio</strong> along with the reference speaker audio. 
          Experiments involve:
        </p>
        <ul className="list-disc ml-6 mt-2 space-y-1">
          <li>Modified pretrained encoders to extract speaker and emotion embeddings</li>
          <li>Finetuning pretrained networks with small emotion-labeled datasets</li>
          <li>Zero-shot emotion transfer in conjunction with speaker preservation</li>
        </ul>

        <p className="mt-3">
          Current challenges include GPU availability and pretrained models not fully capturing emotion nuances. 
          Experimentation is ongoing.
        </p>
      </Card>

      {/* FUTURE WORK */}
      <Card title="Future Plans">
        <ul className="list-disc ml-6 mt-2 space-y-2">
          <li>Replace the OpenVoice converter component with an emotion-aware module</li>
          <li>Further improve cloning naturalness and emotional expressiveness</li>
          <li>Evaluate multi-lingual zero-shot emotion transfer performance</li>
          <li>Publish updated findings and demos for research dissemination</li>
        </ul>
      </Card>

      {/* COLLABORATION */}
      <Card title="Collaboration & Contact">
        <p>
          This is an ongoing research task. Specific details cannot be publicly disclosed at this stage. 
          Researchers interested in collaboration may contact me at: 
          <a href="mailto:abirahmedsohan6@gmail.com" className="text-blue-600 underline">abirahmedsohan6@gmail.com</a>.
        </p>
      </Card>

    </div>
  );
}

/* ---------------- REUSABLE CARD COMPONENT ---------------- */

function Card({ title, children }: { title: string; children: any }) {
  return (
    <section className="bg-white p-8 rounded-2xl shadow-sm border space-y-4">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <div className="text-gray-700 leading-relaxed">{children}</div>
    </section>
  );
}
