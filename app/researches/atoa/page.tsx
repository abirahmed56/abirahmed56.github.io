"use client";

import Image from "next/image";

export default function AT2ATranslationBlog() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-14 space-y-10">

      {/* HEADER */}
      <header className="text-center space-y-3 mb-12">
        <h1 className="text-4xl font-bold">Audio-to-Audio Translation Preserving Speaker Identity</h1>
        <p className="text-gray-600 text-lg">
          Ongoing research on building a zero-shot audio translation pipeline that converts Bangla speech to English
          while maintaining the original speaker's identity.
        </p>
      </header>

      {/* OVERVIEW */}
      <Card title="Overview">
        <p>
          This ongoing research focuses on developing an <strong>end-to-end, zero-shot audio-to-audio translation</strong>
          system capable of translating Bangla speech to English while preserving the speaker’s unique vocal identity.
          The motivation behind this project stems from three major works:
        </p>
        <ul className="list-disc ml-6 mt-2 space-y-1">
          <li><strong>Direct Speech-to-Speech Translation with Discrete Units</strong> (Google Research)</li>
          <li><strong>Enhanced Direct Speech-to-Speech Translation Using Self-supervised Pre-training and Data Augmentation</strong></li>
          <li><strong>Efficient Zero-Shot Voice Cloning for Bengali Speech Synthesis</strong> </li>
        </ul>
        <p className="mt-3">
          Combining these ideas, the goal is to build a translation pipeline that can operate without parallel data,
          works in zero-shot settings, and preserves (or can optionally convert) speaker identity.
        </p>
      </Card>

      {/* MOTIVATION */}
      <Card title="Motivation">
        <p>
          High-quality Bangla speech-to-speech translation (S2ST) is extremely limited, primarily due to scarce
          parallel datasets and low-resource conditions. Existing S2ST systems either:
        </p>
        <ul className="list-disc ml-6 mt-2 space-y-1">
          <li>Lose speaker identity during translation</li>
          <li>Require large supervised datasets</li>
          <li>Or rely heavily on cascaded ASR → MT → TTS systems</li>
        </ul>

        <p className="mt-3">
          This project aims to achieve <strong>direct S2ST</strong> using <strong>discrete speech units</strong> while leveraging your previously developed <strong>zero-shot cloning</strong> approach to preserve voice characteristics in both source and target languages.
        </p>
      </Card>

      {/* CURRENT PIPELINE */}
      <Card title="Current Pipeline (Prototype)">
        <p>
          The initial prototype follows an <strong>ensemble-style pipeline</strong>, inspired by my previous
          work in “Efficient Zero-Shot Voice Cloning for Bengali Speech Synthesis.” Unlike the earlier model,
          this system uses two pre-trained models to create a training-free translation pipeline:
        </p>

        <Image
          src="/atoa/atoa-current.png"
          alt="Audio Translation Pipeline Diagram"
          width={1000}
          height={600}
          className="rounded-xl shadow-md my-6"
          unoptimized
        />

        <ul className="list-disc ml-6 space-y-2">
          <li><strong>Model A:</strong> Converts Bangla speech → discrete speech/text units</li>
          <li><strong>Model B:</strong> Decodes units → English audio</li>
          <li><strong>Voice Encoder:</strong> Extracts speaker embedding from source Bangla audio</li>
        </ul>

        <p className="mt-3">
          While the system is not yet end-to-end, it can already generate English audio from Bangla speech while 
          preserving noticeable speaker traits.
        </p>

        <div className="mt-6 space-y-3">
          <p><strong>Input Bangla Speech:</strong></p>
          <audio controls src="/atoa/input_bangla.wav" className="w-full"></audio>

          <p className="mt-4"><strong>Synthesized English Output (Speaker Preserved):</strong></p>
          <audio controls src="/atoa/synthesized_eng.wav" className="w-full"></audio>
        </div>
      </Card>

      {/* COLLABORATION SECTION */}
      <Card title="Current Collaboration">
        <p>
          This work is part of a collaborative effort with my supervisor and a PhD researcher, where we are jointly
          working on a Bangla <strong>Direct S2ST</strong> model inspired by the “Direct Speech-to-Speech Translation
          with Discrete Units” framework. My contributions include:
        </p>
        <ul className="list-disc ml-6 mt-2 space-y-1">
          <li>Designing a speaker-preserving extension of the discrete-unit pipeline</li>
          <li>Creating synthesized Bangla–English training data for low-resource adaptation</li>
          <li>Developing the zero-shot reference speaker module</li>
        </ul>
      </Card>

      {/* CHALLENGES */}
      <Card title="Challenges">
        <p>The main challenges in this ongoing research include:</p>
        <ul className="list-disc ml-6 mt-2 space-y-1">
          <li>Limited availability of high-quality Bangla S2ST datasets</li>
          <li>Irregular GPU access slowing down experimentation</li>
          <li>Integrating discrete unit models with zero-shot speaker preservation</li>
          <li>Aligning units across languages without explicit supervision</li>
        </ul>
      </Card>

      {/* FUTURE PLANS */}
      <Card title="Future Work">
      <Image
          src="/atoa/atoa-diagram.png"
          alt="Audio Translation Pipeline Diagram"
          width={1000}
          height={600}
          className="rounded-xl shadow-md my-6"
          unoptimized
        />
        <p>The next stages of this project include:</p>

        <ul className="list-disc ml-6 space-y-2 mt-2">
          <li>
            Building a fully <strong>end-to-end S2ST model</strong> inspired by
            “Enhanced Direct S2ST Using Self-Supervised Pre-training and Data Augmentation.”
          </li>
          <li>
            Integrating a <strong>zero-shot, reference-based voice module</strong> into the decoder 
            to preserve or convert voices.
          </li>
          <li>
            Expanding the synthesized dataset to train a unified translation model.
          </li>
          <li>
            Experimenting with discrete units (HuBERT / w2v-BERT / EnCodec units) for improved alignment.
          </li>
          <li>
            Publishing this work as an extended version of the currently developing direct S2ST paper.
          </li>
        </ul>
      </Card>

      {/* CITATIONS */}
      <Card title="Key References">
        <ul className="list-disc ml-6 space-y-2">
          <li>
            <strong>Direct Speech-to-Speech Translation with Discrete Units</strong>
          </li>
          <li>
            <strong>Enhanced Direct Speech-to-Speech Translation Using Self-supervised Pre-training and Data Augmentation</strong>
          </li>
          <li>
            <strong>Efficient Zero-Shot Voice Cloning for Bengali Speech Synthesis</strong>
          </li>
        </ul>
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
