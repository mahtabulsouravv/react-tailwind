import { cn } from "@/lib/utils";
import { FaCheckCircle } from "react-icons/fa";

const services = [
    {
        name: "Web Application Package",
        price: "$200",
        delivery: "3 Days Delivery",
        features: [
            "Responsive Design",
            "SEO Optimized",
            "Up to 5 Pages",
            "Deployment Support"
        ],
        type: "web"
    },
    {
        name: "Desktop Application Package",
        price: "$300",
        delivery: "5 Days Delivery",
        features: [
            "Cross-Platform Support",
            "Up to 3 Core Features",
            "Data Storage Integration",
            "Installer Provided"
        ],
        type: "desktop"
    },
    {
        name: "AI Agent Package",
        price: "$400",
        delivery: "7 Days Delivery",
        features: [
            "Custom AI Model Integration",
            "API Development",
            "Real-Time Predictions",
            "Detailed Documentation"
        ],
        type: "ai"
    }
];

export const ServiceSection = () => {
    return (
        <section id="services" className="py-20 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-6xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    Choose the Perfect <span className="text-primary">Package</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-card rounded-xl shadow-md p-8 flex flex-col justify-between transition-transform hover:scale-[1.03] hover:shadow-lg border border-border/50 relative group overflow-hidden"
                        >
                            {/* Subtle background overlay on hover */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-primary transition-opacity duration-300 pointer-events-none"></div>

                            <div>
                                {/* Name First */}
                                <h4 className="text-xl font-semibold mb-4 text-center">{service.name}</h4>

                                <div className="text-center mb-6">
                                    <h3 className="text-3xl font-bold text-primary mb-1">{service.price}</h3>
                                    <p className="text-muted-foreground text-sm">{service.delivery}</p>
                                </div>

                                <h5 className="font-semibold mb-3">What's Included</h5>
                                <ul className="space-y-3">
                                    {service.features.map((feature, key) => (
                                        <li key={key} className="flex items-center gap-3 text-muted-foreground">
                                            <FaCheckCircle className="text-primary" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="flex justify-center mt-6">
                                <button className="cosmic-button w-full">Get Started</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
