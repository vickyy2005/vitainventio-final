export interface BlogPost {
  slug: string
  category: string
  title: string
  time: string
  image: string
  desc: string
  date: string
  author: {
    name: string
    role: string
    avatar: string
  }
  content: string
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'mastering-nextjs-15',
    category: 'Next.js & React',
    title: 'Mastering Next.js 15: Server Actions & Partial Prerendering',
    time: '6 min read',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=900&q=80',
    desc: 'How the latest Next.js features streamline database interactions and reduce layout shifts.',
    date: 'August 8, 2026',
    author: {
      name: 'Sarah Chen',
      role: 'Principal Architect',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80'
    },
    content: `
      <p>Next.js 15 marks a significant milestone in modern web development, introducing stable APIs for Server Actions, refined Partial Prerendering (PPR), and major compiler optimizations. In this article, we’ll explore how these tools enable developers to build lightning-fast web applications with zero compromise on dynamic functionality.</p>
      
      <h3>The Power of Server Actions</h3>
      <p>For years, frontend development has been split: building user interfaces on the client, and implementing REST APIs on the server. Server Actions unite these paradigms. By declaring a function with the <code>"use server"</code> directive, you create a secure, direct link between your client actions (like form submissions) and server logic.</p>
      
      <blockquote>
        "Server Actions completely eliminate the boilerplate of API route handlers, request serialization, and fetch state management."
      </blockquote>

      <h3>Implementing Partial Prerendering (PPR)</h3>
      <p>PPR solves a classic dilemma: do you serve a static landing page for speed, or a dynamic page for personalization? With PPR, you get both. Next.js prerenders the static layout shell of the page instantly, while streaming in dynamic components (like shopping carts or user profiles) as they resolve on the server.</p>
      
      <p>This is accomplished seamlessly using React <code>Suspense</code> boundaries. Everything outside the boundary is static; everything inside is dynamic. Next.js automatically segments the page at compile time, reducing your Time to First Byte (TTFB) to single-digit milliseconds.</p>
      
      <h3>Best Practices for 2026</h3>
      <ul>
        <li><strong>Strict Sanitization:</strong> Always validate incoming data inside Server Actions using schemas like Zod.</li>
        <li><strong>Optimistic UI Updates:</strong> Use React’s <code>useOptimistic</code> hook to instantly render changes on the UI before the server returns.</li>
        <li><strong>Fallback Styling:</strong> Design smooth, skeleton loader placeholders for suspended dynamic elements.</li>
      </ul>
    `
  },
  {
    slug: 'integrating-llms-react',
    category: 'AI & Automation',
    title: 'Building Intelligent Interfaces: Integrating LLMs into App Workflows',
    time: '8 min read',
    image: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=900&q=80',
    desc: 'Practical strategies for creating context-aware AI tools without cluttering your React code.',
    date: 'August 6, 2026',
    author: {
      name: 'Marcus Vance',
      role: 'Head of AI Integration',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80'
    },
    content: `
      <p>Artificial Intelligence is no longer confined to isolated chatbot tabs. The future belongs to context-aware apps that weave large language model (LLM) responses directly into the layout and actions of the application interface.</p>
      
      <h3>The Paradigm of Context Injection</h3>
      <p>An LLM is only as good as the context you feed it. Instead of forcing users to explain their intent, modern apps capture their current viewport state, database records, and active parameters to build rich system prompts behind the scenes. This allows the model to give highly tailored recommendations with minimal user input.</p>

      <h3>Structured Output and UI Generation</h3>
      <p>For years, developers struggled with the unstructured, unpredictable responses of text-generating models. The introduction of <strong>JSON schema validation</strong> in models (like Gemini and GPT-4o) changed everything. We can now prompt an LLM to respond with structured JSON that maps directly to our React component props.</p>

      <p>Imagine an AI that, instead of describing a dashboard, returns: <code>{ type: "chart", data: [...] }</code>. Your React application receives this JSON, parses it, and dynamically renders a custom chart component on the fly. This turns a static interface into a living, responsive canvas.</p>
    `
  },
  {
    slug: 'sub-100ms-core-web-vitals',
    category: 'Performance',
    title: 'Speed as a Feature: How to Reach Sub-100ms Core Web Vitals',
    time: '5 min read',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=80',
    desc: 'Optimizing resource loading, code splitting, and edge caching to maximize conversions.',
    date: 'August 4, 2026',
    author: {
      name: 'Elena Rostova',
      role: 'Lead Performance Specialist',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80'
    },
    content: `
      <p>Every 100ms of latency cost eCommerce platforms up to 1% in sales. Website performance is not just a technical metric; it is the single most critical factor in user retention and search engine placement.</p>
      
      <h3>Decoding Largest Contentful Paint (LCP)</h3>
      <p>To keep LCP under 1.2 seconds, you must optimize your critical render path. Avoid render-blocking Javascript in the document head, defer non-critical styles, and preload primary heroes. Using Next.js <code>next/image</code> automatically converts images to modern WebP/AVIF formats and sizes them for the user screen, saving megabytes of bandwidth.</p>

      <h3>Interactive Responsiveness (INP)</h3>
      <p>Interaction to Next Paint (INP) measures how snappy the page feels when clicked. Long-running JavaScript tasks on the main thread cause lagging visual feedback. You can solve this by:</p>
      <ul>
        <li><strong>Web Workers:</strong> Offloading heavy computations (like parsing large JSON objects) away from the rendering thread.</li>
        <li><strong>Code Splitting:</strong> Splitting your routes into modular chunks so users only download the code they need.</li>
        <li><strong>Edge Middleware:</strong> Intercepting and personalizing requests at the network edge to serve static content instantly.</li>
      </ul>
    `
  },
  {
    slug: 'psychology-of-motion-animations',
    category: 'Design Systems',
    title: 'The Psychology of Motion: Micro-Animations that Drive Retention',
    time: '6 min read',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=900&q=80',
    desc: 'How carefully timed transitions and responsive gestures keep users engaged.',
    date: 'August 1, 2026',
    author: {
      name: 'Tariq Al-Fayed',
      role: 'Creative Director',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&h=150&q=80'
    },
    content: `
      <p>Human eyes are naturally drawn to movement. But in product design, there is a very fine line between motion that guides the user and motion that distracts them. When done right, micro-animations turn a functional product into a delightful experience.</p>
      
      <h3>The Rules of Spatial Continuity</h3>
      <p>When an element changes state, it should never just pop into existence. It should expand from its trigger point. This helps the user construct a mental map of your application layout. For instance, when a card is clicked, it should morph smoothly into the reader panel, signaling that they are viewing the same item in detail.</p>

      <h3>Easing Curves: The Secret to Organic Motion</h3>
      <p>Default linear transitions look robotic and unnatural. Real-world objects have mass, friction, and inertia. Using physics-based easing curves (like cubic-bezier parameters or spring-physics libraries) creates transitions that accelerate quickly and decelerate softly.</p>
      
      <p>We recommend using <code>cubic-bezier(0.25, 1, 0.5, 1)</code> for general UI hover effects. It feels dynamic, snappy, and organic.</p>
    `
  },
  {
    slug: 'scaling-serverless-applications',
    category: 'Web Architecture',
    title: 'Going Serverless: Scaling Applications to Millions of Users Effortlessly',
    time: '7 min read',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80',
    desc: 'A breakdown of modern edge computing, serverless databases, and global distribution.',
    date: 'July 28, 2026',
    author: {
      name: 'Oliver Thorne',
      role: 'Director of Cloud Operations',
      avatar: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&w=150&h=150&q=80'
    },
    content: `
      <p>Provisioning, managing, and scaling server clusters is rapidly becoming a thing of the past. Serverless architectures let developers focus exclusively on write code, delegating all infrastructure resource management to cloud platform orchestrators.</p>
      
      <h3>Edge Compute vs. Cloud Compute</h3>
      <p>Classic serverless functions run in centralized cloud data centers, which introduces latency for overseas users. Edge computing deploys your functions to CDN nodes situated directly near the client. Executing authentication, redirection, and localization right at the edge reduces processing delays to single-digit milliseconds.</p>

      <h3>Serverless Databases: The Final Frontier</h3>
      <p>Historically, scaling SQL databases serverless was complex due to persistent connection overheads. Modern serverless database clusters (like Neon, Supabase, or Spanner) support instant HTTP pooling, allowing database queries to execute concurrently across thousands of isolated compute threads without collapsing connection capacity.</p>
    `
  },
  {
    slug: 'securing-frontend-applications',
    category: 'Cybersecurity',
    title: 'Securing the Frontend: Best Practices for Modern Web Applications',
    time: '5 min read',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=900&q=80',
    desc: 'How to protect user sessions, prevent injection attacks, and securely handle API keys.',
    date: 'July 25, 2026',
    author: {
      name: 'Maya Lin',
      role: 'Security Engineer',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150&q=80'
    },
    content: `
      <p>Modern applications run significant logic directly inside the client browser. This makes them vulnerable to cross-site scripting (XSS), cross-site request forgery (CSRF), and client token exposure if not constructed with security in mind.</p>
      
      <h3>Never Expose Secret API Keys</h3>
      <p>Any environment variables prefixed with <code>NEXT_PUBLIC_</code> are baked into the client bundle and can be read by anyone. Keep secure credentials, like your Resend API Key or database passwords, strictly on the server by loading them inside Next.js API Routes or Server Components.</p>

      <h3>HttpOnly Session Cookies</h3>
      <p>Storing access tokens in <code>localStorage</code> or <code>sessionStorage</code> makes them readable by any script running on the page. In the event of an XSS vulnerability, attackers can steal these tokens. Protect session validation by using server-set cookies configured with <code>HttpOnly</code>, <code>Secure</code>, and <code>SameSite=Strict</code> headers.</p>
    `
  }
]
