import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export const Collapsible = ({ title, children, isOpen, onToggle }) => {
    return (
        <div className="border border-border rounded-lg bg-card shadow-md mb-4 overflow-hidden">
            <button
                onClick={onToggle}
                className="flex justify-between items-center w-full p-4 font-medium hover:bg-secondary/20 transition-colors"
            >
                <span>{title}</span>
                {isOpen ? <ChevronUp className="h-5 w-5 text-primary" /> : <ChevronDown className="h-5 w-5 text-primary" />}
            </button>

            {isOpen && (
                <div className="p-4 border-t border-border text-muted-foreground animate-fade-in">
                    {children}
                </div>
            )}
        </div>
    );
};
