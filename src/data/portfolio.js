export const personalData = {
  name: "Ansh Pathak",
  role: "Software Engineer | Backend Developer | AI Enthusiast",
  summary: "Software Engineering undergraduate with hands-on experience in backend system design, RESTful API development, and scalable microservices architectures. Proficient in Java, Spring Boot, multithreading, and distributed systems.",
  education: {
    institution: "GL Bajaj Institute of Technology and Management",
    degree: "B.Tech CSE (AI)",
    gpa: "7.3"
  },
  contact: {
    email: "ansh62949@gmail.com",
    phone: "9984130195",
    linkedin: "https://www.linkedin.com/in/anshpathak/",
    github: "https://github.com/anshpathak"
  }
};

export const techStack = [
  {
    name: "Java",
    capabilities: "OOP, Multithreading",
    level: "Advanced",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
  },
  {
    name: "Spring Boot",
    capabilities: "REST APIs, Microservices",
    level: "Advanced",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg"
  },
  {
    name: "API Design",
    capabilities: "Pagination, Filtering, Optimization",
    level: "Advanced",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg"
  },
  {
    name: "System Design",
    capabilities: "Layered Architecture",
    level: "Intermediate",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg"
  },
  {
    name: "Python",
    capabilities: "Data Processing",
    level: "Advanced",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
  },
  {
    name: "NLP",
    capabilities: "Text Classification",
    level: "Intermediate",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg"
  },
  {
    name: "Pandas & NumPy",
    capabilities: "Feature Engineering",
    level: "Intermediate",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg"
  },
  {
    name: "PyTorch",
    capabilities: "Model Training Basics",
    level: "Beginner",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg"
  },
  {
    name: "PostgreSQL",
    capabilities: "Query Optimization, Indexing",
    level: "Advanced",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
  },
  {
    name: "MySQL",
    capabilities: "Relational Design",
    level: "Intermediate",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
  },
  {
    name: "MongoDB",
    capabilities: "NoSQL Schema Design",
    level: "Intermediate",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
  },
  {
    name: "Redis",
    capabilities: "Caching, Optimization",
    level: "Beginner",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg"
  },
  {
    name: "Docker",
    capabilities: "Containerization, Sandbox",
    level: "Intermediate",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
  },
  {
    name: "RabbitMQ",
    capabilities: "Async Processing, Queues",
    level: "Intermediate",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rabbitmq/rabbitmq-original.svg"
  },
  {
    name: "AWS",
    capabilities: "EC2, S3 – Basics",
    level: "Beginner",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
  },
  {
    name: "Git",
    capabilities: "Version Control",
    level: "Advanced",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
  },
  {
    name: "FastAPI",
    capabilities: "Python Backend, Async APIs",
    level: "Intermediate",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg"
  },
  {
    name: "Apache Kafka",
    capabilities: "Event Streaming, Pub-Sub",
    level: "Intermediate",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg"
  },
  {
    name: "WebSockets",
    capabilities: "STOMP, Real-time Chat",
    level: "Intermediate",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg"
  },
  {
    name: "pgvector",
    capabilities: "Vector Embeddings, RAG",
    level: "Intermediate",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
  }
];

export const projects = [
  {
    id: "prsense-ai",
    title: "PRSense",
    shortDesc: "Repository analysis and automated pull request review platform using vector RAG search.",
    description: "Developed a decoupled codebase audit and review orchestrator. Integrates with GitHub Webhooks to intercept PR events, query nearest codebase context using pgvector and cosine similarity search, and concurrently execute automated agents to audit changes for security, architectural integrity, and code style concerns.",
    tech: ["Java", "Spring Boot", "FastAPI", "Python", "pgvector", "PostgreSQL"],
    metrics: ["1536-Dim Embeds", "Cos Similarity", "<30s Review"],
    github: "https://github.com/ansh62949/prsense-ai",
    demo: "https://prsense-ai.vercel.app",
    features: [
      "Real-time GitHub webhook PR review execution",
      "Repository indexing with token-efficient chunking & embeddings",
      "Concurrent audit agents for security, design patterns, styling, and test coverage",
      "Context-aware codebase semantic search & chat using pgvector",
      "Automated cost telemetry and execution time dashboard tracking",
      "PDF audit report generation in clean printable corporate layouts"
    ],
    architecture: "Decoupled architecture utilizing a Java Spring Boot orchestrator for lifecycle, PostgreSQL/pgvector for memory, and FastAPI / Python analysis service for LLM tasks.",
    photoId: "1618401471353"
  },
  {
    id: "herride",
    title: "HerRide",
    shortDesc: "A women-only ride-hailing MVP concept focused on urban safety in India.",
    description: "Designed and built an early-stage startup MVP for female passenger safety. Leveraged Spring Boot and STOMP WebSockets for real-time bilateral chats and driver-passenger matching, utilizing Redis spatial indexing (GEOADD/GEORADIUS) for sub-second nearby searches, and Kafka event bus for decoupled safety alarms.",
    tech: ["Java", "Spring Boot", "Redis", "Apache Kafka", "PostgreSQL", "React", "Zustand"],
    metrics: ["100% Female Drivers", "5km Radius Match", "<8s Telemetry"],
    github: "https://github.com/ansh62949/Herride",
    demo: "https://herride-six.vercel.app/",
    features: [
      "Frictionless mobile OTP authentication & female-only registration checks",
      "Proximity-based matching query with 5km radial search using Redis GEO indices",
      "Decoupled asynchronous notification pipelines using Apache Kafka topics",
      "Single-tap SOS emergency trigger alerting trusted contacts via SMS with location link",
      "Real-time websocket STOMP chat logs cached in-memory and admin dispatch board updates",
      "Local payment gateway sandboxing simulating Razorpay checkout fallback"
    ],
    architecture: "Microservices routing built with Spring Boot, STOMP WebSockets, Kafka event handlers, Redis geographical store, and React frontend.",
    photoId: "1549317661-bd32c8ce0db2"
  },
  {
    id: "codesphere",
    title: "CodeSphere – Distributed Coding Platform",
    shortDesc: "Scalable coding environment with Docker sandboxing and async processing.",
    description: "Architected a distributed coding platform utilizing microservices and Docker sandboxing for secure code execution. Implemented RabbitMQ for asynchronous processing of submission queues and Redis for intelligent caching, significantly reducing load on core services.",
    tech: ["Docker", "RabbitMQ", "Redis", "Spring Boot", "MySQL"],
    metrics: ["1000+ Concurrent Runs", "Isolate Sandbox", "40% Faster Cache"],
    github: "https://github.com/anshpathak/codesphere",
    features: [
      "Secure Docker container isolation",
      "Multi-language support (C++, Java, Python)",
      "Async execution queue management",
      "Real-time leaderboard updates"
    ],
    architecture: "Event-driven architecture using RabbitMQ for communication between the API gateway and worker nodes.",
    photoId: "1558494949-ef010cbdcc31"
  },
  {
    id: "event-ticketing",
    title: "Event Ticketing Platform",
    shortDesc: "A high-performance backend system for real-time event management and ticketing.",
    description: "Developed a comprehensive backend system with 5+ specialized APIs. Leveraged Java and Spring Boot to handle high concurrency and optimized PostgreSQL queries for sub-second response times in data-heavy operations. The architecture is designed to be fully scalable using microservices patterns.",
    tech: ["Java", "Spring Boot", "PostgreSQL", "Microservices"],
    metrics: ["5+ Scalable APIs", "99.9% Uptime", "<200ms Latency"],
    github: "https://github.com/anshpathak/event-ticketing",
    demo: "https://eventticketingplatform-1.onrender.com",
    features: [
      "Real-time ticket availability tracking",
      "Secure payment integration gateway",
      "Automated email confirmation service",
      "Admin dashboard for event analytics"
    ],
    architecture: "Microservices-based architecture with independent services for Auth, Ticketing, and Notification.",
    photoId: "1551434678-e076c223a692"
  },
  {
    id: "civicshield",
    title: "CivicShield – AI Civic Intelligence Platform",
    shortDesc: "AI-driven platform for analyzing civic issues and real-time geospatial tracking.",
    description: "Built an advanced AI NLP classification system to categorize and prioritize civic complaints. Integrated a real-time geospatial dashboard using microservices architecture to provide city officials with actionable insights. This project streamlines urban management through automation.",
    tech: ["Python", "NLP", "React", "Microservices", "PostgreSQL"],
    metrics: ["92% NLP Accuracy", "Real-time Tracking", "3x Faster Response"],
    github: "https://github.com/anshpathak/civicshield",
    demo: "https://civicshield-ten.vercel.app/",
    features: [
      "AI-powered complaint categorization",
      "Interactive geospatial heatmaps",
      "Automated routing to local departments",
      "Public transparency portal"
    ],
    architecture: "AI engine integrated via REST with a distributed microservices network for real-time data flow.",
    photoId: "1518770660439-4636190af475"
  },
  {
    id: "pakson-ml",
    title: "AI Parkinson's Detection",
    shortDesc: "Machine learning prototype for early detection of Parkinson's using voice analysis.",
    description: "Developed an AI prototype capable of predicting Parkinson's disease risk from voice recordings. The system extracts critical acoustic features like Pitch, Jitter, and Shimmer, feeding them into a trained Random Forest model for high-accuracy inference.",
    tech: ["Python", "Machine Learning", "MFCCs", "Random Forest"],
    metrics: ["UCI Dataset", "Voice Analysis", "90%+ Accuracy"],
    github: "https://github.com/ansh62949/pakson-ml",
    features: [
      "Voice recording feature extraction",
      "Random Forest / SVM model inference",
      "Real-time risk scoring",
      "Preprocessing for noise reduction"
    ],
    architecture: "Python-based ML pipeline with integrated feature extraction using Librosa and Scikit-learn.",
    photoId: "1530210124550-912dc1381cb8"
  },
  {
    id: "my-world-tour",
    title: "My World Tour",
    shortDesc: "Premium React 19 travel platform with high-fidelity UI/UX and smooth animations.",
    description: "Built a modern, fully responsive travel website using React 19. Focused on premium aesthetics with pure CSS micro-interactions, ensuring a professional user experience without external animation libraries.",
    tech: ["React 19", "JavaScript", "CSS3", "React Router"],
    metrics: ["React 19", "Responsive", "Pure CSS Motion"],
    github: "https://github.com/ansh62949/my-world-tour",
    features: [
      "Dynamic travel destination cards",
      "Smooth CSS-only transitions",
      "Mobile-first responsive layout",
      "Component-based architecture"
    ],
    architecture: "Single Page Application (SPA) built with React 19 and modern CSS Flexbox/Grid.",
    photoId: "1488646953014-85cb44e25828"
  },
  {
    id: "multiclient-chat",
    title: "Multi-Client Chat Server",
    shortDesc: "Robust multithreaded chat server implemented in Java for real-time communication.",
    description: "Architected a scalable chat server using Java Sockets and multithreading. Enables multiple concurrent clients to communicate in real-time within a unified group chat environment with low latency.",
    tech: ["Java", "Multi-threading", "Socket Programming", "TCP/IP"],
    metrics: ["Concurrent Support", "TCP/IP", "Real-time Messaging"],
    github: "https://github.com/ansh62949/MultiClientChatServer2",
    features: [
      "Multithreaded client handling",
      "Socket-based communication",
      "Broadcast message propagation",
      "Thread pool management"
    ],
    architecture: "Client-Server model with a dedicated Thread per connection for asynchronous message processing.",
    photoId: "1515378791036-0648a3ef77b2"
  },
  {
    id: "train-booking",
    title: "Train Booking System",
    shortDesc: "RESTful IRCTC backend clone built with Spring Boot and MySQL.",
    description: "Developed a comprehensive backend for a train reservation system. Implemented core workflows for user registration, train schedule management, and ticket lifecycle (booking/cancellation) with strict validation.",
    tech: ["Java 17", "Spring Boot", "MySQL", "Spring Data JPA"],
    metrics: ["IRCTC Clone", "REST API", "JPA Persistence"],
    github: "https://github.com/ansh62949/train-booking-system",
    features: [
      "RESTful API design",
      "MySQL database persistence",
      "Complex cancellation workflows",
      "Real-time availability checks"
    ],
    architecture: "N-tier architecture with clear separation between Controller, Service, and Repository layers.",
    photoId: "1532103054090-334e6e60df43"
  }
];
