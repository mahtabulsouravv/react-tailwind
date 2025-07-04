export const Footer = () => {
    return (
        <footer className="relative backdrop-blur-sm bg-background/40 border-t border-border/10 py-4 px-4">
            {/* Subtle glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5"></div>
            <div className="container mx-auto max-w-4xl relative z-10">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-sm text-center sm:text-left">
                    <span className="text-muted-foreground/80">Developed by Mahtabul Shourav</span>
                    <span className="hidden sm:inline">•</span>
                    <span>
                         © {new Date().getFullYear()} Meteor Craftr. All rights reserved.
                    </span>
                </div>
            </div>
        </footer>
    );
};
