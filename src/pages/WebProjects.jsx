import { Layout } from "../components/Layout";

export const WebProjects = () => {
    return (
        <Layout>
            <section className="py-20 px-4 relative">
                <div className="container mx-auto max-w-5xl text-center relative z-10">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Web <span className="text-primary">Applications</span>
                    </h2>
                    <p className="text-muted-foreground max-w-xl mx-auto">
                        Explore my modern, responsive websites and web applications.
                    </p>
                </div>
            </section>
        </Layout>
    );
};
