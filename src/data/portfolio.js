export const personalData = {
  name: "Ansh Pathak",
  role: "Software Engineer | Backend & AI Engineering",
  headline: "Software Engineer building backend systems, AI agents, RAG applications, and distributed systems.",
  summary: "Computer Science (AI) student building backend systems, distributed applications, and AI-powered products with Java, Spring Boot, Python, FastAPI, LangGraph, RAG, and cloud-native tooling.",
  highlights: [
    "300+ DSA Problems",
    "6-Agent AI Workflows",
    "RAG + Vector Search",
    "Kafka + Redis",
    "Kubernetes + CI/CD"
  ],
  education: {
    institution: "G L Bajaj Institute of Technology & Management",
    degree: "B.Tech in Computer Science and Engineering (Artificial Intelligence)",
    graduation: "May 2027",
    gpa: "7.3"
  },
  contact: {
    email: "ansh62949@gmail.com",
    phone: "9984130195",
    linkedin: "https://www.linkedin.com/in/anshpathak/",
    github: "https://github.com/ansh62949",
    location: "India"
  },
  resumes: [
    { name: "Master Resume", url: "https://drive.google.com/file/d/1An97dcx4UmldPisK6rqIbg2H6VV2lpg2/view?usp=drive_link" },
    { name: "Backend Engineering Resume", url: "https://drive.google.com/file/d/1An97dcx4UmldPisK6rqIbg2H6VV2lpg2/view?usp=drive_link" },
    { name: "AI Engineering Resume", url: "https://drive.google.com/file/d/1An97dcx4UmldPisK6rqIbg2H6VV2lpg2/view?usp=drive_link" }
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
    skills: ["Docker", "Kubernetes", "GitHub Actions", "GHCR", "Prometheus", "Grafana"]
  }
];

export const techCategories = [
  {
    category: "Backend Engineering",
    items: [
      { name: "Java 21", level: "Advanced", note: "OOP, Multithreading, Sockets, Concurrent Pipelines", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "Spring Boot 3.5", level: "Advanced", note: "REST APIs, Dependency Injection, JPA, Microservices", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
      { name: "Spring Security", level: "Advanced", note: "Stateless JWT Auth, OAuth2, RBAC", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
      { name: "Python / FastAPI", level: "Advanced", note: "Async SQLAlchemy 2.0, Alembic, Pydantic v2", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
      { name: "REST APIs", level: "Advanced", note: "Pagination, OpenAPI/Swagger, Rate Limiting", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" },
      { name: "WebSockets", level: "Advanced", note: "STOMP Protocol, Real-Time Telemetry & Chat", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg" }
    ]
  },
  {
    category: "Distributed Systems",
    items: [
      { name: "Apache Kafka", level: "Advanced", note: "Topic Decoupling, Pub-Sub Messaging, Event-Driven Architecture", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg" },
      { name: "Redis & Redis GEO", level: "Advanced", note: "Spatial Indexing (5km Search), Caching, Sorted Sets", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
      { name: "RabbitMQ", level: "Intermediate", note: "Async Task Offloading, Worker Queues", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rabbitmq/rabbitmq-original.svg" },
      { name: "Microservices", level: "Advanced", note: "Decoupled Architecture, Eureka Discovery, Service Gateways", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" }
    ]
  },
  {
    category: "AI Engineering",
    items: [
      { name: "LangGraph", level: "Advanced", note: "StateGraph Stateful Workflows, Multi-Agent Orchestration", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "RAG & Vector Search", level: "Advanced", note: "Dense Embeddings, PostgreSQL FTS, Reciprocal Rank Fusion", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "Model Context Protocol (MCP)", level: "Advanced", note: "stdio & HTTP/SSE Protocol Integration, Tool Calling", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "pgvector & Qdrant", level: "Advanced", note: "Vector Indexing, Cosine Similarity, HNSW Search", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "Pydantic Schemas", level: "Advanced", note: "Structured LLM Outputs & Grounded Validation", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" }
    ]
  },
  {
    category: "Data & Storage",
    items: [
      { name: "PostgreSQL", level: "Advanced", note: "Full-Text Search, pgvector, Schema Optimization", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "MySQL", level: "Intermediate", note: "Relational Schemas, Data Persistence", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "MongoDB", level: "Intermediate", note: "NoSQL Document Storage & Aggregations", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" }
    ]
  },
  {
    category: "Cloud, Infrastructure & DevOps",
    items: [
      { name: "Docker & Compose", level: "Advanced", note: "Multi-stage Builds, Docker Buildx, Layer Caching", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "Kubernetes (kind)", level: "Advanced", note: "Deployments, Services, Health Probes, Pod Self-Healing", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
      { name: "GitHub Actions & GHCR", level: "Advanced", note: "CI/CD Pipelines, Automated Testing, Container Registry", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
      { name: "Linux & Shell", level: "Intermediate", note: "CLI Tooling, Bash Scripting, System Administration", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" }
    ]
  },
  {
    category: "Observability & Testing",
    items: [
      { name: "Prometheus & Grafana", level: "Intermediate", note: "System Metrics, Telemetry & Dashboard Tracking", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg" },
      { name: "Pytest & JUnit", level: "Advanced", note: "16+ Passing Pytest Backend Tests & Unit Testing", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytest/pytest-original.svg" }
    ]
  }
];

export const projects = [
  {
    id: "prsense-ai",
    title: "PRSense AI",
    positioning: "Repository-Aware AI Code Review Platform",
    shortDesc: "Automated pull request review platform combining Spring Boot orchestration, FastAPI AI pipelines, pgvector RAG context retrieval, and LangGraph multi-agent auditing.",
    flagship: true,
    category: ["Backend", "AI"],
    architectureBadge: "Java + Python Multi-Agent RAG Architecture",
    tech: ["Java", "Spring Boot", "FastAPI", "Python", "LangGraph", "RAG", "pgvector", "PostgreSQL", "GitHub Webhooks", "Docker"],
    metrics: [
      "1536-Dim Embeddings",
      "Cosine Similarity Search",
      "<30s Review Latency"
    ],
    github: "https://github.com/ansh62949/prsense-ai",
    demo: "https://prsense-ai.vercel.app",
    problem: "Pull request reviews often lack codebase-wide contextual understanding, leading to missed security flaws, architectural inconsistencies, and slow feedback cycles.",
    solution: "PRSense AI automatically intercepts GitHub Pull Requests via Webhooks, queries stored repository context using pgvector cosine similarity, and orchestrates specialized LangGraph agents to generate grounded code reviews.",
    architecture: "GitHub PR Webhook → Java Spring Boot Orchestrator → FastAPI AI Pipeline → pgvector Retrieval → LangGraph Multi-Agent Audit → Grounded GitHub Inline Comments",
    features: [
      "Real-time GitHub Webhook integration for instant PR event interception",
      "Repository indexing with token-efficient code chunking and 1536-dim vector embeddings",
      "Concurrent audit agents specializing in security, design patterns, styling, and test coverage",
      "Context-aware codebase semantic search utilizing pgvector HNSW indexing",
      "Automated cost telemetry and execution duration tracking",
      "PDF audit report generation formatted for corporate distribution"
    ],
    photoId: "1618401471353"
  },
  {
    id: "flowinbox-ai",
    title: "FlowInbox AI",
    positioning: "AI-Native Email & Workflow Automation Workspace",
    shortDesc: "AI-native workspace where users and autonomous agents collaborate on email triage, calendar scheduling, and workflow automation backed by Kubernetes self-healing infra.",
    flagship: true,
    category: ["AI", "Infrastructure"],
    architectureBadge: "FastAPI + LangGraph + MCP + Hybrid RAG + Kubernetes + CI/CD",
    tech: ["FastAPI", "Python 3.11", "LangGraph", "MCP", "PostgreSQL", "Redis", "Qdrant", "Docker", "Kubernetes", "GitHub Actions", "GHCR", "React 18", "Vite"],
    metrics: [
      "Reciprocal Rank Fusion RAG",
      "Demonstrated Pod Self-Healing",
      "16 Passing Pytest Tests"
    ],
    github: "https://github.com/ansh62949/FlowInbox",
    problem: "Modern developers and teams drown in unstructured inbox communications, manual calendar scheduling, and fragmented workflow tools, leading to delayed responses and missed tasks.",
    solution: "FlowInbox AI combines LangGraph StateGraph agents, Model Context Protocol (MCP) integrations, dense vector + full-text hybrid retrieval, and strict human-in-the-loop approvals in a containerized, Kubernetes-deployed architecture.",
    architecture: "React + Vite SPA → FastAPI Async Backend → LangGraph StateGraph Engine → MCP Protocol → Qdrant Vector + PostgreSQL FTS (Reciprocal Rank Fusion) → Docker Compose & Kubernetes Self-Healing Cluster → GitHub Actions CI/CD to GHCR",
    features: [
      "Full Gmail & Google Calendar synchronization via Google OAuth 2.0",
      "Email intent analysis, sender context scoring, sentiment detection, and urgency ranking",
      "Hybrid Retrieval RAG combining Qdrant dense vector search with PostgreSQL Full-Text Search using Reciprocal Rank Fusion (RRF)",
      "Strict Human-in-the-Loop approval workflows for consequential actions (email dispatch & calendar creation)",
      "Model Context Protocol (MCP) support with stdio and HTTP/SSE transports for extensible tool integration",
      "Needs Reply Engine & Automated Follow-up Tracking Workflows",
      "Production-oriented Kubernetes deployment featuring health probes, persistent volume claims, and demonstrated pod self-healing"
    ],
    caseStudy: {
      problem: "Inbox overload creates major productivity drag. Teams need an AI-native workspace that safely reads thread context, drafts responses, and manages calendar events without making unauthorized state changes.",
      retrievalArchitecture: "FlowInbox uses a dual-engine hybrid retrieval pipeline. Email content is indexed simultaneously into Qdrant for dense semantic embeddings and PostgreSQL FTS for exact lexical keyword matching. Results are merged using Reciprocal Rank Fusion (RRF) to maximize relevance.",
      safetyDesign: "To protect user communications, consequential operations like sending an email (`send_email`) or creating a calendar invite (`create_calendar_event`) require explicit Human-in-the-Loop approval before execution.",
      infrastructure: "Deployed on Kubernetes (kind) with separate deployments for Frontend SPA, FastAPI Backend API, PostgreSQL, Redis, and Qdrant vector database. Includes liveness/readiness probes and demonstrated self-healing pod replacement when backend containers are terminated.",
      cicd: "Automated GitHub Actions CI/CD pipeline running backend Pytest test suites (16 tests passing), Vite frontend production build, multi-architecture Docker Buildx image compilation with layer caching, and Git SHA / latest image tagging pushed to GitHub Container Registry (GHCR)."
    },
    photoId: "1557200134-90327ee9fafa"
  },
  {
    id: "herride",
    title: "HerRide",
    positioning: "Real-Time Women-Centric Ride-Hailing Platform",
    shortDesc: "Real-time women-only ride-hailing MVP leveraging Java 21, Spring Boot 3.5, Redis GEO 5km radial driver search, Kafka event stream decoupling, and STOMP WebSockets.",
    flagship: true,
    category: ["Backend", "Distributed Systems"],
    architectureBadge: "Java 21 + Spring Boot 3.5 + Kafka + Redis GEO + WebSockets",
    tech: ["Java 21", "Spring Boot 3.5", "Spring Security", "Kafka", "Redis GEO", "PostgreSQL", "WebSockets", "STOMP", "JWT", "Prometheus", "Grafana", "Docker"],
    metrics: [
      "5km Radial Search",
      "~8s Location Telemetry",
      "4 Kafka Topics Decoupled"
    ],
    github: "https://github.com/ansh62949/Herride",
    demo: "https://herride-six.vercel.app/",
    problem: "Passenger safety for women in urban transport requires instant driver location tracking, verified driver matching, rapid emergency response, and low-latency real-time communication.",
    solution: "HerRide solves this with a real-time event-driven architecture using Spring Boot 3.5, Redis GEO spatial indexing for sub-second driver matching within a 5km radius, Kafka event queues for emergency handling, and STOMP WebSockets for bilateral live updates.",
    architecture: "Spring Boot 3.5 API Gateway → Redis GEO Spatial Store (GEORADIUS 5km) → Apache Kafka Event Bus (4 Topics for SOS & Ride Events) → STOMP WebSockets → Prometheus Metrics & Grafana Observability Dashboard",
    features: [
      "Frictionless OTP authentication with female passenger and driver registration checks",
      "Proximity-based driver matching within a 5km radius using Redis GEO spatial indexing",
      "Real-time ~8-second driver location updates broadcasted over STOMP WebSockets",
      "Kafka event pipeline for decoupled, high-priority SOS emergency events",
      "Single-tap emergency trigger alerting trusted contacts with live tracking link via SMS",
      "Prometheus metrics collection and Grafana telemetry dashboard integration"
    ],
    photoId: "1549317661-bd32c8ce0db2"
  },
  {
    id: "ai-mock-interview-coach",
    title: "AI Mock Interview Coach",
    positioning: "Multi-Agent AI Interview Platform",
    shortDesc: "Stateful multi-agent technical interview coach built with Python, LangGraph StateGraph workflows, strict Pydantic structured output validation, and 13 passing tests.",
    flagship: true,
    category: ["AI"],
    architectureBadge: "Python + LangGraph StateGraph + 6 Agents + Pydantic",
    tech: ["Python", "LangGraph", "StateGraph", "Multi-Agent Systems", "Pydantic", "Structured Outputs", "LLMs", "Pytest"],
    metrics: [
      "6-Agent StateGraph Workflow",
      "13 Passing Automated Tests",
      "Adaptive Questioning Engine"
    ],
    github: "https://github.com/ansh62949",
    problem: "Generic interview chatbots provide superficial evaluation without structural feedback, adaptive question progression, or multi-dimensional scoring.",
    solution: "AI Mock Interview Coach implements a stateful 6-agent LangGraph workflow that dynamically adjusts question difficulty, validates responses using strict Pydantic schemas, and evaluates candidate performance across technical domains.",
    architecture: "StateGraph Stateful Engine → 6 Specialized Agents (Interviewer, Evaluator, Difficulty Router, Feedback Synthesizer, Question Generator, System Auditor) → Pydantic Schema Validation → Automated Test Suite (13 passing tests)",
    features: [
      "Stateful 6-agent LangGraph orchestration tracking candidate interaction context",
      "Adaptive difficulty progression based on real-time answer quality evaluation",
      "Strict Pydantic schema enforcement guaranteeing structured JSON feedback outputs",
      "Multi-dimensional scoring across problem solving, system design, and communication",
      "Comprehensive test coverage with 13 automated tests passing in Pytest"
    ],
    photoId: "1516321318423-f06f85e504b3"
  },
  {
    id: "codesphere",
    title: "CodeSphere",
    positioning: "Distributed Online Judge & Code Execution Platform",
    shortDesc: "Scalable coding environment featuring Docker container isolation, RabbitMQ submission queue offloading, and Redis caching.",
    flagship: false,
    category: ["Backend", "Distributed Systems"],
    tech: ["Java", "Spring Boot", "Docker", "RabbitMQ", "Redis", "MySQL"],
    metrics: ["1000+ Concurrent Executions", "Docker Sandbox Isolation", "40% Reduced Cache Latency"],
    github: "https://github.com/anshpathak/codesphere",
    architecture: "Spring Boot Gateway → RabbitMQ Queue → Worker Nodes running Isolated Docker Containers → Redis Caching",
    features: [
      "Secure Docker container sandbox isolation for untrusted code execution",
      "Multi-language support for Java, C++, and Python",
      "Asynchronous worker queue processing using RabbitMQ",
      "Redis caching layer reducing database hit rates"
    ],
    photoId: "1558494949-ef010cbdcc31"
  },
  {
    id: "event-ticketing",
    title: "Event Ticketing System",
    positioning: "High-Throughput Event Management & Ticketing Backend",
    shortDesc: "Scalable microservices backend providing high concurrency ticketing, paginated discovery, and transaction control.",
    flagship: false,
    category: ["Backend"],
    tech: ["Java", "Spring Boot", "PostgreSQL", "Microservices", "REST APIs"],
    metrics: ["5+ Scalable APIs", "99.9% Target Uptime", "<200ms API Latency"],
    github: "https://github.com/ansh62949/EventTicketingPlatform",
    demo: "https://eventticketingplatform-1.onrender.com",
    architecture: "Layered Spring Boot microservices with decoupled Auth, Ticketing, and Notification services.",
    features: [
      "High-concurrency ticket availability tracking and seat reservation locks",
      "Optimized PostgreSQL queries with composite indexing",
      "Automated transactional email confirmations",
      "Admin analytics endpoints for event sales tracking"
    ],
    photoId: "1551434678-e076c223a692"
  },
  {
    id: "civicshield",
    title: "CivicShield",
    positioning: "AI Civic Intelligence & Geospatial Platform",
    shortDesc: "AI NLP system categorizing municipal complaints paired with real-time geospatial departmental tracking.",
    flagship: false,
    category: ["AI", "Backend"],
    tech: ["Python", "NLP", "React", "Microservices", "PostgreSQL"],
    metrics: ["92% NLP Accuracy", "Real-Time Tracking", "3x Response Speed"],
    github: "https://github.com/anshpathak/civicshield",
    demo: "https://civicshield-ten.vercel.app/",
    architecture: "Python NLP Classification Microservice → REST API Gateway → PostgreSQL Spatial Store → React Geospatial Dashboard",
    features: [
      "Automated NLP complaint classification and urgency scoring",
      "Geospatial heatmap visualization for municipal department routing",
      "Public transparency portal for complaint resolution tracking"
    ],
    photoId: "1518770660439-4636190af475"
  },
  {
    id: "pakson-ml",
    title: "Parkinson's Early Detection AI",
    positioning: "Acoustic ML Model for Parkinson's Disease Risk Scoring",
    shortDesc: "Machine learning pipeline extracting voice acoustic features (Pitch, Jitter, Shimmer, MFCCs) for early risk scoring.",
    flagship: false,
    category: ["AI"],
    tech: ["Python", "Scikit-Learn", "MFCCs", "Random Forest", "Librosa"],
    metrics: ["UCI Benchmark Dataset", "Acoustic Feature Extraction", "90%+ Model Accuracy"],
    github: "https://github.com/ansh62949/pakson-ml",
    architecture: "Audio Upload → Librosa Preprocessing & Feature Extraction → Random Forest Inference Model → Risk Score API",
    features: [
      "Voice recording feature extraction (MFCCs, pitch variation, shimmer)",
      "Random Forest & SVM model training with cross-validation",
      "Real-time Parkinson's disease risk scoring"
    ],
    photoId: "1530210124550-912dc1381cb8"
  },
  {
    id: "multiclient-chat",
    title: "Multi-Client TCP Chat Server",
    positioning: "Multithreaded Java Network Chat Server",
    shortDesc: "High-performance multithreaded chat server implemented in Java using low-level sockets and concurrent thread pools.",
    flagship: false,
    category: ["Backend"],
    tech: ["Java", "Multithreading", "Socket Programming", "TCP/IP"],
    metrics: ["Concurrent Connections", "Low Latency TCP", "Broadcast Pipelines"],
    github: "https://github.com/ansh62949/MultiClientChatServer2",
    architecture: "Java ServerSocket Listener → Dedicated Client Connection Threads → Thread Pool Task Synchronization",
    features: [
      "Multithreaded client socket connection management",
      "Asynchronous broadcast message propagation across active clients",
      "Graceful thread termination and resource cleanup"
    ],
    photoId: "1515378791036-0648a3ef77b2"
  },
  {
    id: "train-booking",
    title: "Train Reservation Backend",
    positioning: "RESTful Railway Reservation System Clone",
    shortDesc: "Comprehensive Spring Boot backend replicating core railway reservation workflows with strict database validation.",
    flagship: false,
    category: ["Backend"],
    tech: ["Java 17", "Spring Boot", "MySQL", "Spring Data JPA"],
    metrics: ["IRCTC Domain Clone", "N-Tier Architecture", "JPA Relational Mapping"],
    github: "https://github.com/ansh62949/train-booking-system",
    architecture: "N-Tier Spring Boot Architecture: Controller → Service Layer → Repository → MySQL Database",
    features: [
      "User authentication and ticket reservation workflows",
      "Train route schedule management and real-time seat availability validation",
      "Ticket cancellation and refund status calculation"
    ],
    photoId: "1532103054090-334e6e60df43"
  }
];

export const certifications = [
  {
    title: "Claude Code in Action",
    issuer: "Claude Academy",
    credential: "Course Completion Badge",
    date: "September 23, 2026",
    skills: ["Claude Code CLI", "Agentic Coding", "Developer Workflows", "AI Pair Programming"],
    link: ""
  },
  {
    title: "Hugging Face Agents Course",
    issuer: "Hugging Face",
    credential: "Certificate of Excellence",
    date: "September 21, 2026",
    skills: ["AI Agents", "LangGraph", "Tool Use", "Multi-Agent Workflows"],
    link: ""
  },
  {
    title: "IEEE Vihaan 9.0 Hackathon",
    issuer: "IEEE DTU",
    credential: "Certificate of Participation & Performance",
    date: "2026",
    skills: ["System Design", "Rapid Prototyping", "Backend Engineering"],
    link: "vihaan_certificate.png"
  },
  {
    title: "Unstop Hackathon Distinction",
    issuer: "Unstop",
    credential: "Verified Competition Credential",
    date: "2026",
    skills: ["Competitive Programming", "System Architecture"],
    link: "https://unstop.com/certificate-preview/b10aefe6-c889-47fd-91c2-a15b18ac9fe6"
  }
];

export const achievements = [
  {
    title: "300+ DSA Problems Solved",
    category: "Algorithms",
    desc: "Proficient in Data Structures & Algorithms with 300+ solved problems across LeetCode & competitive platforms."
  },
  {
    title: "Hack the Globe 2026 Qualifier",
    category: "Hackathon",
    desc: "Advanced to Round 2 of Hack the Globe 2026 competing with global engineering teams."
  },
  {
    title: "Walmart SWE Virtual Experience",
    category: "Engineering Experience",
    desc: "Completed Walmart Software Engineering virtual experience program focused on backend & data structures."
  },
  {
    title: "HPE SWE Virtual Experience",
    category: "Engineering Experience",
    desc: "Completed Hewlett Packard Enterprise Software Engineering virtual program covering software development lifecycle."
  }
];
