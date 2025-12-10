"use client";

export default function PlanetRTS137Page() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-14 space-y-10">

      {/* HEADER */}
      <header className="text-center space-y-3 mb-12">
        <h1 className="text-4xl font-bold">Planet RTS-137</h1>
        <p className="text-gray-600 text-lg">
          A 2D platformer game built with Unity featuring obstacles, enemy combat,
          checkpoints, and multi-level gameplay progression.
        </p>
      </header>

      {/* CARD: Overview */}
      <Card title="Overview">
        <p>
          Planet RTS-137 is a side-scrolling 2D action-platformer developed using Unity.  
          The player navigates through multiple levels filled with moving obstacles, 
          enemy characters, collectible coins, and interactive checkpoints.  
          The game blends shooting mechanics, platform jumping, and level-based challenges.
        </p>
      </Card>

      {/* CARD: Objectives */}
      <Card title="Objectives">
        <ul className="list-disc ml-6 space-y-1">
          <li>Build a functional multi-level 2D platformer using Unity.</li>
          <li>Implement player movement, shooting, and interaction mechanics.</li>
          <li>Create engaging level progression with checkpoints and collectibles.</li>
        </ul>
      </Card>

      {/* CARD: Key Features */}
      <Card title="Key Features">
        <ul className="list-disc ml-6 space-y-2">
          <li><strong>Player Movement System:</strong> Includes running, jumping, shooting, and collision handling.</li>
          <li><strong>Enemies with AI Behavior:</strong> Basic movement, attack animations, and hit detection.</li>
          <li><strong>Obstacles & Hazards:</strong> Platforms, spikes, moving elements, and level traps.</li>
          <li><strong>Coin Collection:</strong> Players gather coins for score and progression.</li>
          <li><strong>Checkpoint System:</strong> Saves progress within levels to restart from a safe point.</li>
          <li><strong>Three Designed Levels:</strong> Each with unique layouts, increasing difficulty, and enemy placements.</li>
        </ul>
      </Card>

      {/* CARD: Tech Stack */}
      <Card title="Tech Stack">
        <ul className="list-disc ml-6 space-y-1">
          <li><strong>Engine:</strong> Unity (C#)</li>
          <li><strong>Gameplay Scripts:</strong> Player controller, AI logic, UI handlers, level management</li>
          <li><strong>Tools:</strong> Unity Animator, Tilemap system, Physics2D</li>
          <li><strong>Version Control:</strong> Git & GitHub</li>
        </ul>
      </Card>

      {/* CARD: Contributions */}
      <Card title="My Contributions">
        <ul className="list-disc ml-6 space-y-2">
          <li>Developed player movement, shooting mechanics, and collision systems.</li>
          <li>Designed all three levels including enemy placement, obstacles, and checkpoints.</li>
          <li>Implemented enemy behavior, animation controllers, UI elements, and coin system.</li>
        </ul>
      </Card>

      {/* CARD: GitHub Link */}
      <Card title="GitHub Repository">
        <p>You can explore the complete codebase and project here:</p>
        <a
          href="https://github.com/abirahmed56/Planet-RTS-137"
          target="_blank"
          className="text-blue-600 underline font-medium"
        >
          Visit Repository →
        </a>
      </Card>

      {/* CARD: Conclusion */}
      <Card title="Conclusion">
        <p>
          Building Planet RTS-137 strengthened my understanding of Unity game development,
          physics-based platforming, object interaction, and level design.  
          As a second-year academic project, it provided hands-on experience with game 
          mechanics, player feedback loops, and structured gameplay progression.
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
    