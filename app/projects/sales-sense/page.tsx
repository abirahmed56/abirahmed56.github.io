"use client";
import Image from "next/image";

export default function SalesSensePage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 space-y-10">
      {/* Header */}
      <header className="text-center">
        <h1 className="text-4xl font-bold">Sales-Sense: Sales Data Analysis</h1>
        <p className="text-gray-600 mt-2">
          FastAPI analytics backend, React visualizations, and Mapbox-based tracking for salesforce movement.
        </p>
      </header>

      {/* Overview Card */}
      <Card title="Overview">
        <p className="mb-3">
          Sales-Sense is a data-driven platform designed to analyze sales performance across zones,
          regions, and territories. The project combines a fast backend analysis API, rich charting on the
          frontend, and geospatial visualizations for tracking sales officers' movements. The solution helps
          teams identify top-performing areas, monitor field activity, and make informed decisions based on
          both spatial and numerical insights.
        </p>

        <p>
          The system is organized so that the analytical pipeline (data collection → processing → API) and the
          visualization layer (React + Recharts + Mapbox) are modular and reusable across client projects.
        </p>
      </Card>

      {/* API Card */}
      <Card title="Visualization API (FastAPI) & Data Pipeline">
        <p className="mb-3">
          I built a high-performance analytics backend using <strong>FastAPI</strong> that exposes endpoints
          for sales metrics, trend analysis, and region-wise aggregations. Raw sales data is stored in PostgreSQL,
          processed with <strong>NumPy</strong> and <strong>Pandas</strong>, and the results are returned as JSON
          for the frontend to consume.
        </p>

        <h4 className="font-semibold mt-3 mb-2">Key Components</h4>
        <ul className="list-disc ml-6 mb-3">
          <li><strong>FastAPI:</strong> Endpoints for aggregated sales, top products, and region reports.</li>
          <li><strong>PostgreSQL:</strong> Stores transactional sales & territory data.</li>
          <li><strong>Pandas / NumPy:</strong> Data cleaning, aggregation, and metric computations.</li>
          <li><strong>Matplotlib:</strong> Generation of static charts (used where needed server-side).</li>
          <li><strong>Recharts:</strong> Interactive charts in the React frontend consuming the API.</li>
        </ul>

        <h4 className="font-semibold mt-3 mb-2">Workflow</h4>
        <ol className="list-decimal ml-6">
          <li>Collect transactional & location data from sources</li>
          <li>Run SQL queries to extract raw datasets from PostgreSQL</li>
          <li>Process and aggregate with Pandas/NumPy</li>
          <li>Expose processed data via FastAPI endpoints</li>
          <li>Visualize results on frontend using Recharts (Was not my responsiblity)</li>
        </ol>
      </Card>

      {/* Additional Visuals Card */}
      <Card title="Visualizations for testing purpose using Recharts">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Image
              src="/sales-sense/salesarea2.png"
              alt="Sample Sales Analysis Chart 2"
              width={1000}
              height={700}
              className="rounded-xl shadow-md border"
            />
            <p className="text-sm text-gray-600 mt-2">Sample analysis chart showing area-wise sales.</p>
          </div>

          <div>
            <Image
              src="/sales-sense/salesarea1.png"
              alt="Another Sales Visualization"
              width={1000}
              height={700}
              className="rounded-xl shadow-md border"
            />
            <p className="text-sm text-gray-600 mt-2">Sample sales analysis visualization.</p>

          </div>
        </div>
      </Card>

      {/* Mapbox Card */}
      <Card title="Mapbox Integration — Tracking & Movement Visualization">
        <p className="mb-3">
          I implemented Mapbox GL JS to visualize personnel geolocation and movement paths. The feature shows:
        </p>

        <ul className="list-disc ml-6 mb-3">
          <li>Markers for specific coordinates (sales officer locations)</li>
          <li>Polylines to show movement trajectories</li>
          <li>Interactive pop-ups with contextual information for each marker</li>
          <li>Zoom/rotation controls & responsive rendering for different devices</li>
        </ul>

        <p className="mb-3">
          Geolocation data is supplied as timestamped JSON records (latitude, longitude, timestamp), which the map
          renders in chronological order to produce an accurate movement path. This component is modular and was
          integrated into the SalesSense dashboard for route analysis and field performance reviews.
        </p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Image
              src="/sales-sense/mapbox3.png"
              alt="Select Sales Officer and Date"
              width={800}
              height={500}
              className="rounded-xl shadow-md border"
            />
            <p className="text-sm text-gray-600 mt-2">Select sales officer & date to visualize movement.</p>
          </div>

          <div>
            <Image
              src="/sales-sense/mapbox-example.png"
              alt="Interactive Map with Pop-ups"
              width={800}
              height={500}
              className="rounded-xl shadow-md border"
            />
            <p className="text-sm text-gray-600 mt-2">Interactive map showing pop-ups and movement polylines.</p>
          </div>
        </div>
      </Card>

      {/* Usage & Reusability Card */}
      <Card title="Usage & Reusability">
        <p className="mb-3">
          The Mapbox module was designed as a reusable component so other client projects can easily integrate
          movement visualization. After integrating into SalesSense, another client adopted the module directly,
          demonstrating its practical value and reusability.
        </p>

        <p>
          The same Mapbox component can be plugged into different dashboards — only the data feed needs to be adapted.
        </p>
      </Card>

      {/* Community Contributions Card */}
      <Card title="Contributions to the Community">
        <p className="mb-3">
          I documented the full implementation process in a blog post and shared a step-by-step guide for
          integrating Mapbox with React & Next.js. The post covers Mapbox setup, data shaping, markers, polylines,
          and popup interactions.
        </p>

        <a
          href="https://dev.to/logiqbits/creating-interactive-maps-with-react-and-mapbox-gl-js-in-a-nextjs-app-53pn"
          target="_blank"
          className="text-blue-600 underline"
        >
          Read the Dev Community post →
        </a>

        <div className="mt-6">
          <Image
            src="/sales-sense/mapbox.png"
            alt="Dev community blog screenshot"
            width={1200}
            height={600}
            className="rounded-xl shadow-md border"
          />
          <p className="text-sm text-gray-600 mt-2">Blog screenshot: Creating Interactive Maps with React and Mapbox GL JS.</p>
        </div>
      </Card>

      {/* Conclusion Card */}
      <Card title="Conclusion">
        <p>
          The SalesSense project combines backend analytics, frontend visualizations, and geospatial tracking to deliver
          actionable insights. The modular Mapbox component and the FastAPI analytics endpoints made the platform
          adaptable to multiple client needs and simplified integration into new projects.
        </p>

        <p className="mt-3 text-sm text-gray-600">
          If you want, I can extract the Mapbox component into an NPM-style package for easier reuse across projects.
        </p>
      </Card>

      <footer className="text-center text-gray-500 text-sm pt-6">
        © {new Date().getFullYear()} SalesSense — Mapbox & Analytics Module
      </footer>
    </div>
  );
}

/* Reusable Card & Screenshot Components */
function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="bg-white p-8 rounded-2xl shadow-sm border space-y-4">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <div className="text-gray-700 leading-relaxed">{children}</div>
    </section>
  );
}
