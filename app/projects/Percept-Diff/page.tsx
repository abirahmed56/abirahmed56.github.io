import Image from "next/image";

export default function SagaSRPage() {
    return (
        <div className="flex flex-col items-center px-6 py-10 max-w-5xl mx-auto">

            {/* Title */}
            <h1 className="text-3xl font-bold text-center mb-2">
                Percept-Diff: Innovations in Stable Diffusion for High-Fidelity IHC Image Generation in HER2 Breast Cancer Incorporating Perceptual Loss
            </h1>

            {/* Authors */}
            <p className="text-center text-gray-700 mb-1">
                Md Naimur Asif Borno<sup>1</sup>,
                Md Tanvir Raihan<sup>2</sup>,
                Abir Ahmed<sup>3</sup>,
                Md Sakib Hossain Shovon<sup>4</sup>,
                Jungpil Shin<sup>5</sup>,
                MF Mridha<sup>6</sup>
            </p>

            {/* Affiliations */}
            {/* <p className="text-center text-gray-600 mb-6">
        <sup>1,2</sup>Department of Software Engineering, <br />
        <sup>3,4</sup>Department of Computer Science & Engineering, <br />
        <sup>1,2,4</sup>Shahjalal University of Science & Technology, Sylhet, Bangladesh <br />
        <sup>3</sup>Sylhet Engineering College, Sylhet, Bangladesh
      </p> */}

            {/* Buttons */}
            {/* <div className="flex gap-4 mb-10">
        <button className="px-4 py-2 border rounded-full">Contact</button>
        <button className="px-4 py-2 border rounded-full">arXiv Paper</button>
        <button className="px-4 py-2 border rounded-full">Code</button>
      </div> */}

            {/* Abstract Section */}
            <h2 className="text-2xl font-semibold mb-3">Abstract</h2>
            <p className="text-gray-700 leading-relaxed mb-8">
                Breast cancer(BrCa) has emerged as a concerning disease in recent years, with its incidence expected to rise in the future. The Human-Epidermal-Growth-Factor-Receptor2(HER2) variant is the most dangerous variant. To save women from this catastrophe, they need to undergo treatment in the early stages but existing tests are too expensive for most people to afford. The positive news is that deep-learning (DL) models are becoming alternatives in this case and with proper data, many other facilities can be provided in this sector. However, DL models require a substantial amount of data, which could potentially compromise patient privacy in this context. Additionally, there is a scarcity of data in this field. To address this issue while respecting patient privacy, we developed a generative solution using Stable Diffusion (StDi) models called Percept-Diff, which conditionally generates realistic IHC images for three stages of HER2-positive breast cancer (BrCa). We used 2435 unique IHC images from the BCI dataset. Images were classified into three classes (0+, 1+, and 3+). Here 0 and 1+ denote HER2-negative whereas 3+ denotes HER2-positive. We attempted to generate the mentioned 3 stages conditionally with different pre-trained diffusion model stabilityai/stable-diffusion-2-base, stabilityai/stable-diffusion-2, CompVis/stable-diffusion-vl-4, and runwaym/stable-diffusion-vl-5, stablediffusionapi/realistic-vision-v51 and stablediffusionapi/anything-v5. Percept-Diff demonstrated promising results, achieving a CLIP score of 35, an FID score of 230, and a KID mean of 0.0101 with a standard deviation of 0.0087. These metrics indicate that Percept-Diff outperformed the above mentioned state-of-the-art diffusion models. This can be a game changer for researchers and open different areas that are not possible now because of data scarcity and can save many women's lives.
            </p>

            {/* Diagram Example */}
            <div className="w-full mb-8">
                <Image
                    src="/stable-diffusion/proposed.png" // replace with your actual diagram path
                    width={900}
                    height={600}
                    alt="Model Diagram"
                    className="rounded-lg shadow"
                />
                <p className="text-center text-sm text-gray-600 mt-2">
                    Fig. 3. Proposed Architecture
                </p>
            </div>

            <div className="w-full mb-8">
                <Image
                    src="/stable-diffusion/comparison.png" // replace with your actual diagram path
                    width={700}
                    height={300}
                    alt="Model Comparison"
                    className="rounded-lg shadow"
                />
                <p className="text-center text-sm text-gray-600 mt-2">
                    Fig. 2. Model Comparison
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
