import { motion } from 'framer-motion';
import { Button } from './ui/Button';
import { Link } from 'react-scroll';

export const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
            {/* Background Elements */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl opacity-20 animate-pulse" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl opacity-20 animate-pulse delay-1000" />

            <div className="container mx-auto px-6 text-center z-10">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-primary font-medium text-lg mb-4"
                >
                    Hi, I'm Syed Arqum
                </motion.p>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-5xl md:text-7xl font-bold text-slate-100 mb-6"
                >
                    Full-Stack Developer
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-xl md:text-2xl text-slate-400 mb-10 max-w-2xl mx-auto"
                >
                    Specializing in Python/Django & Angular/React to build scalable, high-performance web applications.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col md:flex-row gap-4 justify-center items-center"
                >
                    <Link to="projects" smooth={true} duration={500}>
                        <Button>View Projects</Button>
                    </Link>
                    <Link to="contact" smooth={true} duration={500}>
                        <Button variant="outline">Contact Me</Button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};
