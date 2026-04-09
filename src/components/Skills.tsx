import { SectionHeading } from './ui/SectionHeading';
import { FaReact, FaDatabase, FaServer, FaDocker } from 'react-icons/fa';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Skills = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        if (!sectionRef.current) return;

        const ctx = gsap.context(() => {
            cardsRef.current.forEach((card) => {
                if (!card) return;

                // Staggered reveal with scale and rotation
                gsap.fromTo(
                    card,
                    {
                        opacity: 0,
                        scale: 0.5,
                        rotateY: 90,
                    },
                    {
                        opacity: 1,
                        scale: 1,
                        rotateY: 0,
                        duration: 1,
                        ease: 'back.out(1.7)',
                        scrollTrigger: {
                            trigger: card,
                            start: 'top 85%',
                            end: 'top 65%',
                            scrub: 1,
                        },
                    }
                );
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const skills = [
        {
            category: "Backend Frameworks",
            icon: <FaServer className="text-4xl text-primary mb-4" />,
            items: ["Python", "Django & DRF", "FastAPI", "Node.js", "Express.js", "Celery", "SQLAlchemy"]
        },
        {
            category: "Frontend & UI",
            icon: <FaReact className="text-4xl text-blue-400 mb-4" />,
            items: ["React.js", "AngularJS", "JavaScript", "HTML5", "CSS3", "TailwindCSS"]
        },
        {
            category: "Databases & Storage",
            icon: <FaDatabase className="text-4xl text-green-400 mb-4" />,
            items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Firebase", "AWS S3"]
        },
        {
            category: "Cloud & AI",
            icon: <FaDocker className="text-4xl text-blue-500 mb-4" />,
            items: ["AWS & Docker", "CI/CD & Nginx", "Chatbot Dev", "Voice Rec Integration", "Pub/Sub & WebSockets"]
        }
    ];

    return (
        <section ref={sectionRef} id="skills" className="py-20 bg-slate-950">
            <div className="container mx-auto px-6">
                <SectionHeading title="The Arsenal" subtitle="Every hero needs the right tools. Here's what I've mastered on my journey." />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" style={{ perspective: '1200px' }}>
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            ref={(el) => { cardsRef.current[index] = el; }}
                            className="bg-slate-900 p-6 rounded-xl border border-slate-800 hover:border-primary/50 transition-all hover:-translate-y-2"
                        >
                            <div className="flex flex-col items-center text-center">
                                {skill.icon}
                                <h3 className="text-xl font-bold text-slate-200 mb-4">{skill.category}</h3>
                                <ul className="space-y-2">
                                    {skill.items.map((item, i) => (
                                        <li key={i} className="text-slate-400 text-sm">{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
