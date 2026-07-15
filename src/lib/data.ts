export const HLS_VIDEO_SRC =
  'https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8'

export const profile = {
  name: 'Mishell Rose Mathew',
  initials: 'MR',
  email: 'mishellrm06@gmail.com',
  phone: '+91 8921901138',
  location: 'Alappuzha, Kerala',
  eyebrow: "COLLECTION '26",
  description:
    'Backend Python developer specializing in scalable APIs and high-performance systems with FastAPI, PostgreSQL, and AWS.',
  /** Full phrases so the hero line always reads correctly */
  roleLines: [
    'Backend engineer based in Alappuzha, Kerala.',
    'Python developer building production APIs.',
    'Systems builder focused on secure backends.',
    'API specialist shipping realtime platforms.',
  ] as const,
  socials: [
    { label: 'LinkedIn', href: 'https://share.google/Duc6CQHhiOEEkuHzA' },
    { label: 'GitHub', href: 'https://github.com/Mishellrose' },
    { label: 'Email', href: 'mailto:mishellrm06@gmail.com' },
  ],
}

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'Resume', href: '#resume' },
] as const

export const projects = [
  {
    slug: 'hotspot',
    title: 'Hotspot',
    subtitle: 'Location-Based Dating Backend',
    image: '/projects/wireframe.png',
    gradient: 'from-violet-500 via-fuchsia-400/60 via-indigo-500/60 to-transparent',
    stack: 'FastAPI · SQLAlchemy · PostgreSQL · AWS S3 · Boto3',
    description:
      'Backend for a dating app that lets people connect only when they are inside geofenced hotspot locations such as cafes and restaurants.',
    highlights: [
      'Secure user registration, login, and profile management with photo uploads to S3.',
      'Admin hotspot management and geofencing so users can interact only within defined locations.',
      'Swipe right/left matching with undo last swipe and match notifications.',
      'Built with FastAPI, SQLAlchemy, PostgreSQL, and AWS S3 via Boto3.',
    ],
  },
  {
    slug: 'resort-booking',
    title: 'Resort Booking',
    subtitle: 'Resort Booking Backend',
    image: '/projects/building.png',
    gradient: 'from-sky-500 via-blue-400/60 to-transparent',
    stack: 'FastAPI · PostgreSQL · CI/CD',
    description:
      'FastAPI backend for booking resorts, with role-based registration and authentication for users, customers, and staff.',
    highlights: [
      'Register endpoint that stores users, customers, or staff in the correct store based on role.',
      'Login endpoint to authenticate each role securely.',
      'CI/CD pipeline so the service stays continuously deployable and running.',
      'Designed for resort booking flows and multi-role access control.',
    ],
  },
  {
    slug: 'phisherx',
    title: 'PhisherX',
    subtitle: 'Phishing Link Prediction',
    image: '/projects/person.png',
    gradient: 'from-emerald-500 via-emerald-300/60 via-teal-500/60 to-transparent',
    stack: 'FastAPI · Python · Scikit-Learn',
    description:
      'ML-powered web app that predicts whether a URL is phishing or safe, backed by curated datasets and a trained classification model.',
    highlights: [
      'Collected and labeled URL datasets spanning phishing and legitimate links for supervised learning.',
      'Feature engineering on URL structure, domain signals, and lexical patterns.',
      'Trained and evaluated Scikit-Learn models for binary phishing classification.',
      'Served predictions through FastAPI REST endpoints with a clear safe-vs-threat response.',
    ],
  },
]

export const journalEntries = [
  {
    slug: 'building-scalable-apis-fastapi',
    title: 'Building Scalable APIs with FastAPI',
    image: '/explorations/planet.jpeg',
    readTime: '6 min read',
    date: 'Feb 13, 2026',
    excerpt:
      'How dependency injection, async routes, and clear layering keep FastAPI services fast as they grow.',
    body: [
      'FastAPI makes it easy to ship endpoints quickly, but scalability comes from how you structure the service — not just from the framework itself.',
      'I lean on dependency injection for database sessions, auth, and config so routes stay thin and testable. Async handlers help when you are waiting on I/O, but the real win is keeping business logic out of the route layer.',
      'Versioning, pagination, and consistent error shapes matter early. A predictable API contract saves frontend teams time and makes it easier to add caching or rate limiting later.',
      'For production, pair FastAPI with structured logging, health checks, and migration discipline. The framework is fast by default — clean architecture is what keeps it fast at scale.',
    ],
  },
  {
    slug: 'geo-fencing-realtime-matching',
    title: 'Geo-fencing for Real-time Matching',
    image: '/explorations/cubes.jpeg',
    readTime: '5 min read',
    date: 'Feb 06, 2026',
    excerpt:
      'Designing hotspot boundaries and location checks so users only match when they are physically in the same place.',
    body: [
      'Location-based matching only works if geofencing is reliable. The goal is simple: users should interact only when they are inside a defined hotspot such as a cafe or venue.',
      'Hotspots are stored as coordinates with a radius. On each location update, the backend checks whether the user falls inside any active boundary before allowing swipes or chat.',
      'Indexing geo queries matters once traffic grows. PostgreSQL with the right indexes — or PostGIS for heavier spatial workloads — keeps lookups fast under concurrent users.',
      'Edge cases include GPS drift, stale coordinates, and users leaving a hotspot mid-session. Short TTLs on location data and re-validation before sensitive actions help keep the experience fair and secure.',
    ],
  },
  {
    slug: 'jwt-auth-rbac',
    title: 'JWT Auth & Role-Based Access Control',
    image: '/explorations/ascii.jpeg',
    readTime: '6 min read',
    date: 'Feb 03, 2026',
    excerpt:
      'Patterns for secure login, token handling, and role-based permissions across admin and user flows.',
    body: [
      'Authentication is the front door of every backend. JWTs work well for stateless APIs when tokens are short-lived and refresh flows are handled carefully.',
      'Role-based access control lets one API serve admins, staff, and regular users without duplicating endpoints. Middleware or dependencies can enforce roles before a handler runs.',
      'Never store secrets in tokens. Keep payloads minimal — user id, role, expiry — and validate signatures on every protected route.',
      'For resort and dating platforms I have worked on, separating registration paths by role and scoping database writes per role prevented an entire class of permission bugs.',
    ],
  },
  {
    slug: 'indexing-high-concurrency',
    title: 'Indexing Strategies for High Concurrency',
    image: '/explorations/smoke.jpeg',
    readTime: '5 min read',
    date: 'Jan 31, 2026',
    excerpt:
      'Practical indexing choices that keep PostgreSQL responsive when many users hit the same tables.',
    body: [
      'Most performance issues I have seen trace back to missing or misused indexes — not Python itself.',
      'Start with the queries your app runs most: lookups by foreign key, filtered lists, and time-ordered feeds. Composite indexes should match the leftmost columns of your WHERE and ORDER BY clauses.',
      'Avoid over-indexing write-heavy tables. Every index speeds reads but costs inserts and updates.',
      'Use EXPLAIN ANALYZE during development. A query that is fine with a hundred rows can collapse under thousands of concurrent swipe or booking requests without the right index in place.',
    ],
  },
]

export const stats = [
  {
    number: '2+',
    label: 'Years Experience',
    sublabel: 'Support engineering and backend development.',
  },
  {
    number: '3',
    label: 'Featured Projects',
    sublabel: 'Dating geofencing, resort booking, and ML detection.',
  },
  {
    number: '100%',
    label: 'Backend Focus',
    sublabel: 'APIs, databases, auth, and system design.',
  },
]

export const experience = [
  {
    role: 'Backend Developer Intern',
    company: 'Gluping',
    period: 'Sep 2025 – Jan 2026',
    points: [
      'Backend API development and database design with FastAPI.',
      'Building and optimizing REST endpoints for scalability.',
      'Collaborating with frontend teams and participating in design reviews.',
    ],
  },
  {
    role: 'Employee Support',
    company: 'Sutherland Global Services',
    period: 'Jun 2024 – Sep 2025',
    points: [
      'Technical support and application troubleshooting.',
      'Improved communication under time-sensitive conditions.',
    ],
  },
]

export const education = {
  degree: 'BTech in Computer Science & Engineering',
  school: 'Carmel College of Engineering & Technology, Punnapra',
  details: 'CGPA: 7.5 — 2020 – 2024',
}

export const skills = {
  Languages: ['Python', 'SQL', 'Java', 'C'],
  'Backend & Frameworks': ['FastAPI', 'Flask'],
  Databases: ['PostgreSQL', 'MySQL', 'Microsoft SQL Server'],
  'Cloud & DevOps': ['AWS', 'Docker', 'Git', 'GitHub', 'Postman'],
  'API & Architecture': [
    'REST API Design',
    'Authentication & Authorization',
    'Async Programming',
    'WebSockets',
  ],
}
