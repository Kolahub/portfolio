import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// API base URL - will be replaced by Vercel's deployment URL in production
const API_URL =
  process.env.NODE_ENV === "production"
    ? "https://your-vercel-deployment-url.vercel.app/api"
    : "http://localhost:5000/api";

// Async thunks
export const fetchAllProjects = createAsyncThunk(
  "projects/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_URL}/projects`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchFeaturedProjects = createAsyncThunk(
  "projects/fetchFeatured",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_URL}/projects/featured`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchProjectById = createAsyncThunk(
  "projects/fetchById",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_URL}/projects/${id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Sample project data for fallback
const sampleProjects = [
  {
    id: "project-1",
    title: "Invoice Web App",
    description:
      "A full-stack invoice management application built with the MERN stack. Includes dynamic invoice creation, status updates, and persistent theme state.",
    fullDescription:
      "The Invoice App is a full-stack application built with MongoDB, Express, React, and Node.js. I used React Router for client-side routing and TanStack Query to handle data fetching, caching, and syncing. The app allows users to create, edit, and delete invoices, with state management ensuring responsiveness. It includes theme state persistence without authentication.",
    keyFeatures: [
      "CRUD operations for invoices",
      "Filter invoices by status (Paid, Pending, Draft)",
      "TanStack Query for efficient data handling",
      "Theme toggle with MERN persistence",
      "Responsive design across all screen sizes",
    ],
    challenges:
      "A major challenge was maintaining client-side state in sync with the server using TanStack Query, especially while keeping the theme persistent across reloads without using authentication.",
    image: {
      img1: "/images/invoice1.jpg",
      img2: "/images/invoice2.jpg",
      img3: "/images/invoice3.jpg",
    },
    technologies: ["React.js", "MongoDB", "Express", "Node.js", "TanStack Query", "Tailwind CSS"],
    github: "https://github.com/Kolahub/invoice-web-app",
    liveDemo: "https://invoice-web-app-chi.vercel.app/",
    category: "Web App",
    date: "2025",
    client: "Personal Project",
    featured: true,
  },

  {
    id: "project-2",
    title: "DevJobs Web App",
    description:
      "A job board web app built with Next.js, featuring job listings, detailed job views, and filtering by location and role. Designed to be fully responsive and accessible.",
    fullDescription:
      "DevJobs is a frontend project I built using Next.js to practice server-side rendering and file-based routing. It showcases job listings with detailed views and allows users to filter jobs by title, location, and contract type. I focused on dynamic routing, responsive layouts, and integrating mock JSON data efficiently.",
    keyFeatures: [
      "Built with Next.js for static generation and routing",
      "Dynamic filtering by job role, location, and contract type",
      "Responsive layout for desktop and mobile devices",
      "Theme toggle with persisted state using localStorage",
      "Animated UI using Framer Motion",
    ],
    challenges:
      "Managing filter state efficiently across components and ensuring accurate job filtering.",
    image: {
      img1: "/images/devjobs1.jpg",
      img2: "/images/devjobs2.jpg",
      img3: "/images/devjobs3.jpg",
    },
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/Kolahub/job-board",
    liveDemo: "https://devjobs-kola.vercel.app/",
    category: "Web App",
    date: "2025",
    client: "Personal Project",
    featured: true,
  },
  
  {
    id: "project-3",
    title: "Audiophile e-commerce website",
    description:
      "A fully functional e-commerce website for audio products with features like product browsing, shopping cart, and checkout process. Built with React and styled with Tailwind CSS.",
    fullDescription:
      "The Audiophile e-commerce website is a comprehensive platform for audio enthusiasts to browse and purchase high-quality audio gear. Built with React and styled with Tailwind CSS, the website is both visually appealing and highly functional.",
    keyFeatures: [
      "Complete product catalog with detailed product pages",
      "Shopping cart functionality",
      "Form validation",
      "Order summary with pricing breakdown",
    ],
    challenges:
      "Implementing a robust e-commerce experience required careful state management using Context API to handle the shopping cart. The checkout process was also challenging to ensure a good balance between user experience and data integrity.",
    image: {
      img1: "/images/audioimg1.png",
      img2: "/images/audioimg2.png",
      img3: "/images/audioimg3.png",
    },
    technologies: ["React.js", "Tailwind CSS", "Context API"],
    github: "https://github.com/Kolahub/Audiophile-e-commerce-web",
    liveDemo: "https://audiophile-e-commerce-web.vercel.app/",
    category: "E-Commerce",
    date: "2024",
    client: "Personal Project",
    featured: true,
  },
  {
    id: "project-4",
    title: "Entertainment web app",
    description:
      "A full-stack entertainment web app with features like bookmarking, search functionality, and responsive design. The app allows users to browse movies and TV series with an intuitive interface.",
    fullDescription:
      "This Entertainment web app is a comprehensive platform for movie and TV show enthusiasts. I built it to allow users to browse through various media content, bookmark their favorites, and search for specific titles. The application features a responsive design to ensure optimal viewing experience across all devices, from mobile phones to desktop computers.",
    keyFeatures: [
      "Responsive design for all device sizes",
      "Search functionality to easily find movies and TV shows",
      "Bookmark feature to save favorites for later viewing",
      "Category filtering (trending, movies, TV series)",
      "Data persistence using Firebase backend",
    ],
    challenges:
      "One of the main challenges was implementing an efficient search algorithm that could filter through large amounts of content quickly. I also had to ensure the bookmarking system synchronized properly with the Firebase backend to maintain a consistent user experience across sessions.",
    image: {
      img1: "/images/movieimg1.png",
      img2: "/images/movieimg2.png",
      img3: "/images/movieimg3.png",
    },
    technologies: ["React.js", "Tailwind CSS", "Firebase"],
    github: "https://github.com/Kolahub/entertainment-website-app",
    liveDemo: "https://entertainment-website-app-kola.vercel.app/",
    category: "Web App",
    date: "2024",
    client: "Personal Project",
    featured: false,
  },
  {
    id: "project-5",
    title: "Todo Web App",
    description:
      "A full-stack Todo app built with JavaScript and Firebase, featuring CRUD operations and a responsive, theme-toggle interface.",
    fullDescription:
      "This Todo web app allows users to add, delete, update, and filter todos. It supports drag-and-drop reordering and saves todos using Firebase, ensuring data persists across sessions. The app features a light/dark mode toggle and responsive design for seamless use on all devices.",
    keyFeatures: [
      "Add new todos to the list",
      "Mark todos as complete",
      "Delete todos from the list",
      "Filter by all/active/complete todos",
      "Clear all completed todos",
      "Drag and drop todos to reorder",
      "Toggle light and dark mode",
      "Persistent data storage with Firebase"
    ],
    challenges:
      "Implementing drag-and-drop functionality and integrating Firebase to ensure real-time data persistence across sessions were the key challenges.",
    image: {
      img1: "/images/todoimg1.jpg",
      img2: "/images/todoimg2.jpg",
      img3: "/images/todoimg3.jpg"
    },
    technologies: ["JavaScript", "Bootstrap CSS", "Firebase"],
    github: "https://github.com/Kolahub/todo-appv1.1",
    liveDemo: "https://kolahub.github.io/todo-appv1.1/",
    category: "Web App",
    date: "2024",
    client: "Personal Project",
    featured: false
  },  
  {
    id: "project-6",
    title: "Space tourism multi-page website",
    description:
      "A multi-page website for a fictional space tourism company with tab-based navigation to display information about destinations, crew, and technology used for space travel.",
    fullDescription:
      "This Space Tourism website showcases information about different space destinations, crew members, and technologies for a fictional space tourism company. Built with React and styled using Tailwind CSS, it features a tab-based navigation system that allows users to view different categories of content in an intuitive way.",
    keyFeatures: [
      "Multi-page layout with smooth transitions",
      "Tab-based navigation for content categories",
      "Responsive design optimized for all device sizes",
      "Interactive UI elements and animations",
      "Accessibility considerations for all users",
    ],
    challenges:
      "The main challenge in this project was creating a smooth, intuitive tab-based navigation system that worked seamlessly across both desktop and mobile interfaces. I also focused on implementing elegant animations and transitions to enhance the user experience without compromising on performance.",
    image: {
      img1: "/images/spaceimg1.png",
      img2: "/images/spaceimg2.png",
      img3: "/images/spaceimg3.png",
    },
    technologies: ["React.js", "Tailwind CSS"],
    github: "https://github.com/Kolahub/space-tourism-web-app",
    liveDemo: "https://space-tourism-web-app-kola.vercel.app/",
    category: "Website",
    date: "2024",
    client: "Personal Project",
    featured: true,
  },
  {
    id: "project-7",
    title: "REST Countries API with theme switcher",
    description:
      "An application that integrates with the REST Countries API to display information about countries around the world. Features include search, filtering by region, and a dark/light mode toggle.",
    fullDescription:
      "This application integrates with the REST Countries API to provide comprehensive information about countries worldwide using OOP principles. Users can search for specific countries, filter by regions, and view detailed information about each country. The application also features a dark/light mode toggle for comfortable viewing in different lighting conditions.",
    keyFeatures: [
      "Integration with REST Countries API",
      "Search functionality to find specific countries",
      "Regional filtering to narrow down results",
      "Detailed country information pages",
      "Dark/light mode toggle for user preference",
      "Responsive design for all screen sizes",
    ],
    challenges:
      "Working with external API data required careful handling of asynchronous operations and proper error management. Implementing the theme switcher also required a comprehensive approach to styling to ensure all components responded correctly to theme changes.",
    image: {
      img1: "/images/countriesimg1.jpg",
      img2: "/images/countriesimg2.jpg",
      img3: "/images/countriesimg3.jpg",
    },
    technologies: ["JavaScript", "CSS", "REST API"],
    github:
      "https://github.com/Kolahub/rest-countries-api-with-color-theme-switcher-master",
    liveDemo:
      "https://kola-state-finder.vercel.app/",
    category: "API Integration",
    date: "2024",
    client: "Personal Project",
    featured: true,
  },
  {
    id: "project-8",
    title: "Y Combinator Landing Page Clone",
    description:
      "A responsive landing page clone of Y Combinator built with semantic HTML and Sass. It features dropdown menus, grid layouts, responsive typography, and animation effects.",
    fullDescription:
      "This is a pixel-perfect clone of the official Y Combinator landing page. I recreated the full layout and interaction using only HTML and Sass, focusing on semantic markup, BEM naming conventions, and responsiveness. The clone includes interactive dropdowns, media sections, and mobile navigation with smooth transitions.",
    keyFeatures: [
      "Fully responsive design using media queries",
      "BEM-based Sass architecture for maintainable styles",
      "Interactive dropdown navigation with hover and mobile toggle",
      "Semantic HTML structure with accessibility in mind",
      "CSS animations for tooltips and mobile nav transitions",
    ],
    challenges:
      "Creating a navigation system that works well across screen sizes with pure HTML and Sass. Managing layout responsiveness while keeping the design true to the original was a fun and educational challenge.",
    image: {
      img1: "/images/ycombinator-clone-1.png",
      img2: "/images/ycombinator-clone-2.png",
      img3: "/images/ycombinator-clone-3.png",
    },
    technologies: ["HTML5", "Sass", "CSS3"],
    github: "https://github.com/Kolahub/Y-Combinator-landing-page-clone",
    liveDemo: "https://y-combinator-landing-page-clone.vercel.app/",
    category: "Web Clone",
    date: "2024",
    client: "Practice Project",
    featured: false,
  },  
];

const initialState = {
  allProjects: [],
  featuredProjects: [],
  currentProject: null,
  loading: false,
  error: null,
  // Use sample data as fallback
  fallbackProjects: sampleProjects,
  fallbackFeaturedProjects: sampleProjects.filter(
    (project) => project.featured
  ),
};

export const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    setCurrentProject: (state, action) => {
      state.currentProject = action.payload;
    },
    filterProjects: (state, action) => {
      const category = action.payload;
      if (category === "all") {
        state.filteredProjects =
          state.allProjects.length > 0
            ? state.allProjects
            : state.fallbackProjects;
      } else {
        const projectsToFilter =
          state.allProjects.length > 0
            ? state.allProjects
            : state.fallbackProjects;

        state.filteredProjects = projectsToFilter.filter((project) =>
          project.technologies.includes(category)
        );
      }
    },
  },
  extraReducers: (builder) => {
    builder
      // Handle fetchAllProjects
      .addCase(fetchAllProjects.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllProjects.fulfilled, (state, action) => {
        state.loading = false;
        state.allProjects = action.payload;
      })
      .addCase(fetchAllProjects.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Failed to fetch projects";
        // Use fallback data if API fails
        state.allProjects = state.fallbackProjects;
      })

      // Handle fetchFeaturedProjects
      .addCase(fetchFeaturedProjects.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchFeaturedProjects.fulfilled, (state, action) => {
        state.loading = false;
        state.featuredProjects = action.payload;
      })
      .addCase(fetchFeaturedProjects.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.payload?.message || "Failed to fetch featured projects";
        // Use fallback data if API fails
        state.featuredProjects = state.fallbackFeaturedProjects;
      })

      // Handle fetchProjectById
      .addCase(fetchProjectById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProjectById.fulfilled, (state, action) => {
        state.loading = false;
        state.currentProject = action.payload;
      })
      .addCase(fetchProjectById.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.payload?.message || "Failed to fetch project details";
        // Find in fallback data if API fails
        const id = action.meta.arg;
        state.currentProject = state.fallbackProjects.find(
          (project) => project.id === id
        );
      });
  },
});

export const { setCurrentProject, filterProjects } = projectsSlice.actions;

export default projectsSlice.reducer;
