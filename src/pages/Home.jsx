import { Navbar } from "../components/Navbar";
import { StarBackground } from "../components/StarBackground";
import { ThemeToggle } from "../components/ThemeToggle";

export const Home = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

        {/* Theme Toggle */}
        <ThemeToggle />

        {/* Background Effects */}
        <StarBackground />

        {/* Navbar */}
        <Navbar />

        {/* Main Content 1.Hero 2.About 3.Skills 4.Project .. */}
        {/* https://youtu.be/ifOJ0R5UQOc?t=4736 */}

        {/* Footer */}

    </div>
    );
}
