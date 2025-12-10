"use client";

export default function ResultProcessingSystemPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-14 space-y-10">

      {/* HEADER */}
      <header className="text-center space-y-3 mb-12">
        <h1 className="text-4xl font-bold">Result Processing System</h1>
        <p className="text-gray-600 text-lg">
          A structured and automated system designed to simplify student result calculation, 
          grading, and academic record management.
        </p>
      </header>

      {/* CARD: Overview */}
      <Card title="Overview">
        <p>
          The Result Processing System is a robust application built to automate the academic 
          evaluation workflow. It integrates student data handling, grade computation, and 
          result generation into one streamlined platform.  
          By reducing manual effort and preventing calculation errors, the system improves 
          the reliability and efficiency of academic processes.
        </p>
      </Card>

      {/* CARD: Objectives */}
      <Card title="Objectives">
        <ul className="list-disc ml-6 space-y-1">
          <li>Automate grade and GPA calculation using standardized rules.</li>
          <li>Centralize student and course result data for quick access.</li>
          <li>Reduce manual errors and ensure consistent evaluation.</li>
        </ul>
      </Card>

      {/* CARD: Key Features */}
      <Card title="Key Features">
        <ul className="list-disc ml-6 space-y-2">
          <li><strong>Student Record Management:</strong> Efficient handling of student information and academic entries.</li>
          <li><strong>Automated Result Calculation:</strong> Computes grades and GPA based on predefined scoring logic.</li>
          <li><strong>Flexible Structure:</strong> Built with modular components allowing easy expansion of grading rules.</li>
          <li><strong>Clean Output Structure:</strong> Generates well-organized result summaries for each student.</li>
          <li><strong>Error Reduction:</strong> Eliminates manual inconsistencies found in traditional result processing.</li>
        </ul>
      </Card>

      {/* CARD: Tech Stack */}
      <Card title="Tech Stack">
        <ul className="list-disc ml-6 space-y-1">
          <li><strong>Language:</strong> Python</li>
          <li><strong>Core Logic:</strong> Custom grade and GPA calculation algorithms</li>
          <li><strong>Version Control:</strong> Git & GitHub</li>
        </ul>
      </Card>

      {/* CARD: Contributions */}
      <Card title="My Contributions">
        <ul className="list-disc ml-6 space-y-2">
          <li>Designed and implemented the full-grade calculation workflow and result generation pipeline.</li>
          <li>Developed a modular, maintainable code architecture for ease of extension.</li>
          <li>Streamlined data handling to simplify academic record management and reduce manual effort.</li>
        </ul>
      </Card>

      {/* CARD: GitHub Link */}
      <Card title="GitHub Repository">
        <p>You can explore the complete codebase and project here:</p>
        <a
          href="https://github.com/abirahmed56/Result-Processing-System"
          target="_blank"
          className="text-blue-600 underline font-medium"
        >
          Visit Repository →
        </a>
      </Card>

      {/* CARD: Conclusion */}
      <Card title="Conclusion">
        <p>
          Building this system strengthened my experience with algorithmic logic, 
          data management, and workflow automation.  
          The project also serves as a foundation for more advanced academic tools 
          like analytics, dashboards, and multi-department result systems.
        </p>
      </Card>
    </div>
  );
}

/* ---------------- REUSABLE COMPONENTS ---------------- */

function Card({ title, children }: { title: string; children: any }) {
  return (
    <section className="bg-white p-8 rounded-2xl shadow-sm border space-y-4">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <div className="text-gray-700 leading-relaxed">{children}</div>
    </section>
  );
}
