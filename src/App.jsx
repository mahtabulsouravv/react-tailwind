import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { WebProjects } from "./pages/WebProjects";
import { DesktopProjects } from "./pages/DesktopProjects";
import { AIProjects } from "./pages/AIProjects";
import { BlogPage } from "./pages/BlogPage";
import { Toaster } from '@/components/ui/toaster'
import { Preloader } from "@/components/Preloader";

function App() {
    return (
        <>
        <Preloader />
        <Toaster />
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path="/projects/web" element={<WebProjects />} />
                <Route path="/projects/desktop" element={<DesktopProjects />} />
                <Route path="/projects/ai" element={<AIProjects />} />
                <Route path="/blogs/tech" element={<BlogPage />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
        </>
    );
}

export default App;
