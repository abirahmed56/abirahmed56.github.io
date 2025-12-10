"use client";
import Image from "next/image";

export default function StockForecastingPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-14 space-y-10">

      {/* HEADER */}
      <header className="text-center space-y-3 mb-12">
        <h1 className="text-4xl font-bold">Stock Market Forecasting</h1>
        <p className="text-gray-600 text-lg">
          A challenging time series forecasting project using Random Forest, LSTM, and other models to predict stock market trends.
        </p>
      </header>

      {/* CARD: Project Overview */}
      <Card title="Project Overview">
        <p>
          The stock market forecasting project was a challenging endeavor focused on time series data. 
          It involved multiple experiments with models such as Random Forest and LSTM. 
          While the project is in its initial stages, the work provided valuable insights into machine learning techniques and their application in the stock market domain.
        </p>
      </Card>

      {/* CARD: Objective */}
      <Card title="Objective">
        <p>
          The main goal of this project was to build accurate predictive models for stock market time series data. 
          Tasks included analyzing historical data, selecting relevant features, and experimenting with different models to achieve robust forecasts.
        </p>
      </Card>

      {/* CARD: Experiments and Models */}
      <Card title="Experiments and Models">
        <p>
          I conducted several experiments using Random Forest, LSTM, and other models under research. 
          The goal was to determine which models provide the most accurate predictions for stock market trends and price movements.
        </p>
      </Card>

      {/* CARD: Challenges and Ongoing Research */}
      <Card title="Challenges and Ongoing Research">
        <p>Key challenges included:</p>
        <ul className="list-disc ml-6 space-y-1">
          <li><strong>Data Preprocessing:</strong> Handling missing values, outliers, and inconsistencies in raw stock data.</li>
          <li><strong>Feature Engineering:</strong> Identifying relevant features that impact stock trends and prices.</li>
          <li><strong>Model Selection:</strong> Choosing the most suitable model and exploring ensemble methods for better accuracy.</li>
          <li><strong>Hyperparameter Tuning:</strong> Optimizing model parameters for improved performance and generalization.</li>
        </ul>
        <p className="mt-3">
          Ongoing research involves experimenting with these aspects and staying up-to-date with the latest machine learning and time series forecasting techniques.
        </p>
      </Card>

      {/* CARD: Notepad */}
      <Card title="Initial Notebook & Forecast">
        <p>
          Due to data sensitivity, I cannot share all notebooks. However, here is an initial Google Colab notebook demonstrating LSTM-based forecasting for stock closing prices:
        </p>
        <a
          href="https://colab.research.google.com/drive/1hAhzQIcF8QAiney8nUr1AflfLquA50dZ"
          target="_blank"
          className="text-blue-600 underline"
        >
          Access Notebook →
        </a>

        {/* IMAGE 1 */}
        <div className="mt-6">
          <p className="font-medium mb-2">Initial notebook's output:</p>
          <Image
            src="/stock-forecast/forecast.png"
            alt="Initial Forecast Output"
            width={1400}
            height={800}
            className="rounded-xl border shadow-md"
          />
        </div>

        {/* IMAGE 2 */}
        <div className="mt-6">
          <p className="font-medium mb-2">30-days forecast result:</p>
          <Image
            src="/stock-forecast/forecast2.png"
            alt="30-Day Forecast Output"
            width={1400}
            height={800}
            className="rounded-xl border shadow-md"
          />
        </div>
      </Card>

    </div>
  );
}

/* ---------------- REUSABLE COMPONENT ---------------- */
function Card({ title, children }: { title: string; children: any }) {
  return (
    <section className="bg-white p-8 rounded-2xl shadow-sm border space-y-4">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <div className="text-gray-700 leading-relaxed">{children}</div>
    </section>
  );
}
