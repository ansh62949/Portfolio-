// Centralized Portfolio Data File for Ansh's Portfolio OS
// All data is strictly verified from the repository and prompt specifications.

export const personalData = {
  name: "Ansh Pathak",
  intro: "Hey, I'm Ansh!",
  role: "Software Engineer | Backend & AI Engineering",
  headline: "Ansh Pathak",
  tagline: "Software Engineer building backend systems, AI agents, RAG applications, and distributed systems.",
  summary: "Computer Science (AI) undergraduate building backend and AI systems with Java, Spring Boot, Python, FastAPI and LangGraph. Experienced in event-driven and distributed services (Kafka, Redis, PostgreSQL), RAG pipelines and MCP integrations, with Docker/Kubernetes deployment.",
  highlights: [
    "300+ DSA Problems",
    "6-Agent AI Workflows",
    "RAG + Vector Search",
    "Kafka + Redis",
    "Kubernetes + CI/CD"
  ],
  education: {
    institution: "GL Bajaj Institute of Technology and Management",
    degree: "B.Tech in Computer Science (Artificial Intelligence)",
    graduation: "May 2027",
    gpa: "7.3",
    period: "Sep. 2023 - May 2027",
    location: "Greater Noida, India",
    courses: "Data Structures & Algorithms, OOP, DBMS, Operating Systems, Artificial Intelligence"
  },
  experience: [
    {
      company: "R.S. Infotech (Finngrow)",
      role: "Software Development Intern",
      period: "Jul. 2026 - Sep. 2026",
      tech: ["Spring Boot", "React", "JavaScript", "Vite", "PostgreSQL", "Capacitor"],
      bullets: [
        "Integrated a React/Vite client with 9 Spring Boot JWT authentication endpoints (OTP, MPIN, login, refresh, forgot-MPIN, logout), handling Bearer-token storage, HTTP 423 account-lockout and server error states.",
        "Contributed to FinGrow, a business accounting app, by developing its 5-screen authentication journey (activation, OTP verification, MPIN creation, login, forgot-MPIN) with react-hook-form and zod validation.",
        "Built 4 ledger and reporting screens (dashboard, party search, date-range statement, reports) with TanStack Query caching, CSV export and a print view over a mock API mirroring planned response shapes."
      ]
    }
  ],
  contact: {
    email: "ansh62949@gmail.com",
    phone: "+91 99841 30195",
    linkedin: "https://linkedin.com/in/anshpathak",
    github: "https://github.com/ansh62949",
    location: "Greater Noida, UP, India"
  },
  resumes: [
    {
      name: "Ansh Pathak — Resume",
      url: "/Ansh_Pathak_Resume.pdf",
      description: "Computer Science (AI) Undergraduate • Backend & AI Systems Engineer"
    }
  ]
};

export const whatIBuildPillars = [
  {
    id: "backend",
    title: "BACKEND & DISTRIBUTED SYSTEMS",
    desc: "Java 21, Spring Boot 3.5, Spring Security, REST APIs, Apache Kafka event streams, Redis GEO driver matching, WebSockets (STOMP), and decoupled microservices architectures.",
    icon: "Server",
    skills: ["Java 21", "Spring Boot", "Kafka", "Redis", "WebSockets", "PostgreSQL"]
  },
  {
    id: "ai",
    title: "AI & AGENT SYSTEMS",
    desc: "Production-oriented AI applications utilizing Python, FastAPI, LangGraph StateGraph multi-agent workflows, Model Context Protocol (MCP), pgvector/Qdrant vector stores, and grounded RAG.",
    icon: "Cpu",
    skills: ["LangGraph", "Multi-Agent", "RAG", "Qdrant", "pgvector", "MCP"]
  },
  {
    id: "production",
    title: "PRODUCTION ENGINEERING",
    desc: "Containerized application deployment using Docker & Docker Compose, Kubernetes cluster deployments with demonstrated self-healing pod replacement, GitHub Actions CI/CD pipelines, and GHCR image publishing.",
    icon: "ShieldCheck",
    skills: ["Docker", "Kubernetes", "GitHub Actions", "GHCR"]
  }
];

export const techCategories = [
  {
    category: "Backend",
    title: "Backend Engineering",
    items: [
      { name: "Java 21", level: "Advanced", note: "OOP, Multithreading, Sockets, Concurrent Pipelines", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "Spring Boot 3.5", level: "Advanced", note: "REST APIs, Dependency Injection, JPA, Microservices", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
      { name: "Spring Security", level: "Advanced", note: "Stateless JWT Auth, OAuth2, RBAC", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
      { name: "Python", level: "Advanced", note: "Async, Type Annotations, Concurrency", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "FastAPI", level: "Advanced", note: "Async SQLAlchemy 2.0, Alembic, Pydantic v2", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
      { name: "REST APIs", level: "Advanced", note: "Pagination, OpenAPI/Swagger, Rate Limiting", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" },
      { name: "STOMP WebSockets", level: "Advanced", note: "STOMP Protocol, Real-Time Telemetry & Chat", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg" }
    ]
  },
  {
    category: "Distributed Systems",
    title: "Distributed Systems",
    items: [
      { name: "Apache Kafka", level: "Advanced", note: "Topic Decoupling, Pub-Sub Messaging, 4 Event Streams", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg" },
      { name: "Redis & Redis GEO", level: "Advanced", note: "Spatial Indexing (5km GEORADIUS), Caching, Sorted Sets", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
      { name: "RabbitMQ", level: "Intermediate", note: "Async Task Offloading, Worker Queues", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rabbitmq/rabbitmq-original.svg" },
      { name: "Microservices", level: "Advanced", note: "Decoupled Architecture, Service Gateways", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" }
    ]
  },
  {
    category: "AI",
    title: "AI & Agents",
    items: [
      { name: "LangGraph", level: "Advanced", note: "StateGraph Stateful Workflows, Multi-Agent Orchestration", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "Multi-Agent Systems", level: "Advanced", note: "Specialized Audit Agents & Dynamic Routing", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "RAG & Vector Search", level: "Advanced", note: "Dense Embeddings, PostgreSQL FTS, Reciprocal Rank Fusion", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "Model Context Protocol (MCP)", level: "Advanced", note: "stdio & HTTP/SSE Protocol Integration, Tool Calling", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "Semantic Search", level: "Advanced", note: "Cosine Similarity, 1536-dim Vector Embeddings", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "Pydantic Schemas", level: "Advanced", note: "Structured LLM Outputs & Grounded Validation", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" }
    ]
  },
  {
    category: "Data",
    title: "Data & Storage",
    items: [
      { name: "PostgreSQL", level: "Advanced", note: "Full-Text Search, pgvector, Schema Optimization", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "pgvector HNSW", level: "Advanced", note: "High-Dimensional Vector Indexing & Cosine Distance", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "Qdrant", level: "Advanced", note: "Vector Database for Hybrid Dense Retrieval", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "MySQL", level: "Intermediate", note: "Relational Schemas, Data Persistence", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "MongoDB", level: "Intermediate", note: "NoSQL Document Storage & Aggregations", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" }
    ]
  },
  {
    category: "Cloud",
    title: "Cloud & DevOps",
    items: [
      { name: "Docker & Compose", level: "Advanced", note: "Multi-stage Builds, Docker Buildx, Layer Caching", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "Kubernetes (kind)", level: "Advanced", note: "Deployments, Services, Health Probes, Pod Self-Healing", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
      { name: "GitHub Actions", level: "Advanced", note: "Automated CI/CD Pipelines, Multi-platform Image Builds", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
      { name: "GHCR", level: "Advanced", note: "GitHub Container Registry Image Tagging & Publishing", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" }
    ]
  },
  {
    category: "Quality",
    title: "Quality & Testing",
    items: [
      { name: "Pytest", level: "Advanced", note: "16+ Passing Pytest Backend Automated Test Suites", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytest/pytest-original.svg" },
      { name: "Postman", level: "Advanced", note: "API Contract Validation & Regression Testing", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" }
    ]
  }
];

export const projects = [
  {
    id: "flowinbox-ai",
    title: "FlowInbox AI",
    positioning: "AI-Native Email & Workflow Automation Workspace",
    shortDesc: "AI-native workspace where users and autonomous agents collaborate on email triage, calendar scheduling, and workflow automation backed by Kubernetes self-healing infra.",
    flagship: true,
    folderName: "FlowInbox AI",
    category: ["AI", "Infrastructure", "Backend"],
    architectureBadge: "FastAPI + LangGraph + MCP + Hybrid RAG + Kubernetes + CI/CD",
    tech: ["FastAPI", "Python 3.11", "LangGraph", "MCP", "PostgreSQL", "Redis", "Qdrant", "Docker", "Kubernetes", "GitHub Actions", "GHCR", "React 18", "Vite"],
    metrics: [
      "Dual-Engine RAG",
      "Pod Self-Healing",
      "16 Pytest Tests"
    ],
    github: "https://github.com/ansh62949/FlowInbox",
    demo: null,
    problem: "Modern developers and teams drown in unstructured inbox communications, manual calendar scheduling, and fragmented workflow tools, leading to delayed responses and missed tasks.",
    solution: "FlowInbox AI combines LangGraph StateGraph agents, Model Context Protocol (MCP) integrations, dense vector + full-text hybrid retrieval, and strict human-in-the-loop approvals in a containerized, Kubernetes-deployed architecture.",
    architecture: "React + Vite → FastAPI → LangGraph StateGraph → MCP → Qdrant + PostgreSQL FTS (RRF RAG) → Kubernetes self-healing → GitHub Actions to GHCR",
    pipeline: [
      { step: "1. Frontend", detail: "React 18 + Vite SPA Client" },
      { step: "2. API Gateway", detail: "FastAPI Async Backend" },
      { step: "3. Agent Orchestration", detail: "LangGraph StateGraph Workflows" },
      { step: "4. Tool Protocol", detail: "Model Context Protocol (MCP)" },
      { step: "5. Dual-Engine RAG", detail: "Qdrant Dense Vector + PostgreSQL FTS (RRF)" },
      { step: "6. Production Infra", detail: "Kubernetes Self-Healing Pods" },
      { step: "7. CI/CD Registry", detail: "GitHub Actions to GHCR" }
    ],
    features: [
      "Dual-engine hybrid retrieval (Qdrant vector embeddings + PostgreSQL Full-Text Search via Reciprocal Rank Fusion)",
      "LangGraph StateGraph autonomous multi-agent orchestration for email triage and action routing",
      "Model Context Protocol (MCP) tool integration with stdio and HTTP/SSE transports",
      "Human-in-the-Loop authorization safeguards before dispatching emails or scheduling calendar events",
      "Kubernetes (kind) self-healing cluster with automated container replacement on pod termination",
      "Automated CI/CD workflow pushing verified multi-arch images to GitHub Container Registry (GHCR)",
      "16 Passing Pytest backend automated unit and integration tests"
    ],
    caseStudy: {
      problem: "Inbox overload creates major productivity drag. Teams need an AI-native workspace that safely reads thread context, drafts responses, and manages calendar events without making unauthorized state changes.",
      retrievalArchitecture: "Dual-engine hybrid retrieval pipeline: email content is indexed simultaneously into Qdrant for dense semantic embeddings and PostgreSQL FTS for exact lexical keyword matching. Results are merged using Reciprocal Rank Fusion (RRF) to maximize relevance.",
      safetyDesign: "To protect user communications, consequential operations like sending an email (`send_email`) or creating a calendar invite (`create_calendar_event`) require explicit Human-in-the-Loop approval before execution.",
      infrastructure: "Deployed on Kubernetes (kind) with separate deployments for Frontend SPA, FastAPI Backend API, PostgreSQL, Redis, and Qdrant vector database. Includes liveness/readiness probes and demonstrated self-healing pod replacement when backend containers are terminated.",
      cicd: "Automated GitHub Actions CI/CD pipeline running backend Pytest test suites (16 tests passing), Vite frontend production build, multi-architecture Docker Buildx image compilation with layer caching, and Git SHA / latest image tagging pushed to GitHub Container Registry (GHCR)."
    }
  },
  {
    id: "prsense-ai",
    title: "PRSense AI",
    positioning: "Repository-Aware AI Code Review Platform",
    shortDesc: "Automated pull request review platform combining Spring Boot orchestration, FastAPI AI pipelines, pgvector RAG context retrieval, and LangGraph multi-agent auditing.",
    flagship: true,
    folderName: "PRSense AI",
    category: ["Backend", "AI"],
    architectureBadge: "Java + Python Multi-Agent RAG Architecture",
    tech: ["Java", "Spring Boot", "FastAPI", "Python", "LangGraph", "RAG", "pgvector", "PostgreSQL", "GitHub Webhooks", "Docker"],
    metrics: [
      "1536-Dimensional Embeddings",
      "Cosine Similarity Search",
      "Under-30-Second Review"
    ],
    github: "https://github.com/ansh62949/prsense-ai",
    demo: "https://prsense-ai.vercel.app",
    problem: "Pull request reviews often lack codebase-wide contextual understanding, leading to missed security flaws, architectural inconsistencies, and slow feedback cycles.",
    solution: "PRSense AI automatically intercepts GitHub Pull Requests via Webhooks, queries stored repository context using pgvector cosine similarity, and orchestrates specialized LangGraph agents to generate grounded code reviews.",
    architecture: "GitHub webhook → Spring Boot → FastAPI → pgvector → LangGraph multi-agent audit → inline comments",
    pipeline: [
      { step: "1. Webhook Event", detail: "GitHub Pull Request Webhook" },
      { step: "2. Ingestion Service", detail: "Java Spring Boot Orchestrator" },
      { step: "3. AI Processing Pipeline", detail: "FastAPI Microservice" },
      { step: "4. Semantic Context", detail: "pgvector 1536-dim Cosine Similarity" },
      { step: "5. Multi-Agent Audit", detail: "LangGraph Security & Architecture Agents" },
      { step: "6. Grounded Delivery", detail: "Inline Comments Posted to GitHub PR" }
    ],
    features: [
      "Real-time GitHub Webhook integration for instant PR event interception and payload parsing",
      "Repository indexing with token-efficient code chunking and 1536-dim vector embeddings",
      "Concurrent audit agents specializing in security, design patterns, styling, and test coverage",
      "Context-aware codebase semantic search utilizing pgvector HNSW indexing",
      "Review generation completed in under 30 seconds end-to-end",
      "Automated cost telemetry and execution duration tracking"
    ]
  },
  {
    id: "herride",
    title: "HerRide",
    positioning: "Real-Time Women-Centric Ride-Hailing Platform",
    shortDesc: "Real-time women-only ride-hailing MVP leveraging Java 21, Spring Boot 3.5, Redis GEO 5km radial driver search, Kafka event stream decoupling, and STOMP WebSockets.",
    flagship: true,
    folderName: "HerRide",
    category: ["Backend", "Distributed Systems"],
    architectureBadge: "Spring Boot 3.5 + Redis GEO + Kafka + STOMP WebSockets",
    tech: ["Java 21", "Spring Boot 3.5", "Spring Security", "Kafka", "Redis GEO", "PostgreSQL", "WebSockets", "STOMP", "JWT", "Docker"],
    metrics: [
      "5 km GEORADIUS",
      "4 Kafka Topics Decoupled",
      "~8s Location Telemetry"
    ],
    github: "https://github.com/ansh62949/Herride",
    demo: "https://herride-six.vercel.app/",
    problem: "Passenger safety for women in urban transport requires instant driver location tracking, verified driver matching, rapid emergency response, and low-latency real-time communication.",
    solution: "HerRide solves this with a real-time event-driven architecture using Spring Boot 3.5, Redis GEO spatial indexing for sub-second driver matching within a 5km radius, Kafka event queues for emergency handling, and STOMP WebSockets for bilateral live updates.",
    architecture: "Spring Boot 3.5 → Redis GEO (5 km GEORADIUS) → Kafka (4 topics) → STOMP WebSockets",
    pipeline: [
      { step: "1. Client Request", detail: "Female Rider Location Telemetry" },
      { step: "2. API Gateway", detail: "Spring Boot 3.5 with Spring Security & JWT" },
      { step: "3. Spatial Matching", detail: "Redis GEO (5 km GEORADIUS Search)" },
      { step: "4. Event Decoupling", detail: "Apache Kafka (4 Topics for SOS & Rides)" },
      { step: "5. Real-Time Transport", detail: "STOMP WebSockets (~8s Live Updates)" }
    ],
    features: [
      "Frictionless OTP authentication with female passenger and driver registration checks",
      "Proximity-based driver matching within a 5km radius using Redis GEO spatial indexing",
      "Real-time ~8-second driver location updates broadcasted over STOMP WebSockets",
      "Kafka event pipeline with 4 dedicated topics for decoupled, high-priority SOS emergency events",
      "Single-tap emergency trigger alerting trusted contacts with live tracking link via SMS"
    ]
  },
  {
    id: "ai-mock-interview-coach",
    title: "AI Mock Interview Coach",
    positioning: "Multi-Agent AI Technical Interview Platform",
    shortDesc: "Stateful multi-agent technical interview coach built with Python, LangGraph StateGraph workflows, strict Pydantic structured output validation, and 13 passing tests.",
    flagship: true,
    folderName: "AI Mock Interview Coach",
    category: ["AI"],
    architectureBadge: "Python + LangGraph StateGraph + 6 Agents + Pydantic",
    tech: ["Python", "LangGraph", "StateGraph", "Multi-Agent Systems", "Pydantic", "Structured Outputs", "LLMs", "Pytest"],
    metrics: [
      "Six-Agent LangGraph Workflow",
      "Adaptive Difficulty",
      "Pydantic JSON Evaluation",
      "13 Pytest Tests"
    ],
    github: "https://github.com/ansh62949/AI-Mock-Interview-Coach",
    demo: null,
    problem: "Generic interview chatbots provide superficial evaluation without structural feedback, adaptive question progression, or multi-dimensional scoring.",
    solution: "AI Mock Interview Coach implements a stateful 6-agent LangGraph workflow that dynamically adjusts question difficulty, validates responses using strict Pydantic schemas, and evaluates candidate performance across technical domains.",
    architecture: "Six-agent LangGraph workflow → Adaptive difficulty router → Pydantic JSON evaluation → 13 Pytest automated test validation",
    pipeline: [
      { step: "1. Candidate Input", detail: "Audio / Text Answer Submission" },
      { step: "2. StateGraph Engine", detail: "LangGraph Stateful Workflow" },
      { step: "3. Multi-Agent Routing", detail: "6 Agents (Interviewer, Evaluator, Difficulty, Synthesizer, Question Gen, Auditor)" },
      { step: "4. Schema Enforcement", detail: "Pydantic Structured JSON Validation" },
      { step: "5. Automated Quality", detail: "13 Passing Pytest Unit & State Tests" }
    ],
    features: [
      "Stateful 6-agent LangGraph orchestration tracking candidate interaction context",
      "Adaptive difficulty progression based on real-time answer quality evaluation",
      "Strict Pydantic schema enforcement guaranteeing structured JSON feedback outputs",
      "Multi-dimensional scoring across problem solving, system design, and communication",
      "Comprehensive test coverage with 13 automated tests passing in Pytest"
    ]
  },
  // Preserved Secondary & Systems Projects
  {
    id: "codesphere",
    title: "CodeSphere",
    positioning: "Distributed Online Judge & Code Execution Platform",
    shortDesc: "Scalable coding environment featuring Docker container isolation, RabbitMQ submission queue offloading, and Redis caching.",
    flagship: false,
    category: ["Backend", "Distributed Systems"],
    architectureBadge: "Java + Spring Boot + RabbitMQ + Docker Sandboxing + Redis",
    tech: ["Java", "Spring Boot", "Docker", "RabbitMQ", "Redis", "MySQL"],
    metrics: ["1000+ Concurrent Executions", "Docker Sandbox Isolation", "40% Reduced Cache Latency"],
    github: "https://github.com/ansh62949/codesphere",
    demo: null,
    problem: "Running untrusted user code in online coding judges requires strict sandboxed isolation, low-latency asynchronous evaluation, and resilient queue scheduling.",
    solution: "Implemented Spring Boot gateway managing code submission endpoints, RabbitMQ queues offloading evaluation requests to worker nodes with isolated Docker container execution, and Redis caching test results.",
    architecture: "Spring Boot Gateway → RabbitMQ Queue → Worker Nodes running Isolated Docker Containers → Redis Caching",
    pipeline: [
      { step: "1. Submission Ingestion", detail: "REST API Endpoint receives code payload" },
      { step: "2. Queue Offloading", detail: "RabbitMQ asynchronous task queue dispatcher" },
      { step: "3. Docker Sandboxing", detail: "Isolated container compilation and test evaluation" },
      { step: "4. Result Caching", detail: "Redis memory cache for low-latency retrieval" }
    ],
    features: [
      "Secure Docker container sandbox isolation for untrusted code execution",
      "Multi-language compilation and execution support for Java, C++, and Python",
      "Asynchronous worker queue processing using RabbitMQ for high submission throughput",
      "Redis caching layer reducing database hit rates by 40%"
    ]
  },
  {
    id: "event-ticketing",
    title: "Event Ticketing System",
    positioning: "High-Throughput Event Management & Ticketing Backend",
    shortDesc: "Scalable microservices backend providing high concurrency ticketing, paginated discovery, and transaction control.",
    flagship: false,
    category: ["Backend"],
    architectureBadge: "Java + Spring Boot + PostgreSQL + Microservices Architecture",
    tech: ["Java", "Spring Boot", "PostgreSQL", "Microservices", "REST APIs"],
    metrics: ["5+ Scalable APIs", "99.9% Target Uptime", "<200ms API Latency"],
    github: "https://github.com/ansh62949/EventTicketingPlatform",
    demo: "https://eventticketingplatform-1.onrender.com",
    problem: "High-volume ticket demand causes database deadlocks, concurrency races on seat reservations, and sluggish event discovery.",
    solution: "Constructed decoupled Spring Boot microservices with transactional database locks, paginated event catalog indexing, and automated order confirmation workflows.",
    architecture: "Layered Spring Boot microservices with decoupled Auth, Ticketing, and Notification services.",
    pipeline: [
      { step: "1. Event Discovery", detail: "Paginated catalog queries with composite indexing" },
      { step: "2. Reservation Lock", detail: "High-concurrency database transaction control" },
      { step: "3. Order Processing", detail: "Payment integration & ticket generation" },
      { step: "4. Confirmation Dispatch", detail: "Automated transactional notifications" }
    ],
    features: [
      "High-concurrency ticket availability tracking and seat reservation locks",
      "Optimized PostgreSQL queries with composite indexing for <200ms response times",
      "Automated transactional email confirmations on completed booking",
      "Admin analytics endpoints for real-time ticket sales tracking"
    ]
  },
  {
    id: "civicshield",
    title: "CivicShield",
    positioning: "AI Civic Intelligence & Geospatial Platform",
    shortDesc: "AI NLP system categorizing municipal complaints paired with real-time geospatial departmental tracking.",
    flagship: false,
    category: ["AI", "Backend"],
    architectureBadge: "Python NLP + React Geospatial + Microservices + PostgreSQL",
    tech: ["Python", "NLP", "React", "Microservices", "PostgreSQL"],
    metrics: ["92% NLP Accuracy", "Real-Time Tracking", "3x Response Speed"],
    github: "https://github.com/ansh62949/Civicshield",
    demo: "https://civicshield-ten.vercel.app/",
    problem: "Municipal citizen grievances are submitted in unstructured text with varied urgency, leading to misrouted departmental tickets and delayed emergency interventions.",
    solution: "Engineered an AI NLP classification microservice categorizing incoming municipal issues with 92% accuracy, paired with a React geospatial heatmap dashboard for real-time municipal routing.",
    architecture: "Python NLP Classification Microservice → REST API Gateway → PostgreSQL Spatial Store → React Geospatial Dashboard",
    pipeline: [
      { step: "1. Grievance Ingestion", detail: "Citizen text complaint submission" },
      { step: "2. NLP Categorization", detail: "Python text classification & urgency scoring" },
      { step: "3. Spatial Persistence", detail: "PostgreSQL geospatial departmental routing" },
      { step: "4. Transparency Portal", detail: "React live dashboard with resolution tracking" }
    ],
    features: [
      "Automated NLP complaint classification and urgency scoring with 92% accuracy",
      "Geospatial heatmap visualization for municipal department routing",
      "Public transparency portal for complaint resolution tracking and accountability",
      "RESTful microservice architecture separating AI inference from spatial persistence"
    ]
  },
  {
    id: "pakson-ml",
    title: "Parkinson's Early Detection AI",
    positioning: "Acoustic ML Model for Parkinson's Disease Risk Scoring",
    shortDesc: "Machine learning pipeline extracting voice acoustic features (Pitch, Jitter, Shimmer, MFCCs) for early risk scoring.",
    flagship: false,
    category: ["AI"],
    architectureBadge: "Python + Scikit-Learn + MFCC Acoustic Signal Analysis",
    tech: ["Python", "Scikit-Learn", "MFCCs", "Random Forest", "Librosa"],
    metrics: ["UCI Benchmark Dataset", "Acoustic Feature Extraction", "90%+ Model Accuracy"],
    github: "https://github.com/ansh62949/pakson-ml",
    demo: null,
    problem: "Clinical Parkinson's diagnosis often happens late after physical tremors appear. Non-invasive early diagnostic screening tools are urgently needed.",
    solution: "Built an acoustic machine learning pipeline extracting vocal acoustic parameters (pitch variability, jitter, shimmer, 13 MFCC coefficients) with Librosa and evaluating risk via Random Forest with 90%+ cross-validated accuracy.",
    architecture: "Audio Upload → Librosa Preprocessing & Feature Extraction → Random Forest Inference Model → Risk Score API",
    pipeline: [
      { step: "1. Audio Ingestion", detail: "Voice recording upload (.wav / .mp3)" },
      { step: "2. Preprocessing & Extraction", detail: "Librosa MFCCs, jitter, and shimmer extraction" },
      { step: "3. Model Inference", detail: "Trained Random Forest classification model" },
      { step: "4. Risk Scoring", detail: "Real-time diagnostic risk assessment score" }
    ],
    features: [
      "Voice recording feature extraction (MFCCs, pitch variation, shimmer, jitter)",
      "Random Forest & SVM model training with cross-validation on UCI benchmark dataset",
      "Real-time Parkinson's disease acoustic risk scoring API",
      "Signal processing preprocessing pipeline built with Librosa"
    ]
  },
  {
    id: "multiclient-chat",
    title: "Multi-Client TCP Chat Server",
    positioning: "Multithreaded Java Network Chat Server",
    shortDesc: "High-performance multithreaded chat server implemented in Java using low-level sockets and concurrent thread pools.",
    flagship: false,
    category: ["Backend"],
    architectureBadge: "Core Java 21 + Multithreading + Socket Programming + TCP/IP",
    tech: ["Java", "Multithreading", "Socket Programming", "TCP/IP"],
    metrics: ["Concurrent Connections", "Low Latency TCP", "Broadcast Pipelines"],
    github: "https://github.com/ansh62949/MultiClientChatServer2",
    demo: null,
    problem: "Managing real-time messaging across concurrent clients without high-overhead polling requires low-level socket programming and synchronized thread pool concurrency.",
    solution: "Implemented a pure Java TCP ServerSocket listener that spawns dedicated client handler threads managed via thread pool task synchronization, broadcasting messages across all active socket streams with graceful resource cleanup.",
    architecture: "Java ServerSocket Listener → Dedicated Client Connection Threads → Thread Pool Task Synchronization",
    pipeline: [
      { step: "1. Socket Listening", detail: "ServerSocket listener on dedicated TCP port" },
      { step: "2. Connection Handling", detail: "Concurrent thread dispatch per connected client" },
      { step: "3. Broadcast Engine", detail: "Synchronized message distribution to all active streams" },
      { step: "4. Resource Teardown", detail: "Graceful socket close and thread pool shutdown" }
    ],
    features: [
      "Multithreaded client socket connection management supporting concurrent TCP sessions",
      "Asynchronous broadcast message propagation across active clients with synchronization locks",
      "Graceful thread termination and socket resource cleanup on disconnect",
      "Low-latency TCP packet delivery without external protocol overhead"
    ]
  },
  {
    id: "train-booking",
    title: "Train Reservation Backend",
    positioning: "RESTful Railway Reservation System Clone",
    shortDesc: "Comprehensive Spring Boot backend replicating core railway reservation workflows with strict database validation.",
    flagship: false,
    category: ["Backend"],
    architectureBadge: "Java 17 + Spring Boot + Spring Data JPA + MySQL",
    tech: ["Java 17", "Spring Boot", "MySQL", "Spring Data JPA"],
    metrics: ["IRCTC Domain Clone", "N-Tier Architecture", "JPA Relational Mapping"],
    github: "https://github.com/ansh62949/train-booking-system",
    demo: null,
    problem: "Railway ticket reservation domains require strict inventory consistency, transactional seat allocation, and multi-tier booking validation to prevent overbooking.",
    solution: "Built an N-tier Spring Boot backend clone of IRCTC railway workflows utilizing Spring Data JPA, relational integrity constraints in MySQL, and layered service controllers handling reservations, cancellations, and real-time berth availability.",
    architecture: "N-Tier Spring Boot Architecture: Controller → Service Layer → Repository → MySQL Database",
    pipeline: [
      { step: "1. Auth & Verification", detail: "Passenger credentials & session validation" },
      { step: "2. Schedule Query", detail: "Train route lookup with berth availability" },
      { step: "3. Transactional Booking", detail: "JPA relational write with seat lock" },
      { step: "4. Cancellation & Refund", detail: "Automated status update and refund calculation" }
    ],
    features: [
      "User authentication and ticket reservation workflows with password hashing",
      "Train route schedule management and real-time seat availability validation",
      "Ticket cancellation and refund status calculation",
      "N-tier clean layered architecture: Controllers, Services, Repositories, Entities"
    ]
  }
];

export const certifications = [
  {
    id: "walmart-advanced-swe",
    title: "Walmart Global Tech — Advanced SWE Job Simulation",
    issuer: "Walmart Global Tech & Forage",
    credential: "Certificate of Completion (Code: ZgXmbF4p5aZAinZv6)",
    date: "February 20, 2025",
    category: "Backend",
    skills: ["Advanced Data Structures", "Software Architecture", "Relational Database Design", "Data Munging"],
    link: "/walmart_certificate.png"
  },
  {
    id: "hpe-swe-cert",
    title: "Hewlett Packard Enterprise — Software Engineering Job Simulation",
    issuer: "Hewlett Packard Enterprise & Forage",
    credential: "Certificate of Completion (Code: hBQyZmuZZCKqEcmR6)",
    date: "February 20, 2025",
    category: "Backend",
    skills: ["RESTful Web Services", "Unit Testing", "API Data Upload Architecture"],
    link: "/hpe_certificate.png"
  },
  {
    id: "claude-code",
    title: "Claude Code in Action",
    issuer: "Claude Academy",
    credential: "Course Completion Badge",
    date: "September 23, 2026",
    category: "AI",
    skills: ["Claude Code", "AI Pair Programming", "Agentic Workflows", "CLI Automation"],
    link: "/claude_code_badge.png"
  },
  {
    id: "nit-delhi-codeslayer",
    title: "NIT Delhi Code Slayer 2k25",
    issuer: "National Institute of Technology (NIT), Delhi",
    credential: "Certificate of Participation",
    date: "2025",
    category: "Hackathons",
    skills: ["Competitive Programming", "Algorithms", "Problem Solving"],
    link: "/nit_delhi_codeslayer.png"
  },
  {
    id: "quasar-hackathon",
    title: "Quasar 4.0: 24Hrs National Level Hackathon",
    issuer: "Unstop Holiday Fest & Vasantdada Patil Pratishthan's College, Mumbai",
    credential: "Certificate of Participation",
    date: "2025",
    category: "Hackathons",
    skills: ["24Hr National Hackathon", "Full Stack Systems", "Rapid Prototyping"],
    link: "/quasar_hackathon.png"
  },
  {
    id: "hf-agents",
    title: "Hugging Face Agents Course",
    issuer: "Hugging Face Instructors",
    credential: "Certificate of Excellence",
    date: "September 21, 2026",
    category: "AI",
    skills: ["AI Agents", "LangGraph", "Tool Use", "Multi-Agent Workflows"],
    link: "/huggingface_certificate.png"
  },
  {
    id: "unstop-hackathon",
    title: "Unstop Hackathon Distinction",
    issuer: "Unstop",
    credential: "Verified Competition Credential",
    date: "2026",
    category: "Hackathons",
    skills: ["Competitive Programming", "System Architecture"],
    link: "https://unstop.com/certificate-preview/b10aefe6-c889-47fd-91c2-a15b18ac9fe6"
  }
];

export const achievements = [
  {
    id: "hf-agents-cert",
    title: "Hugging Face Agents Course",
    category: "Certification",
    badge: "Certificate of Excellence",
    date: "September 21, 2026",
    desc: "Achieved Certificate of Excellence mastering multi-agent orchestrations, LangGraph tool binding, and autonomous agent loops."
  },
  {
    id: "claude-code-cert",
    title: "Claude Code in Action",
    category: "Certification",
    badge: "Course Completion Badge",
    date: "September 23, 2026",
    desc: "Completed advanced course on agentic terminal workflows, automated coding agents, and CLI orchestration."
  },
  {
    id: "hack-the-globe",
    title: "Hack the Globe 2025",
    category: "Hackathons",
    badge: "Round 2 Qualifier",
    date: "2025",
    desc: "Qualified for Round 2 of Hack the Globe 2025, designing scalable backend and algorithmic solutions for global challenges."
  },
  {
    id: "dsa-problems",
    title: "300+ DSA Problems Solved",
    category: "Algorithms",
    badge: "Competitive Programming",
    date: "Ongoing",
    desc: "Proficient in Data Structures & Algorithms with 300+ solved problems across LeetCode and competitive programming platforms."
  },
  {
    id: "walmart-swe",
    title: "Walmart SWE Virtual Experience",
    category: "Experience",
    badge: "Virtual Experience Program",
    date: "2026",
    desc: "Completed Walmart Software Engineering virtual program focused on backend services, enterprise architecture, and data structures."
  },
  {
    id: "hpe-swe",
    title: "HPE SWE Virtual Experience",
    category: "Experience",
    badge: "Virtual Experience Program",
    date: "2026",
    desc: "Completed Hewlett Packard Enterprise Software Engineering virtual program covering software engineering life cycle and cloud concepts."
  }
];

export const readingFeed = [
  {
    id: "read-1",
    title: "Building Dual-Engine RAG with Reciprocal Rank Fusion",
    source: "FlowInbox Technical Insights",
    category: "AI & Distributed Systems",
    date: "October 2026",
    readTime: "4 min read",
    snippet: "Why choose between vector search and lexical search when you can use both? A deep dive into combining Qdrant dense vector embeddings with PostgreSQL Full-Text Search using Reciprocal Rank Fusion (RRF) for zero-hallucination email triage.",
    tags: ["RAG", "Qdrant", "PostgreSQL", "FastAPI"],
    link: "https://github.com/ansh62949/FlowInbox"
  },
  {
    id: "read-2",
    title: "Sub-Second Spatial Driver Matching with Redis GEO",
    source: "HerRide Architecture Notes",
    category: "Backend & Systems",
    date: "September 2026",
    readTime: "5 min read",
    snippet: "Exploring how Redis GEO commands (5km GEORADIUS) power sub-second proximity queries for female riders and verified drivers, while Apache Kafka decouples emergency SOS signals.",
    tags: ["Redis GEO", "Kafka", "Spring Boot", "WebSockets"],
    link: "https://github.com/ansh62949/Herride"
  },
  {
    id: "read-3",
    title: "Multi-Agent Code Review with 1536-Dim Embeddings",
    source: "PRSense AI System Design",
    category: "AI & Agents",
    date: "August 2026",
    readTime: "3 min read",
    snippet: "How PRSense AI intercepts GitHub pull requests, queries repository context with pgvector cosine similarity, and delegates reviews across specialized LangGraph audit agents in under 30 seconds.",
    tags: ["LangGraph", "pgvector", "Spring Boot", "FastAPI"],
    link: "https://github.com/ansh62949/prsense-ai"
  },
  {
    id: "read-4",
    title: "Hugging Face Agents Course: Excellence Certification",
    source: "Hugging Face Academy",
    category: "Certification",
    date: "September 21, 2026",
    readTime: "Official Credential",
    snippet: "Verified Certificate of Excellence covering autonomous agent architecture, LangGraph workflows, and tool calling pipelines.",
    tags: ["AI Agents", "LangGraph", "Hugging Face"],
    link: null
  },
  {
    id: "read-5",
    title: "Claude Code in Action: Agentic Workflows & CLI",
    source: "Claude Academy",
    category: "Certification",
    date: "September 23, 2026",
    readTime: "Official Badge",
    snippet: "Advanced credential in agentic pair programming, CLI automation, and self-directing software development workflows.",
    tags: ["Claude Code", "CLI Automation", "AI Agents"],
    link: null
  },
  {
    id: "read-6",
    title: "Hack the Globe 2025: Round 2 Qualification",
    source: "Global Competition",
    category: "Hackathons",
    date: "2025",
    readTime: "Milestone",
    snippet: "Advanced to Round 2 of the global Hack the Globe competition, building robust software engineering systems for international impact.",
    tags: ["Hackathon", "System Design", "Algorithms"],
    link: null
  }
];

export const calendarEvents = [
  {
    date: "2026-09-21",
    title: "Hugging Face Agents Course Certificate",
    category: "Learning",
    badge: "Excellence Certificate",
    description: "Awarded Certificate of Excellence for autonomous AI agent architectures and tool use."
  },
  {
    date: "2026-09-23",
    title: "Claude Code in Action Certification",
    category: "Learning",
    badge: "Credential",
    description: "Completed Claude Code in Action course covering agentic terminal development."
  },
  {
    date: "2025-10-15",
    title: "Hack the Globe Round 2 Qualifier",
    category: "Hackathons",
    badge: "Competition",
    description: "Advanced to Round 2 of Hack the Globe 2025 global engineering challenge."
  },
  {
    date: "2026-06-10",
    title: "Walmart SWE Virtual Experience",
    category: "Internships",
    badge: "Experience",
    description: "Completed software engineering virtual experience program at Walmart."
  },
  {
    date: "2026-07-15",
    title: "HPE SWE Virtual Experience",
    category: "Internships",
    badge: "Experience",
    description: "Completed Hewlett Packard Enterprise software engineering virtual experience."
  },
  {
    date: "2027-05-30",
    title: "B.Tech CSE (AI) Graduation",
    category: "Education",
    badge: "Degree",
    description: "Expected graduation with B.Tech in CSE (Artificial Intelligence) from G L Bajaj ITM."
  }
];

export const galleryItems = [
  {
    id: "gal-hf",
    title: "Hugging Face Agents Course Certificate",
    category: "Certificates",
    src: "/huggingface_certificate.png",
    caption: "Certificate of Excellence — Hugging Face Agents Course (Sep 21, 2026)",
    verified: true
  },
  {
    id: "gal-walmart",
    title: "Walmart Global Tech SWE Certificate",
    category: "Certificates",
    src: "/walmart_certificate.png",
    caption: "Advanced Software Engineering Job Simulation — Walmart Global Tech & Forage (Feb 2025)",
    verified: true
  },
  {
    id: "gal-hpe",
    title: "HPE Software Engineering Certificate",
    category: "Certificates",
    src: "/hpe_certificate.png",
    caption: "Software Engineering Job Simulation — Hewlett Packard Enterprise & Forage (Feb 2025)",
    verified: true
  },
  {
    id: "gal-claude",
    title: "Claude Code in Action Badge",
    category: "Certificates",
    src: "/claude_code_badge.png",
    caption: "Claude Academy Course Completion Badge — AI Agents, Terminal Automation & CLI Orchestration",
    verified: true
  },
  {
    id: "gal-codeslayer",
    title: "NIT Delhi Code Slayer 2k25",
    category: "Hackathons",
    src: "/nit_delhi_codeslayer.png",
    caption: "Certificate of Participation — National Institute of Technology (NIT), Delhi",
    verified: true
  },
  {
    id: "gal-quasar",
    title: "Quasar 4.0: 24Hr National Hackathon",
    category: "Hackathons",
    src: "/quasar_hackathon.png",
    caption: "Unstop Holiday Fest 2025 — Vasantdada Patil Pratishthan's College of Engineering, Mumbai",
    verified: true
  },
  {
    id: "gal-profile",
    title: "Profile Picture",
    category: "Profile",
    src: "/profile.jpg",
    caption: "Ansh Pathak — Backend & AI Engineer (B.Tech CSE AI 2027)",
    verified: true
  }
];

export const wallpapers = [
  {
    id: "ubuntu",
    name: "Ubuntu Horizon",
    previewColor: "from-[#77216F] via-[#5E2750] to-[#E95420]",
    description: "Signature Ubuntu purple, aubergine, and warm solar orange aura"
  },
  {
    id: "obsidian",
    name: "Cinematic Obsidian",
    previewColor: "from-[#0a0a0f] via-[#12121c] to-[#1e1e2d]",
    description: "Stealth dark developer workstation with deep graphite mesh"
  },
  {
    id: "cosmic",
    name: "Cosmic Nebula",
    previewColor: "from-[#0f172a] via-[#311042] to-[#1e1b4b]",
    description: "Deep indigo, royal violet, and cosmic developer gradients"
  }
];

export const desktopFolders = [
  {
    id: "flowinbox-ai",
    name: "FlowInbox AI",
    badge: "FastAPI + LangGraph + K8s",
    projectId: "flowinbox-ai",
    type: "project"
  },
  {
    id: "prsense-ai",
    name: "PRSense AI",
    badge: "Spring Boot + pgvector",
    projectId: "prsense-ai",
    type: "project"
  },
  {
    id: "herride",
    name: "HerRide",
    badge: "Redis GEO + Kafka",
    projectId: "herride",
    type: "project"
  },
  {
    id: "ai-mock-interview-coach",
    name: "AI Mock Interview Coach",
    badge: "6-Agent StateGraph",
    projectId: "ai-mock-interview-coach",
    type: "project"
  }
];
