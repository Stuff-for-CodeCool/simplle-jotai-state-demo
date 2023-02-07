import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Index from "./pages/Index";
import Alta from "./pages/Alta";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <BrowserRouter>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Index</Link>
                    </li>
                    <li>
                        <Link to="/alta">Alta</Link>
                    </li>
                </ul>
            </nav>
            <main>
                <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/alta" element={<Alta />} />
                </Routes>
            </main>
        </BrowserRouter>
    </StrictMode>
);
