import Image from "next/image";

export default function SagaSRPage() {
  return (
    <div className="flex flex-col items-center px-6 py-10 max-w-5xl mx-auto">

      {/* Title */}
      <h1 className="text-3xl font-bold text-center mb-2">
        SAGA-SR: Semantically and Acoustically Guided Audio Super-Resolution
      </h1>

      {/* Authors */}
      <p className="text-center text-gray-700 mb-1">
        Abir Ahmed<sup>1</sup>,
        Prapti Roy<sup>2</sup>,
        Durjoy Chandra Paul<sup>3</sup>,
        and M. Shahidur Rahman<sup>4</sup>
      </p>

      {/* Affiliations */}
      <p className="text-center text-gray-600 mb-6">
        <sup>1,2</sup>Department of Software Engineering, <br />
        <sup>3,4</sup>Department of Computer Science & Engineering, <br />
        <sup>1,2,4</sup>Shahjalal University of Science & Technology, Sylhet, Bangladesh <br />
        <sup>3</sup>Sylhet Engineering College, Sylhet, Bangladesh
      </p>

      {/* Buttons */}
      {/* <div className="flex gap-4 mb-10">
        <button className="px-4 py-2 border rounded-full">Contact</button>
        <button className="px-4 py-2 border rounded-full">arXiv Paper</button>
        <button className="px-4 py-2 border rounded-full">Code</button>
      </div> */}

      {/* Abstract Section */}
      <h2 className="text-2xl font-semibold mb-3">Abstract</h2>
      <p className="text-gray-700 leading-relaxed mb-8">
        Voice cloning has numerous useful applications,
        including assisting individuals who have lost their ability to speak,
        movie dubbing, and translating voices into different languages.
        However, voice cloning in Bangla is still in its early stages.
        In this work, we explore two standard approaches for zeroshot Bengali voice cloning, which can generate cloned audio
        from short samples, even for Bengali speakers not included in
        the training data. Despite using limited datasets, our models
        achieve cloning quality comparable to state-of-the-art models
        trained on much larger datasets, maximizing potential benefits
        for the Bengali community. We use a neural network technique
        called the speaker encoder (SE) voice cloning method, which
        achieved a Mean Opinion Score (MOS) of 3.8 and 83% cosine
        similarity between the original and cloned voice. This model
        was trained on a custom multi-speaker dataset. Additionally, we
        employ a speaker converter (SC) approach trained on a singlespeaker dataset, which achieved a MOS of 4.0 and 82.64% cosine
        similarity. By combining the two models in an ensemble, we
        further improved performance, reaching an MOS of 4.4 and a
        cosine similarity of 85.21%. Our proposed approach can be an
        important step toward developing voice cloning technology for the
        Bengali language, potentially positively impacting the community
      </p>

      {/* Diagram Example */}
      <div className="w-full mb-8">
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

      {/* Audio Tables Placeholder
      <h2 className="text-xl font-semibold mb-4">Audio Comparisons</h2>
      <p className="text-gray-700 mb-6">
        (You can add your spectrogram table and audio clips here later.)
      </p> */}

      {/* References */}
      {/* <h2 className="text-xl font-semibold mt-10 mb-4">References</h2>
      <ul className="text-gray-700 list-disc pl-6">
        <li className="mb-2">
          H. Lu, K. Chen, Q. Tian, W. Wang, and M. D. Plumbley,
          “Audiosr: Versatile audio super-resolution at scale,” in ICASSP,
          pp. 1076–1080, IEEE, 2024.
        </li>
        <li className="mb-2">
          J. Im and J. Nam, “Flashsr: One-step versatile audio super-resolution
          via diffusion distillation,” in ICASSP. IEEE, 2025, pp. 1–5.
        </li>
      </ul> */}
    </div>
  );
}
