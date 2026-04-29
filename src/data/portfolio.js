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
    category: "Backend",
    skills: ["Java", "Spring Boot", "REST APIs", "Microservices"]
  },
  {
    category: "AI/ML",
    skills: ["Python", "Pandas", "NumPy", "PyTorch"]
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis"]
  },
  {
    category: "Tools",
    skills: ["Docker", "RabbitMQ", "AWS"]
  }
];

export const projects = [
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
    architecture: "Microservices-based architecture with independent services for Auth, Ticketing, and Notification."
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
    architecture: "AI engine integrated via REST with a distributed microservices network for real-time data flow."
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
    architecture: "Event-driven architecture using RabbitMQ for communication between the API gateway and worker nodes."
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
    architecture: "Python-based ML pipeline with integrated feature extraction using Librosa and Scikit-learn."
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
    architecture: "Single Page Application (SPA) built with React 19 and modern CSS Flexbox/Grid."
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
    architecture: "Client-Server model with a dedicated Thread per connection for asynchronous message processing."
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
    architecture: "N-tier architecture with clear separation between Controller, Service, and Repository layers."
  }
];
