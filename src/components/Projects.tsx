import { SectionHeading } from './ui/SectionHeading';
import { Button } from './ui/Button';
import { useState, useEffect, useRef } from 'react';
import { ProjectModal } from './ProjectModal';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Projects = () => {
    const [selectedProject, setSelectedProject] = useState<number | null>(null);
    const sectionRef = useRef<HTMLElement>(null);
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        if (!sectionRef.current) return;

        const ctx = gsap.context(() => {
            cardsRef.current.forEach((card) => {
                if (!card) return;

                // Staggered reveal with rotation
                gsap.fromTo(
                    card,
                    {
                        opacity: 0,
                        y: 100,
                        rotateX: -15,
                    },
                    {
                        opacity: 1,
                        y: 0,
                        rotateX: 0,
                        duration: 1,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: card,
                            start: 'top 85%',
                            end: 'top 60%',
                            scrub: 1,
                        },
                    }
                );
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const projects = [
        {
            title: "Car Rental Platform",
            description: "Built a peer-to-peer car rental system with real-time availability and booking conflict prevention. Designed dynamic pricing and vendor-based booking workflows.",
            fullDescription: "The Challenge: Building a scalable peer-to-peer car rental platform requiring real-time availability checks, dynamic pricing, and secure vendor flows. The Journey: I architected a complete solution with dynamic pricing, conflict prevention, and OTP-based authentication. The Victory: A robust, high-availability platform successfully managing complex bookings seamlessly.",
            tags: ["Django", "Firebase", "Mandrill", "FastAPI"],
            image: "/car-rental.png",
            challenge: "Implementing real-time availability and preventing booking conflicts while handling dynamic pricing for vendors.",
            journey: "Architected a peer-to-peer car rental system from the ground up. Integrated Firebase for secure OTP authentication and automated email workflows via Mandrill. Designed dynamic pricing logic and extensive vendor-based booking workflows.",
            victory: "Successfully delivered a fast and secure car rental system that perfectly handles peer-to-peer vendor flows and dynamic pricing models.",
            features: [
                "Real-time availability and conflict prevention",
                "Dynamic pricing and vendor-based logic",
                "OTP authentication using Firebase",
                "Automated email workflows via Mandrill",
                "Peer-to-peer booking workflows"
            ],
            technologies: ["Django", "FastAPI", "Firebase", "Mandrill", "Python", "Redis", "PostgreSQL"],
            challenges: [
                "Designed complex vendor-based dynamic pricing models",
                "Prevented real-time booking conflicts by optimizing database transactions",
                "Integrated secure Firebase OTP flows and Mandrill email delivery"
            ],
            link: "#"
        },
        {
            title: "Real-Time Notification System",
            description: "Built an event-driven notification system processing thousands of events per minute. Implemented Redis Pub/Sub and WebSockets for real-time updates.",
            fullDescription: "The Challenge: Creating an event-driven notification architecture capable of processing thousands of events per minute without bottlenecks. The Journey: I utilized Redis Pub/Sub and WebSockets for instantaneous real-time updates and built fault-tolerant pipelines. The Victory: A highly scalable, fault-tolerant system reliably delivering critical notifications globally.",
            tags: ["Redis", "WebSockets", "AWS SES", "Twilio"],
            image: "/automation.png",
            challenge: "Processing thousands of events per minute and guaranteeing message delivery across SMS and Email without delays.",
            journey: "Designed an event-driven notification system processing high-throughput events. Leveraged Redis Pub/Sub combined with WebSockets for real-time frontend updates. Built fault-tolerant, scalable pipelines incorporating Twilio for SMS and AWS SES for email delivery.",
            victory: "Deployed a highly resilient notification engine that gracefully processes massive event loads and powers real-time user experiences.",
            features: [
                "Event-driven architecture for thousands of events/min",
                "Real-time updates via WebSockets",
                "Redis Pub/Sub integration",
                "Fault-tolerant SMS via Twilio",
                "High-volume email via AWS SES"
            ],
            technologies: ["Redis", "WebSockets", "AWS SES", "Twilio", "Python", "Celery", "RabbitMQ"],
            challenges: [
                "Scaling the event-driven system to process massive concurrent loads",
                "Guaranteeing zero message loss using fault-tolerant patterns",
                "Synchronizing real-time events to frontends through WebSockets"
            ],
            link: "#"
        }
    ];

    return (
        <>
            <section ref={sectionRef} id="projects" className="py-20 bg-slate-900">
                <div className="container mx-auto px-6">
                    <SectionHeading title="The Challenges" subtitle="Every great developer faces epic quests. Here are mine—and how I conquered them." />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto" style={{ perspective: '1000px' }}>
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                ref={(el) => { cardsRef.current[index] = el; }}
                                className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-primary/50 transition-all group cursor-pointer"
                                onClick={() => setSelectedProject(index)}
                            >
                                <div className="h-48 bg-slate-700 overflow-hidden relative">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold text-slate-100 mb-3">{project.title}</h3>
                                    <p className="text-slate-400 mb-6 line-clamp-3">{project.description}</p>
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tags.map((tag, i) => (
                                            <span key={i} className="px-3 py-1 bg-slate-900 text-primary text-xs rounded-full border border-slate-700">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <Button
                                        variant="outline"
                                        className="w-full"
                                        onClick={(e) => {
                                            e?.stopPropagation();
                                            setSelectedProject(index);
                                        }}
                                    >
                                        Read The Story
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <ProjectModal
                isOpen={selectedProject !== null}
                onClose={() => setSelectedProject(null)}
                project={selectedProject !== null ? projects[selectedProject] : null}
            />
        </>
    );
};
