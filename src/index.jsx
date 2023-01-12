import React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, Outlet, createBrowserRouter } from "react-router-dom";
import "./index.css";

/* ----------------------------------------------------------------------------
 *          COMPONENTS
 * --------------------------------------------------------------------------- */

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

/* ----------------------------------------------------------------------------
 *          ROUTES
 * --------------------------------------------------------------------------- */

import Home from "./routes/home/Home";
import Products from "./routes/products/Products";
import Services from "./routes/services/Services";
import About from "./routes/about/About";
import Contact from "./routes/contact/Contact";
import Login from "./routes/login/Login";
import { ParallaxProvider } from "react-scroll-parallax";

/* ============================================================================ */
/*          APP LAYOUT
/* ============================================================================ */

const AppLayout = () => (
    <>
    <Navbar />
    <ParallaxProvider>
    <Outlet />
    </ParallaxProvider>
    <Footer />
    </>
);

const router = createBrowserRouter([
    {
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/produkter",
                element: <Products />,
            },
            {
                path: "/tjanster",
                element: <Services />,
            },
            {
                path: "/om",
                element: <About />,
            },
            {
                path: "/kontakt",
                element: <Contact />,
            },
            {
                path: "/login",
                element: <Login />,
            },
        ]
    }
]);

createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);