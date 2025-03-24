import { useEffect, useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  useLocation,
  Outlet,
  ScrollRestoration,
} from "react-router-dom";
import { Provider } from "react-redux";
import { AnimatePresence } from "framer-motion";
import { store } from "./store";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import "./styles/globals.css";

// Root layout component with navbar, main content, and footer
const RootLayout = () => {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <ScrollRestoration />
      <main className="min-h-screen">
        <AnimatePresence mode="wait" initial={false}>
          <Outlet key={location.pathname} />
        </AnimatePresence>
      </main>
      <Footer />
    </>
  );
};

// Create router with all routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "projects/:id",
        element: <ProjectDetail />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <CustomCursor />
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  );
}
