import { SectionHeading } from './ui/SectionHeading';
import { motion } from 'framer-motion';

export const About = () => {
    return (
        <section id="about" className="py-20 bg-slate-900">
            <div className="container mx-auto px-6">
                <SectionHeading title="About Me" subtitle="A brief introduction to my background and expertise." />

                <div className="flex flex-col md:flex-row items-center gap-12">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="flex-1 text-slate-300 leading-relaxed text-lg"
                    >
                        <p className="mb-6">
                            Software Engineer with 4.5+ years of experience building scalable backend systems, AI-enabled applications, and full-stack platforms. Specialized in Django, FastAPI, and cloud-based architectures with strong expertise in performance optimization and high-availability production systems.
                        </p>
                        <p>
                            Experienced in developing AI-driven solutions including chatbots, voice recognition integrations, and automation workflows. Proven ability to design robust APIs, implement asynchronous processing pipelines, and collaborate with cross-functional teams to deliver reliable software solutions.
                        </p>
                    </motion.div>

                    {/* Stats or Visual */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="flex-1 grid grid-cols-2 gap-6"
                    >
                        <div className="bg-slate-800 p-6 rounded-xl text-center border border-slate-700 hover:border-primary/50 transition-colors">
                            <h3 className="text-4xl font-bold text-primary mb-2">4.5+</h3>
                            <p className="text-slate-400">Years Experience</p>
                        </div>
                        <div className="bg-slate-800 p-6 rounded-xl text-center border border-slate-700 hover:border-primary/50 transition-colors">
                            <h3 className="text-4xl font-bold text-primary mb-2">10+</h3>
                            <p className="text-slate-400">Projects Completed</p>
                        </div>
                        <div className="bg-slate-800 p-6 rounded-xl text-center border border-slate-700 hover:border-primary/50 transition-colors">
                            <h3 className="text-4xl font-bold text-primary mb-2">Full</h3>
                            <p className="text-slate-400">Stack Expertise</p>
                        </div>
                        <div className="bg-slate-800 p-6 rounded-xl text-center border border-slate-700 hover:border-primary/50 transition-colors">
                            <h3 className="text-4xl font-bold text-primary mb-2">24/7</h3>
                            <p className="text-slate-400">Commitment</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
