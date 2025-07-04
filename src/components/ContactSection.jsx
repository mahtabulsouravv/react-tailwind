import { Mail, MapPin, Send } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { FaLinkedin, FaFacebookSquare, FaDiscord } from "react-icons/fa";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export const ContactSection = () => {
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.target);

        emailjs.sendForm(
            "service_58ul91q",
            "template_ct9dq96",
            e.target,
            "csKchf4jrbUti7J3l"
        )
        .then(() => {
            toast({
                title: "Message sent!",
                description: "Thank you for your message. I'll get back to you soon.",
                position: "top-center"
            });
            setIsSubmitting(false);
            e.target.reset();
        })
        .catch(() => {
            toast({
                title: "Error!",
                description: "Something went wrong. Please try again later.",
                variant: "destructive",
            });
            setIsSubmitting(false);
        });
    };

    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get In <span className="text-primary">Touch</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Feel free to reach out via email, WhatsApp, or the form below. Let's connect!
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium text-left">Email</h4>
                                    <a
                                        href="mailto:mahtabulsouravcse@gmail.com"
                                        className="text-muted-foreground hover:text-primary transition-colors block"
                                    >
                                        mahtabulsouravcse@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <SiWhatsapp className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium text-left">WhatsApp</h4>
                                    <a
                                        href="https://wa.me/8801607025114"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-muted-foreground hover:text-primary transition-colors block"
                                    >
                                        +880 1607025114
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium text-left">Location</h4>
                                    <span className="text-muted-foreground block">Dhaka, Bangladesh</span>
                                </div>
                            </div>
                        </div>

                        {/* Social Media */}
                        <div className="pt-8">
                            <h4 className="font-medium mb-4 text-center md:text-left">Connect With Me</h4>
                            <div className="flex space-x-4 justify-center md:justify-start">
                                <a href="#" target="_blank" className="hover:scale-110 transition-transform text-primary">
                                    <FaLinkedin size={30} />
                                </a>
                                <a href="#" target="_blank" className="hover:scale-110 transition-transform text-primary">
                                    <FaFacebookSquare size={30} />
                                </a>
                                <a href="#" target="_blank" className="hover:scale-110 transition-transform text-primary">
                                    <FaDiscord size={34} />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-card p-8 rounded-lg shadow-xs">
                        <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-1 text-foreground">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                                    placeholder="Alex Moris"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-1 text-foreground">
                                    Your Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                                    placeholder="alexmoris@gmail.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-1 text-foreground">
                                    Your Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none transition-all"
                                    placeholder="Hi, I'd like to talk about..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={cn("cosmic-button w-full flex items-center justify-center gap-2")}
                            >
                                {isSubmitting ? "Sending..." : "Send Message"} <Send />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
