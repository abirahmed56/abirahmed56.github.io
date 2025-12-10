"use client";
import Image from "next/image";

export default function ShopapProjectPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-14 space-y-10">

      {/* HEADER */}
      <header className="text-center space-y-3 mb-12">
        <h1 className="text-4xl font-bold">Shopap: Multi-Theme E-Commerce (Monorepo)</h1>
        <p className="text-gray-600 text-lg">
          A scalable monorepo e-commerce system with shared Redux state, reusable logic, 
          and multiple independently designed UI themes.
        </p>
      </header>

      {/* CARD: Overview */}
      <Card title="Overview">
        <p>
          Shopap is a production-level e-commerce system built inside a monorepo using Next.js.
          The architecture allows multiple UI themes to exist while sharing a single backend 
          logic and global state (Redux).  
          This reduces duplication, improves maintainability, and makes the platform scalable.
        </p>
      </Card>

      {/* CARD: Tech Stack */}
      <Card title="Tech Stack">
        <ul className="list-disc ml-6 space-y-1">
          <li><strong>Frontend:</strong> React, Next.js</li>
          <li><strong>Backend:</strong> Next.js API Routes</li>
          <li><strong>State Management:</strong> Redux</li>
          <li><strong>Database:</strong> MongoDB</li>
          <li><strong>Languages:</strong> TypeScript, JavaScript</li>
          <li><strong>Version Control:</strong> Git</li>
          <li><strong>Package Manager:</strong> Yarn / npm</li>
        </ul>
      </Card>

      {/* CARD: Monorepo Architecture */}
      <Card title="Monorepo Architecture">
        <p>
          The monorepo setup allows **Theme One** and **Theme Two** to share backend logic, 
          Redux store, utilities, and API integration—while maintaining completely different UI structures.
        </p>
        <p className="mt-3">
          Only the visual elements (layout, color system, component style) change between themes.  
          The underlying data flow and business rules remain unified and reusable.
        </p>

        {/* ARCHITECTURE IMAGE */}
        <Image
          src="/shopapp/monorepo.png"
          alt="Monorepo Architecture"
          width={1400}
          height={800}
          className="rounded-xl shadow-md border my-6"
        />

        <p>
          This architecture diagram shows how shared modules such as Redux slices, API clients, 
          and utility functions are used by multiple themes without duplicating code.  
          Each theme is lightweight, focusing only on UI and styling.
        </p>
      </Card>

      {/* CARD: Redux Refactor */}
      <Card title="Refactoring to Redux">
        <p>
          Originally, the project used Context API, which became complex when supporting multiple themes.  
          I refactored the entire system to Redux so every theme consumes the same global store.
        </p>
        <p className="mt-2">
          As a result:
        </p>
        <ul className="list-disc ml-6 mt-2 space-y-1">
          <li>Data fetching and caching improved</li>
          <li>Themes no longer needed duplicate state logic</li>
          <li>Business logic became centralized and maintainable</li>
        </ul>
      </Card>

      {/* CARD: Workflow */}
      <Card title="Workflow Breakdown">
        <ol className="list-decimal ml-6 space-y-2">
          <li>Audited the previous folder structure</li>
          <li>Separated UI from logic</li>
          <li>Migrated Context → Redux</li>
          <li>Added multi-theme folder structure</li>
          <li>Created Home, Cart, Checkout screens for both themes</li>
        </ol>
      </Card>

      {/* CARD: Community Work */}

      {/* CARD: Screenshots */}
      <Card title="Theme UI Screenshots">
        <p>
          Although the themes look visually unique, they operate on the same underlying logic.  
          This demonstrates how monorepo + Redux enables scalable multi-theme development.
        </p>

        <div className="space-y-12 mt-10">
          <Screenshot title="Theme 1 – Home" src="/shopapp/shop-theme1.png" />
          <Screenshot title="Theme 2 – Home" src="/shopapp/shop-theme2.png" />
          <Screenshot title="Theme 1 – Cart" src="/shopapp/cart-theme1.png" />
          <Screenshot title="Theme 2 – Cart" src="/shopapp/cart-theme2.png" />
          <Screenshot title="Theme 1 – Checkout" src="/shopapp/checkout-theme1.png" />
          <Screenshot title="Theme 2 – Checkout" src="/shopapp/checkout-theme2.png" />
        </div>
      </Card>
      <Card title="Community Contributions">
        <div className="space-y-10">

          <div>
            <p>I wrote a blog on state management that received strong engagement:</p>
            <a
              href="https://dev.to/abirahmed/react-state-management-327m"
              target="_blank"
              className="text-blue-600 underline"
            >
              Read the Blog →
            </a>
            <Image
              src="/shopapp/react-blog.png"
              alt="React Blog"
              width={1400}
              height={800}
              className="rounded-xl shadow-md border mt-4"
            />
          </div>

          <div>
            <p>Published a Yarn Monorepo Starter Template for developers:</p>
            <a
              href="https://github.com/abirahmed56/yarn-monorepo"
              target="_blank"
              className="text-blue-600 underline"
            >
              Yarn Monorepo Starter →
            </a>
            <Image
              src="/shopapp/workspaces.png"
              alt="Monorepo Workspace"
              width={1400}
              height={800}
              className="rounded-xl shadow-md border mt-4"
            />
          </div>

        </div>
      </Card>


      {/* CARD: Conclusion */}
      <Card title="Conclusion">
        <p>
          Shopap strengthened my ability to manage scalable architectures, refactor large codebases, 
          and build multi-theme UI experiences efficiently.  
          With a monorepo + Redux approach, adding new themes or features is now significantly easier.
        </p>
      </Card>
      
    </div>
  );
}

/* ------------- REUSABLE COMPONENTS ------------- */

function Card({ title, children }: { title: string; children: any }) {
  return (
    <section className="bg-white p-8 rounded-2xl shadow-sm border space-y-4">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <div className="text-gray-700 leading-relaxed">{children}</div>
    </section>
  );
}

function Screenshot({ title, src }: { title: string; src: string }) {
  return (
    <div>
      <p className="font-medium mb-3">{title}</p>
      <Image
        src={src}
        width={1400}
        height={900}
        alt={title}
        className="rounded-xl border shadow"
      />
    </div>
  );
}
