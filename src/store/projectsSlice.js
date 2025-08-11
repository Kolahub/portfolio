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
    title: "Designo Multi-Page Website",
    description:
      "A multi-page website built with Next.js and Tailwind CSS, featuring responsive design, interactive maps with Leaflet, and pixel-perfect replication of the provided Figma file.",
    fullDescription:
      "The Designo Multi-Page Website was created from a Frontend Mentor challenge. I used Next.js for routing and performance, Tailwind CSS for styling, and Leaflet for interactive map integration on the contact page. One of the highlights of this project was successfully replicating the provided Figma design to a high degree of accuracy, ensuring that typography, spacing, and responsiveness matched perfectly.",
    keyFeatures: [
      "Multi-page responsive layout",
      "Interactive maps using Leaflet",
      "Pixel-perfect design replication from Figma",
      "Next.js for server-side rendering and routing",
      "Dark mode support"
    ],
    image: {
      img1: "/images/designo1.jpeg",
      img2: "/images/designo2.jpeg",
      img3: "/images/designo3.jpeg",
    },
    technologies: ["Next.js", "Tailwind CSS", "Leaflet"],
    github: "https://github.com/Kolahub/Designo",
    liveDemo: "https://designo-kola.vercel.app/",
    category: "Website",
    date: "2025",
    client: "Personal Project",
    featured: true,
  },
  {
    id: "project-2",
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
    id: "project-3",
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
  // ... keep all your other projects unchanged from project-4 to project-8
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
