import { Navbar } from "./Navbar";
import { StarBackground } from "./StarBackground";
import { ThemeToggle } from "./ThemeToggle";

export const Layout = ({ children }) => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Background Effects */}
            <StarBackground />

            {/* Navbar */}
            <Navbar />

            {/* Main Content */}
            <main>
                {children}
            </main>

            {/* Optional Footer */}
        </div>
    );
};
