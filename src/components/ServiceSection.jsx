import { useState } from "react";
import { cn } from "@/lib/utils";
import { FaCheckCircle, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const services = [
    {
        name: "Web Application Package",
        price: "$200",
        delivery: "3 Days Delivery",
        features: [
            "Responsive Design",
            "SEO Optimized",
            "Up to 5 Pages",
            "Deployment Support",
        ],
    },
    {
        name: "Desktop Application Package",
        price: "$300",
        delivery: "5 Days Delivery",
        features: [
            "Cross-Platform Support",
            "Up to 3 Core Features",
            "Data Storage Integration",
            "Installer Provided",
        ],
    },
    {
        name: "AI Agent Package",
        price: "$400",
        delivery: "7 Days Delivery",
        features: [
            "Custom AI Model Integration",
            "API Development",
            "Real-Time Predictions",
            "Detailed Documentation",
        ],
    },
    {
        name: "E-Commerce Package",
        price: "$500",
        delivery: "7 Days Delivery",
        features: [
            "Product Management",
            "Payment Gateway Integration",
            "Mobile Friendly",
            "Admin Dashboard",
        ],
    },
    {
        name: "Portfolio Package",
        price: "$150",
        delivery: "2 Days Delivery",
        features: [
            "Personal Branding",
            "Modern Design",
            "Fast Loading",
            "Deployment Support",
        ],
    },
];

const visibleCount = 3;

export const ServiceSection = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const extendedServices = [...services, ...services, ...services];
    const middleIndexOffset = services.length;

    const CARD_WIDTH_REM = 18;
    const GAP_REM = 1.5;
    const SLOT_REM = CARD_WIDTH_REM + GAP_REM;

    const translateX = -(
        (activeIndex + middleIndexOffset - 1) *
        SLOT_REM
    );

    const remToPx = (rem) => rem * 16;

    const handlePrev = () => {
        setActiveIndex((prev) => (prev - 1 + services.length) % services.length);
    };

    const handleNext = () => {
        setActiveIndex((prev) => (prev + 1) % services.length);
    };

    const renderCard = (service, index) => {
        const realIndex = index % services.length;

        let distance = Math.abs(realIndex - activeIndex);
        distance = Math.min(distance, services.length - distance);

        const isCenter = distance === 0;

        return (
            <div
                key={`${service.name}-${index}`}
                className={cn(
                    "bg-card rounded-xl shadow-md border border-border/50 p-6 flex flex-col justify-between relative overflow-hidden select-none transition-transform duration-500 ease-in-out",
                    "min-w-[18rem] w-72 h-[28rem]",
                    isCenter ? "scale-110 z-30 shadow-lg" : "scale-95 opacity-70 z-10"
                )}
                style={{
                    boxShadow: "0 8px 15px rgba(0, 0, 0, 0.1)",
                    transformOrigin: "center bottom",
                }}
            >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-primary transition-opacity duration-300 pointer-events-none"></div>
                <div>
                    <h4 className="text-xl font-semibold mb-4 text-center">{service.name}</h4>
                    <div className="text-center mb-6">
                        <h3 className="text-3xl font-bold text-primary mb-1">{service.price}</h3>
                        <p className="text-muted-foreground text-sm">{service.delivery}</p>
                    </div>
                    <h5 className="font-semibold mb-3">What's Included</h5>
                    <ul className="space-y-3">
                        {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-3 text-muted-foreground">
                                <FaCheckCircle className="text-primary" />
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex justify-center mt-6">
                    <button className="cosmic-button w-full py-3">Get Started</button>
                </div>
            </div>
        );
    };

    return (
        <section
            id="services"
            className="py-24 px-4 relative bg-secondary/30 overflow-visible select-none"
        >
            <div className="container mx-auto max-w-6xl relative">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    Choose the Perfect <span className="text-primary">Package</span>
                </h2>

                {/* Desktop Carousel */}
                <div className="relative hidden md:flex items-center justify-center h-[32rem]">
                    <button
                        onClick={handlePrev}
                        aria-label="Previous package"
                        className="absolute left-0 md:-left-16 bg-card p-4 rounded-full shadow-lg hover:scale-110 transition z-30 flex items-center justify-center"
                        style={{
                            width: "3.5rem",
                            height: "3.5rem",
                            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)"
                        }}
                    >
                        <FaChevronLeft className="text-primary text-xl" />
                    </button>

                    <div
                        className="overflow-hidden flex items-center"
                        style={{
                            width: remToPx(SLOT_REM * visibleCount),
                            height: "100%"
                        }}
                    >
                        <div
                            className="flex gap-6 items-center"
                            style={{
                                transform: `translateX(${remToPx(translateX)}px)`,
                                transition: "transform 0.5s ease-in-out",
                                height: "100%"
                            }}
                        >
                            {extendedServices.map((service, idx) => renderCard(service, idx))}
                        </div>
                    </div>

                    <button
                        onClick={handleNext}
                        aria-label="Next package"
                        className="absolute right-0 md:-right-16 bg-card p-4 rounded-full shadow-lg hover:scale-110 transition z-30 flex items-center justify-center"
                        style={{
                            width: "3.5rem",
                            height: "3.5rem",
                            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)"
                        }}
                    >
                        <FaChevronRight className="text-primary text-xl" />
                    </button>
                </div>

                {/* Mobile - Single Card centered with spaced arrows */}
                <div className="mt-8 md:hidden relative h-[28rem] flex items-center justify-center">
                    <button
                        onClick={handlePrev}
                        aria-label="Previous package"
                        className="bg-card p-4 rounded-full shadow-lg hover:scale-110 transition flex items-center justify-center absolute"
                        style={{
                            width: "3rem",
                            height: "3rem",
                            left: "-2.5rem",
                        }}
                    >
                        <FaChevronLeft className="text-primary" />
                    </button>

                    <div className="mx-auto">
                        {renderCard(services[activeIndex], activeIndex)}
                    </div>

                    <button
                        onClick={handleNext}
                        aria-label="Next package"
                        className="bg-card p-4 rounded-full shadow-lg hover:scale-110 transition flex items-center justify-center absolute"
                        style={{
                            width: "3rem",
                            height: "3rem",
                            right: "-2.5rem",
                        }}
                    >
                        <FaChevronRight className="text-primary" />
                    </button>
                </div>
            </div>
        </section>
    );
};
