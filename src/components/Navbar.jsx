import { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import { cn } from '@/lib/utils';
import { Menu, X, Moon, Sun } from "lucide-react";

const navItems = [
    { name: "Home", href: "/#hero" },
    { name: "About", href: "/#about" },
    { name: "Skills", href: "/#skills" },
    { name: "Projects", href: "/#projects" },
    { name: "Services", href: "/#services" },
    { name: "Contact", href: "/#contact" },
];

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Theme toggle logic
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

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        // Cleanup on unmount
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    const handleMobileNavClick = () => {
        // Small delay to allow scroll to happen before closing menu
        setTimeout(() => {
            setIsMenuOpen(false);
        }, 300);
    };

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
        <>
            <nav
                className={cn(
                    "fixed w-full z-[60] transition-all duration-300",
                    isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
                )}
            >
                <div className="container relative flex items-center">
                    {/* Logo */}
                    <HashLink smooth to="/#hero" className="text-xl font-bold text-primary flex items-center">
                        <span className="relative z-10">
                            <span className="text-glow text-foreground">Meteor</span> Craftr.
                        </span>
                    </HashLink>

                    {/* Desktop Navbar */}
                    <div className="hidden md:flex space-x-8 absolute left-1/2 transform -translate-x-1/2">
                        {navItems.map((item, key) => (
                            <HashLink
                                key={key}
                                smooth
                                to={item.href}
                                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                            >
                                {item.name}
                            </HashLink>
                        ))}
                    </div>

                    {/* Desktop Theme Toggle */}
                    <div className="hidden md:flex items-center ml-auto">
                        <button
                            onClick={toggleTheme}
                            className={cn(
                                "p-2 rounded-full transition-colors duration-300",
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

                    {/* Mobile Controls */}
                    <div className="md:hidden flex items-center space-x-2 ml-auto">
                        {/* Mobile Theme Toggle */}
                        <button
                            onClick={toggleTheme}
                            className={cn(
                                "p-2 rounded-full transition-colors duration-300 z-[60] relative",
                                "focus:outline-none"
                            )}
                        >
                            {isDarkMode ? (
                                <Sun className="h-5 w-5 text-yellow-300" />
                            ) : (
                                <Moon className="h-5 w-5 text-blue-900" />
                            )}
                        </button>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMenuOpen((prev) => !prev)}
                            className="p-2 text-foreground z-[60] relative"
                            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div
                className={cn(
                    "fixed inset-0 bg-background/95 backdrop-blur-md z-50 flex flex-col items-center justify-center",
                    "transition-all duration-300 md:hidden",
                    isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                )}
                style={{
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    height: '100vh',
                    width: '100vw'
                }}
            >
                <div className="flex flex-col space-y-8 text-xl">
                    {navItems.map((item, key) => (
                        <HashLink
                            key={key}
                            smooth
                            to={item.href}
                            className="text-foreground/80 hover:text-primary transition-colors duration-300 text-center"
                            onClick={handleMobileNavClick}
                        >
                            {item.name}
                        </HashLink>
                    ))}
                </div>
            </div>
        </>
    );
};
