import React from "react";
import Image from "next/image";
import Link from "next/link";

const ZeroShotVoiceCloningBlog = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">
        Efficient Zero-Shot Voice Cloning for Bengali Speech Synthesis
      </h1>
      <p className="mb-6 text-lg">
        Voice cloning technology is transforming the way we interact with machines. Imagine a system that can mimic a person's voice after hearing just a few seconds of their speech—now applied to <strong>Bengali</strong>, a language that has been largely underrepresented in AI research.
      </p>

      <h2 className="text-2xl font-semibold mb-3">Our Approach</h2>
      <p className="mb-6">
        We explored <strong>zero-shot voice cloning</strong> for Bengali, which allows generating speech in a target speaker’s voice <em>without prior training on that speaker</em>. This has practical applications in:
      </p>
      <ul className="list-disc list-inside mb-6">
        <li>Assisting individuals who have lost their ability to speak</li>
        <li>Dubbing movies or media in Bengali</li>
        <li>Translating voices across languages</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-3">Dataset</h2>
      <p className="mb-4">
        For training, we used a combination of multi-speaker and single-speaker datasets. Below is the summary of the multi-speaker dataset:
      </p>
      <table className="w-full mb-6 border border-gray-300 text-left">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-4 py-2">Speaker</th>
            <th className="border px-4 py-2">Gender</th>
            <th className="border px-4 py-2">Duration</th>
            <th className="border px-4 py-2"># of Audio Files</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="border px-4 py-2">speaker0</td><td className="border px-4 py-2">Female</td><td className="border px-4 py-2">03:56:27</td><td className="border px-4 py-2">1107</td></tr>
          <tr><td className="border px-4 py-2">speaker1</td><td className="border px-4 py-2">Female</td><td className="border px-4 py-2">01:14:38</td><td className="border px-4 py-2">333</td></tr>
          <tr><td className="border px-4 py-2">speaker2</td><td className="border px-4 py-2">Female</td><td className="border px-4 py-2">04:26:54</td><td className="border px-4 py-2">1189</td></tr>
          <tr><td className="border px-4 py-2">speaker3</td><td className="border px-4 py-2">Female</td><td className="border px-4 py-2">01:56:13</td><td className="border px-4 py-2">480</td></tr>
          <tr><td className="border px-4 py-2">speaker4</td><td className="border px-4 py-2">Female</td><td className="border px-4 py-2">01:05:01</td><td className="border px-4 py-2">276</td></tr>
          <tr><td className="border px-4 py-2">speaker5</td><td className="border px-4 py-2">Male</td><td className="border px-4 py-2">01:50:34</td><td className="border px-4 py-2">489</td></tr>
          <tr><td className="border px-4 py-2">speaker6</td><td className="border px-4 py-2">Male</td><td className="border px-4 py-2">01:20:40</td><td className="border px-4 py-2">361</td></tr>
          <tr><td className="border px-4 py-2">speaker7</td><td className="border px-4 py-2">Male</td><td className="border px-4 py-2">03:32:43</td><td className="border px-4 py-2">1005</td></tr>
          <tr><td className="border px-4 py-2">speaker8</td><td className="border px-4 py-2">Male</td><td className="border px-4 py-2">02:05:49</td><td className="border px-4 py-2">528</td></tr>
          <tr><td className="border px-4 py-2">speaker9</td><td className="border px-4 py-2">Male</td><td className="border px-4 py-2">02:00:52</td><td className="border px-4 py-2">517</td></tr>
          <tr><td className="border px-4 py-2">speaker10</td><td className="border px-4 py-2">Male</td><td className="border px-4 py-2">01:35:59</td><td className="border px-4 py-2">429</td></tr>
          <tr><td className="border px-4 py-2">speaker11</td><td className="border px-4 py-2">Male</td><td className="border px-4 py-2">01:36:32</td><td className="border px-4 py-2">470</td></tr>
          <tr><td className="border px-4 py-2">speaker12</td><td className="border px-4 py-2">Male</td><td className="border px-4 py-2">00:44:35</td><td className="border px-4 py-2">206</td></tr>
          <tr className="font-bold"><td className="border px-4 py-2">Total</td><td className="border px-4 py-2">--</td><td className="border px-4 py-2">27:27:02</td><td className="border px-4 py-2">7390</td></tr>
        </tbody>
      </table>

      <h2 className="text-2xl font-semibold mb-3">Approach 1: Speaker Encoder (SE)</h2>
      <p className="mb-4">
        The SE approach extracts speaker characteristics from a short audio clip and synthesizes Bengali speech in that speaker's voice.
      </p>
      <Image
        src="/zs-vcl/SE.png"
        alt="Speaker Encoder Architecture"
        width={800}
        height={500}
        className="mb-6 rounded-lg shadow-md"
      />

      <h2 className="text-2xl font-semibold mb-3">Approach 2: Speaker Converter (SC)</h2>
      <p className="mb-4">
        The SC approach converts synthesized speech from a base TTS model into the target speaker's voice using a pre-trained converter.
      </p>
      <Image
        src="/zs-vcl/SC.png"
        alt="Speaker Converter Architecture"
        width={800}
        height={500}
        className="mb-6 rounded-lg shadow-md"
      />

      <h2 className="text-2xl font-semibold mb-3">Ensemble Approach</h2>
      <p className="mb-4">
        By combining SE and SC, we further improved the quality of cloned Bengali speech.
      </p>
      <Image
        src="/zs-vcl/Proposed.jpeg"
        alt="Proposed Ensemble Architecture"
        width={800}
        height={500}
        className="mb-6 rounded-lg shadow-md"
      />

      <h2 className="text-2xl font-semibold mb-3">Results</h2>
      <table className="w-full mb-6 border border-gray-300 text-left">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-4 py-2">Approach</th>
            <th className="border px-4 py-2">MOS</th>
            <th className="border px-4 py-2">Cosine Similarity (%)</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="border px-4 py-2">SE</td><td className="border px-4 py-2">3.8 ± 0.11</td><td className="border px-4 py-2">83.00</td></tr>
          <tr><td className="border px-4 py-2">SC</td><td className="border px-4 py-2">4.0 ± 0.11</td><td className="border px-4 py-2">82.64</td></tr>
          <tr className="font-bold"><td className="border px-4 py-2">Ensemble</td><td className="border px-4 py-2">4.4 ± 0.11</td><td className="border px-4 py-2">85.21</td></tr>
        </tbody>
      </table>

      <h2 className="text-2xl font-semibold mb-3">Try It Yourself</h2>
      <p className="mb-6">
        Experience the Bengali voice cloning demo here:{" "}
        <Link
          href="https://bengali-zero-shot-voice-cloning.netlify.app/"
          className="text-blue-600 underline"
          target="_blank"
        >
          Voice Cloning Demo
        </Link>
      </p>

      <p>
        For full technical details, check out the complete paper:{" "}
        <Link
          href="https://ieeexplore.ieee.org/document/11022026"
          className="text-blue-600 underline"
          target="_blank"
        >
          Full Paper on IEEE Xplore
        </Link>
      </p>
    </div>
  );
};

export default ZeroShotVoiceCloningBlog;
