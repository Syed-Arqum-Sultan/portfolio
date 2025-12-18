import { SectionHeading } from './ui/SectionHeading';
import { motion } from 'framer-motion';
import { FaCode, FaRocket, FaLightbulb, FaTrophy } from 'react-icons/fa';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Journey = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const timelineRef = useRef<HTMLDivElement>(null);
    const milestonesRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        if (!sectionRef.current || !timelineRef.current) return;

        const ctx = gsap.context(() => {
            // Animate timeline line on scroll
            gsap.fromTo(
                timelineRef.current,
                { scaleY: 0 },
                {
                    scaleY: 1,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top center',
                        end: 'bottom center',
                        scrub: 1,
                    },
                }
            );

            // Animate each milestone with stagger
            milestonesRef.current.forEach((milestone, index) => {
                if (!milestone) return;

                gsap.fromTo(
                    milestone,
                    {
                        opacity: 0,
                        x: index % 2 === 0 ? -100 : 100,
                        scale: 0.8,
                    },
                    {
                        opacity: 1,
                        x: 0,
                        scale: 1,
                        duration: 1,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: milestone,
                            start: 'top 80%',
                            end: 'top 50%',
                            scrub: 1,
                        },
                    }
                );
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const milestones = [
        {
            year: "2021",
            title: "The Discovery",
            icon: <FaLightbulb className="text-3xl" />,
            description: "Started my journey into web development, fascinated by how code could solve real-world problems. Dove deep into Python and Django, building my first applications.",
            achievement: "Built first full-stack application"
        },
        {
            year: "2022",
            title: "The First Challenge",
            icon: <FaCode className="text-3xl" />,
            description: "Joined a team working on complex SaaS platforms. Faced my first major challenge: optimizing slow APIs and building scalable booking systems. This is where I learned that great code isn't just about working—it's about working efficiently.",
            achievement: "Reduced API response time by 60%"
        },
        {
            year: "2023",
            title: "The Growth",
            icon: <FaRocket className="text-3xl" />,
            description: "Expanded my expertise to frontend technologies, mastering Angular and React. Started building complete user experiences, from database to UI. Implemented real-time features, map integrations, and complex workflows.",
            achievement: "Delivered 10+ production features"
        },
        {
            year: "2024",
            title: "The Mastery",
            icon: <FaTrophy className="text-3xl" />,
            description: "Now a full-stack developer with 3+ years of experience, I've built scalable systems handling 100K+ users, optimized critical infrastructure, and mentored junior developers. Every project is a new story waiting to be written.",
            achievement: "Full-stack expertise achieved"
        }
    ];

    return (
        <section ref={sectionRef} id="journey" className="py-20 bg-slate-900 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent" />

            <div className="container mx-auto px-6">
                <SectionHeading
                    title="The Beginning"
                    subtitle="Every great developer has an origin story. Here's mine."
                />

                <div className="max-w-4xl mx-auto relative">
                    {/* Timeline line with GSAP animation */}
                    <div
                        ref={timelineRef}
                        className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-blue-400 to-primary origin-top"
                    />

                    {milestones.map((milestone, index) => (
                        <div
                            key={index}
                            ref={(el) => { milestonesRef.current[index] = el; }}
                            className={`relative flex items-center mb-16 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                } flex-col md:gap-8`}
                        >
                            {/* Timeline dot */}
                            <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-slate-900 transform -translate-x-1/2 z-10 shadow-lg shadow-primary/50" />

                            {/* Content card */}
                            <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'} pl-16 md:pl-0`}>
                                <motion.div
                                    whileHover={{ scale: 1.02, y: -5 }}
                                    className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-primary/50 transition-all hover:shadow-xl hover:shadow-primary/10"
                                >
                                    <div className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                                        <div className="text-primary">
                                            {milestone.icon}
                                        </div>
                                        <span className="text-primary font-bold text-xl">{milestone.year}</span>
                                    </div>

                                    <h3 className="text-2xl font-bold text-slate-100 mb-3">
                                        {milestone.title}
                                    </h3>

                                    <p className="text-slate-300 mb-4 leading-relaxed">
                                        {milestone.description}
                                    </p>

                                    <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-lg">
                                        <span className="text-primary text-sm font-medium">
                                            ✓ {milestone.achievement}
                                        </span>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Spacer for alternating layout */}
                            <div className="hidden md:block w-5/12" />
                        </div>
                    ))}
                </div>

                {/* Philosophy section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl mx-auto mt-16 text-center"
                >
                    <h3 className="text-3xl font-bold text-slate-100 mb-6">The Philosophy</h3>
                    <p className="text-slate-300 text-lg leading-relaxed mb-4">
                        I believe that great software is more than just code—it's about solving real problems for real people.
                        Every line I write is driven by a commitment to performance, scalability, and user experience.
                    </p>
                    <p className="text-slate-400 text-lg leading-relaxed">
                        Whether it's optimizing a slow API, building a complex booking flow, or implementing real-time features,
                        I approach each challenge as an opportunity to create something exceptional.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};
