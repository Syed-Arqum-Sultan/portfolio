import { motion } from 'framer-motion';
import { Button } from './ui/Button';
import { Link } from 'react-scroll';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Hero = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const bg1Ref = useRef<HTMLDivElement>(null);
    const bg2Ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!sectionRef.current) return;

        const ctx = gsap.context(() => {
            // Parallax effect on background elements
            if (bg1Ref.current) {
                gsap.to(bg1Ref.current, {
                    y: 200,
                    opacity: 0,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top top',
                        end: 'bottom top',
                        scrub: 1,
                    },
                });
            }

            if (bg2Ref.current) {
                gsap.to(bg2Ref.current, {
                    y: 150,
                    opacity: 0,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top top',
                        end: 'bottom top',
                        scrub: 1,
                    },
                });
            }
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
            {/* Background Elements with parallax */}
            <div
                ref={bg1Ref}
                className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl opacity-20 animate-pulse"
            />
            <div
                ref={bg2Ref}
                className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl opacity-20 animate-pulse delay-1000"
            />

            <div className="container mx-auto px-6 text-center z-10">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-primary font-medium text-lg mb-4"
                >
                    Every Great Application Starts With a Problem
                </motion.p>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-5xl md:text-7xl font-bold text-slate-100 mb-6"
                >
                    I'm Syed Arqum,<br />
                    <span className="text-primary">A Problem Solver</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-xl md:text-2xl text-slate-400 mb-10 max-w-2xl mx-auto"
                >
                    Full-stack developer turning complex challenges into elegant solutions.
                    From slow APIs to scalable systems handling 100K+ users—here's my story.
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

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                >
                    <Link to="journey" smooth={true} duration={500}>
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="flex flex-col items-center gap-2 cursor-pointer group"
                        >
                            <span className="text-slate-400 text-sm group-hover:text-primary transition-colors">Scroll to begin the story</span>
                            <div className="w-6 h-10 border-2 border-slate-400 group-hover:border-primary rounded-full flex justify-center pt-2 transition-colors">
                                <motion.div
                                    animate={{ y: [0, 12, 0] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                    className="w-1.5 h-1.5 bg-primary rounded-full"
                                />
                            </div>
                        </motion.div>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};
