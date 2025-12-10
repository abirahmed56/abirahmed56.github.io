"use client";

export default function EmployeeOversightPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-14 space-y-10">

      {/* HEADER */}
      <header className="text-center space-y-3 mb-12">
        <h1 className="text-4xl font-bold">Employee Oversight</h1>
        <p className="text-gray-600 text-lg">
          A management system designed to monitor employee tasks, attendance, and performance,
          providing streamlined reporting and oversight for organizations.
        </p>
      </header>

      {/* CARD: Overview */}
      <Card title="Overview">
        <p>
          Employee Oversight is a structured application that helps organizations track and manage employee activity efficiently.  
          The system integrates task monitoring, attendance logging, and performance reporting into a unified platform, improving workflow transparency and decision-making.
        </p>
      </Card>

      {/* CARD: Objectives */}
      <Card title="Objectives">
        <ul className="list-disc ml-6 space-y-1">
          <li>Monitor employee tasks and progress to ensure productivity.</li>
          <li>Maintain accurate attendance and time tracking records.</li>
          <li>Provide analytics and reporting for performance evaluation and oversight.</li>
        </ul>
      </Card>

      {/* CARD: Key Features */}
      <Card title="Key Features">
        <ul className="list-disc ml-6 space-y-2">
          <li><strong>Task Management:</strong> Assign, track, and update employee tasks with deadlines and priority.</li>
          <li><strong>Attendance Monitoring:</strong> Record employee check-ins, check-outs, and work hours.</li>
          <li><strong>Performance Metrics:</strong> Generate reports on task completion, productivity, and efficiency.</li>
          <li><strong>User Dashboard:</strong> Visual interface for monitoring employee activity and performance stats.</li>
          <li><strong>Notifications & Alerts:</strong> Remind employees of pending tasks and track overdue actions.</li>
        </ul>
      </Card>

      {/* CARD: Tech Stack */}
      <Card title="Tech Stack">
        <ul className="list-disc ml-6 space-y-1">
          <li><strong>Backend:</strong> Python</li>
          <li><strong>Data Handling:</strong> Structured storage for employee records and task logs</li>
          <li><strong>Reporting:</strong> Automated generation of performance and attendance summaries</li>
          <li><strong>Version Control:</strong> Git & GitHub</li>
        </ul>
      </Card>

      {/* CARD: Contributions */}
      <Card title="My Contributions">
        <ul className="list-disc ml-6 space-y-2">
          <li>Developed core logic for task assignment, progress tracking, and attendance logging.</li>
          <li>Designed modular data handling and reporting structures for scalability.</li>
          <li>Implemented dashboards and automated reports to simplify performance monitoring.</li>
        </ul>
      </Card>

      {/* CARD: GitHub Link */}
      <Card title="GitHub Repository">
        <p>You can explore the complete codebase and project here:</p>
        <a
          href="https://github.com/abirahmed56/Employee-Oversight?tab=readme-ov-file"
          target="_blank"
          className="text-blue-600 underline font-medium"
        >
          Visit Repository →
        </a>
      </Card>

      {/* CARD: Conclusion */}
      <Card title="Conclusion">
        <p>
          Building Employee Oversight strengthened my skills in workflow automation, 
          data management, and reporting.  
          The project provides a solid foundation for developing more advanced employee management 
          systems with analytics and performance dashboards.
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
