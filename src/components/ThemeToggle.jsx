import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import {cn} from '@/lib/utils';

export const ThemeToggle = () => {
    // State
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Use Effect
    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme === "dark") {
            setIsDarkMode(true)
            document.documentElement.classList.add("dark");
        }
        else
        {
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        }
    }, [])

    //Function
    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        }
        else
        {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setIsDarkMode(true);
        }
    }

    return (
        <div className="fixed max-sm:hidden top-5 right-0 z-50 w-full pointer-events-none">
            <div className="container flex justify-end">
                <button
                    onClick={toggleTheme}
                    className={cn(
                        "p-2 rounded-full transition-colors duration-300 pointer-events-auto",
                        "focus:outline-none"
                    )}
                >
                    {isDarkMode ? (
                        <Sun className="h-6 w-6 text-yellow-300" />
                    ) : (
                        <Moon className="h-6 w-6 text-blue-900" />
                    )}
                </button>
            </div>
        </div>
    );
}
