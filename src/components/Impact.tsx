import { SectionHeading } from './ui/SectionHeading';
import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { FaChartLine, FaUsers, FaBolt, FaCode } from 'react-icons/fa';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface CounterProps {
    end: number;
    duration?: number;
    suffix?: string;
    prefix?: string;
}

const AnimatedCounter = ({ end, duration = 2, suffix = '', prefix = '' }: CounterProps) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (!isInView) return;

        let startTime: number | null = null;
        const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);

            setCount(Math.floor(progress * end));

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, [isInView, end, duration]);

    return (
        <span ref={ref}>
            {prefix}{count}{suffix}
        </span>
    );
};

export const Impact = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const metricsRef = useRef<(HTMLDivElement | null)[]>([]);
    const achievementsRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        if (!sectionRef.current) return;

        const ctx = gsap.context(() => {
            // Animate metric cards with 3D effect
            metricsRef.current.forEach((metric) => {
                if (!metric) return;

                gsap.fromTo(
                    metric,
                    {
                        opacity: 0,
                        y: 80,
                        rotateY: -30,
                        scale: 0.8,
                    },
                    {
                        opacity: 1,
                        y: 0,
                        rotateY: 0,
                        scale: 1,
                        duration: 1,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: metric,
                            start: 'top 85%',
                            end: 'top 60%',
                            scrub: 1,
                        },
                    }
                );
            });

            // Animate achievement cards
            achievementsRef.current.forEach((achievement) => {
                if (!achievement) return;

                gsap.fromTo(
                    achievement,
                    {
                        opacity: 0,
                        y: 50,
                        scale: 0.9,
                    },
                    {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        duration: 0.8,
                        ease: 'power2.out',
                        scrollTrigger: {
                            trigger: achievement,
                            start: 'top 80%',
                            end: 'top 60%',
                            scrub: 1,
                        },
                    }
                );
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const metrics = [
        {
            icon: <FaBolt className="text-5xl text-yellow-400 mb-4" />,
            value: 60,
            suffix: "%",
            label: "Performance Improvement",
            description: "Reduced API response times through optimization and caching"
        },
        {
            icon: <FaUsers className="text-5xl text-blue-400 mb-4" />,
            value: 100,
            suffix: "K+",
            label: "Users Processed",
            description: "Scalable batch processing pipelines handling massive user bases"
        },
        {
            icon: <FaCode className="text-5xl text-green-400 mb-4" />,
            value: 10,
            suffix: "+",
            label: "Projects Delivered",
            description: "Production-ready features shipped across multiple platforms"
        },
        {
            icon: <FaChartLine className="text-5xl text-primary mb-4" />,
            value: 3,
            suffix: "+",
            label: "Years Experience",
            description: "Building scalable full-stack applications"
        }
    ];

    const achievements = [
        {
            title: "Optimization Master",
            description: "Transformed slow, inefficient APIs into lightning-fast endpoints through strategic database indexing, query optimization, and Redis caching.",
            impact: "60% reduction in response time"
        },
        {
            title: "Scale Architect",
            description: "Designed and implemented batch processing systems capable of handling 100K+ users per campaign with distributed task queues.",
            impact: "100K+ users processed"
        },
        {
            title: "Feature Velocity",
            description: "Consistently delivered complex features from concept to production, including booking flows, OTP systems, and real-time map integrations.",
            impact: "10+ production features"
        }
    ];

    return (
        <section ref={sectionRef} id="impact" className="py-20 bg-slate-950 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-30" />
            <div className="absolute bottom-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl opacity-30" />

            <div className="container mx-auto px-6 relative z-10">
                <SectionHeading
                    title="The Impact"
                    subtitle="Numbers tell a story. Here's the difference I've made."
                />

                {/* Metrics Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20" style={{ perspective: '1500px' }}>
                    {metrics.map((metric, index) => (
                        <div
                            key={index}
                            ref={(el) => { metricsRef.current[index] = el; }}
                            className="bg-slate-900 p-8 rounded-xl border border-slate-800 hover:border-primary/50 transition-all text-center group hover:-translate-y-2"
                        >
                            <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform">
                                {metric.icon}
                            </div>
                            <h3 className="text-5xl font-bold text-slate-100 mb-2">
                                <AnimatedCounter
                                    end={metric.value}
                                    suffix={metric.suffix}
                                />
                            </h3>
                            <p className="text-primary font-semibold text-lg mb-3">
                                {metric.label}
                            </p>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                {metric.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Achievements */}
                <div className="max-w-5xl mx-auto">
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold text-slate-100 text-center mb-12"
                    >
                        Key Victories
                    </motion.h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {achievements.map((achievement, index) => (
                            <div
                                key={index}
                                ref={(el) => { achievementsRef.current[index] = el; }}
                                className="bg-slate-900 p-6 rounded-xl border border-slate-800 hover:border-primary/50 transition-all"
                            >
                                <h4 className="text-xl font-bold text-slate-100 mb-3">
                                    {achievement.title}
                                </h4>
                                <p className="text-slate-300 mb-4 leading-relaxed">
                                    {achievement.description}
                                </p>
                                <div className="pt-4 border-t border-slate-800">
                                    <span className="text-primary font-semibold text-sm">
                                        📊 {achievement.impact}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Testimonial-style quote */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl mx-auto mt-16 text-center"
                >
                    <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-2xl border border-slate-700 relative">
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-slate-900 w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold">
                            "
                        </div>
                        <p className="text-slate-300 text-lg italic leading-relaxed mt-4">
                            I don't just write code—I craft solutions that make a measurable difference.
                            Every optimization, every feature, every line of code is driven by a commitment to excellence and impact.
                        </p>
                        <p className="text-primary font-semibold mt-4">
                            — Syed Arqum
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
