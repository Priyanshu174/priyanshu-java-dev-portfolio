// All projects. To add one, append a new object. Leave liveUrl/githubUrl as null to hide the button.
export type Project = {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string | null;
  liveUrl: string | null;
  image: string | null;
};

export const projects: Project[] = [
  {
    title: "PulseChat",
    description:
      "Full-stack real-time AI chat application built with React, TypeScript, Node.js, Express, and MongoDB. Supports password and email OTP authentication, signup email verification, Socket.IO messaging and presence, typing indicators, notifications, multi-device online status, message starring and deletion, user blocking, AWS S3 pre-signed image uploads, and streamed Gemini AI responses.",
    technologies: ["Socket.IO", "AWS S3", "Gemini AI"],
    githubUrl: null,
    liveUrl: null,
    image: "/images/projects/PulseChat.png",
  },
  {
    title: "Book-Heaven",
    description:
      "Full-stack book store with role-based admin access for managing books, orders, and user activity. Users can browse books, add to cart and favorites, and complete purchases. Includes JWT authentication, bcrypt, and Redux state management.",
    technologies: ["React.js", "Node.js", "Express", "MongoDB", "Redux", "JWT"],
    githubUrl: "https://github.com/Priyanshu174/My-BookStore-frontend",
    liveUrl: "https://my-book-store-frontend-7gmr7ld0a-priyanshus-projects-f4f4f618.vercel.app/",
    image: "/images/projects/Book_Heaven.jpg",
  },
  {
    title: "Social-Media",
    description:
      "Full-stack social media application with JWT authentication, bcrypt password encryption, and CRUD operations for posts, likes, and friend management. Uses React hooks for state and multer for file uploads. Deployed on Vercel and Render.",
    technologies: ["React.js", "Node.js", "Express", "MongoDB", "JWT", "Multer"],
    githubUrl: "https://github.com/Priyanshu174/MERN-SocialMediaApp",
    liveUrl: "https://mern-social-media-e02ndypf6-priyanshus-projects-f4f4f618.vercel.app/",
    image: "/images/projects/Social_Media.png",
  },
  {
    title: "E-commerce",
    description:
      "Front-end e-commerce website with home, contact, login, signup, discount, and flash deal sections, plus a cart that updates in real time. Built with React hooks and deployed on GitHub Pages.",
    technologies: ["React.js"],
    githubUrl: "https://github.com/Priyanshu174/Ecommerce-react",
    liveUrl: "https://priyanshu174.github.io/Ecommerce-react/",
    image: "/images/projects/Ecommerce_react.png",
  },
  {
    title: "Chat-App",
    description:
      "Full-stack chat application with real-time messaging over Socket.IO, JWT authentication, bcrypt, Multer file uploads, an emoji picker, and profile management. Deployed on Vercel and Render.",
    technologies: ["React.js", "Node.js", "Express", "MongoDB", "Socket.IO", "Multer"],
    githubUrl: "https://github.com/Priyanshu174/Mern_Chat_App_Frontend",
    liveUrl: "https://mern-chat-app-frontend-leut7u4z0-priyanshus-projects-f4f4f618.vercel.app/",
    image: "/images/projects/Chat_App.jpg",
  },
  {
    title: "E-Fashion",
    description:
      "Front-end e-commerce website with home, contact, login, signup, discount, and flash deal sections, plus a cart that updates in real time. Deployed on GitHub Pages.",
    technologies: ["React.js"],
    githubUrl: "https://github.com/Priyanshu174/E_Commerce_Website",
    liveUrl: "https://priyanshu174.github.io/E_Commerce_Website/",
    image: "/images/projects/Ecommerce.png",
  },
  {
    title: "Quiz_Java",
    description:
      "Interactive Java quiz application with a Swing GUI: user login, rules screen, multiple-choice questions, lifelines, a countdown timer, and personalised scorecards.",
    technologies: ["Java", "Swing"],
    githubUrl: "https://github.com/Priyanshu174/Quiz_Application_Java",
    liveUrl: null,
    image: "/images/projects/Quiz_Java.png",
  },
];
