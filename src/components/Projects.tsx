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
            title: "The Quest for Seamless Bookings",
            description: "A complex multi-step journey where users needed to book cars effortlessly. The challenge? Slow APIs, complex location selection, and security concerns.",
            fullDescription: "The Challenge: Users were abandoning bookings due to slow performance and confusing workflows. The Journey: I architected a complete solution with optimized database queries, real-time Google Maps integration, and secure OTP verification. The Victory: A lightning-fast booking system that handles thousands of users daily.",
            tags: ["Angular", "Django", "Google Maps", "Redis"],
            image: "/car-rental.png",
            challenge: "Users faced slow booking processes, confusing multi-step flows, and security vulnerabilities in the car rental system.",
            journey: "Redesigned the entire booking architecture from the ground up. Implemented database indexing and query optimization, reducing API response time by 60%. Built an intuitive multi-step wizard with real-time Google Maps integration featuring custom polygons for service areas. Added secure OTP verification using Firebase for both email and SMS.",
            victory: "Delivered a blazing-fast booking system with 60% faster APIs, seamless map-based location selection, and bank-grade security. User completion rates increased significantly.",
            features: [
                "Multi-step booking wizard with progress tracking",
                "Real-time Google Maps integration with custom markers and polygons",
                "Email and SMS OTP verification using Firebase",
                "Database query optimization with indexing and stored procedures",
                "Reusable Angular components for consistent UI",
                "Redis caching for improved performance"
            ],
            technologies: ["Angular", "TypeScript", "Django", "Django REST Framework", "PostgreSQL", "Redis", "Google Maps API", "Firebase"],
            challenges: [
                "Optimized slow API endpoints by implementing database indexing and query refactoring, reducing response time by 60%",
                "Designed complex polygon-based location selection on Google Maps with real-time updates",
                "Implemented secure OTP flow with rate limiting and expiration handling"
            ],
            link: "#"
        },
        {
            title: "The Security Fortress",
            description: "Building an impenetrable authentication system that's both secure and user-friendly. The mission? Unified OTP verification across email and SMS.",
            fullDescription: "The Challenge: Users needed a secure yet seamless way to verify their identity across multiple channels. The Journey: I built a robust dual-channel OTP system with Firebase integration, custom email services, and dynamic document validation. The Victory: A security system that's both bulletproof and delightful to use.",
            tags: ["Python", "Firebase", "Security", "API"],
            image: "/otp-verification.png",
            challenge: "The platform needed a secure, reliable authentication system supporting both email and SMS verification with document upload capabilities.",
            journey: "Architected a unified verification flow leveraging Firebase for SMS delivery and a custom email service for email OTPs. Implemented rate limiting, expiration handling, and retry logic to prevent abuse. Built dynamic document validation with file type and size restrictions. Created reusable UI components for a consistent verification experience.",
            victory: "Shipped a production-ready authentication system handling thousands of verifications daily with zero security incidents. Users can verify via their preferred channel seamlessly.",
            features: [
                "Dual-channel OTP delivery (Email + SMS)",
                "Firebase integration for secure SMS delivery",
                "Custom email service with templating",
                "Dynamic document upload with validation",
                "Reusable OTP input components",
                "Rate limiting and security measures"
            ],
            technologies: ["Python", "Django", "Firebase Admin SDK", "Celery", "Redis", "React", "TypeScript"],
            challenges: [
                "Implemented unified verification flow supporting both email and SMS with fallback mechanisms",
                "Designed secure OTP generation and validation with expiration and retry logic",
                "Built dynamic document validation system with file type and size restrictions"
            ],
            link: "#"
        },
        {
            title: "The Automation Engine",
            description: "Scaling marketing campaigns to reach 100K+ users without breaking a sweat. The challenge? Automated promo codes, user segmentation, and scheduled tasks.",
            fullDescription: "The Challenge: Marketing teams needed to run massive promotional campaigns targeting specific user segments at scale. The Journey: I built an enterprise-grade automation platform with Celery for distributed task processing, flexible user segmentation, and automated promo code generation. The Victory: A system that processes 100K+ users per campaign reliably and efficiently.",
            tags: ["Django", "Celery", "Automation", "Batch Processing"],
            image: "/automation.png",
            challenge: "Marketing teams struggled to run large-scale promotional campaigns efficiently. Manual processes were slow, error-prone, and couldn't handle the scale needed.",
            journey: "Designed a scalable automation pipeline using Django and Celery with RabbitMQ for reliable distributed task execution. Built a flexible user segmentation engine with complex filtering logic. Implemented automated promo code generation with customizable patterns. Added real-time monitoring dashboards and email notifications for campaign results.",
            victory: "Delivered an automation powerhouse processing 100K+ users per campaign with real-time progress tracking. Marketing teams can now launch campaigns in minutes instead of days.",
            features: [
                "Automated promo code generation with customizable patterns",
                "User segmentation based on multiple criteria",
                "Scheduled task execution with cron-like syntax",
                "Batch processing with progress tracking",
                "Real-time monitoring dashboard",
                "Email notification system for campaign results"
            ],
            technologies: ["Django", "Celery", "RabbitMQ", "PostgreSQL", "Redis", "Django Management Commands"],
            challenges: [
                "Designed scalable batch-processing pipeline handling 100K+ users per campaign",
                "Implemented distributed task queue with Celery and RabbitMQ for reliable execution",
                "Built flexible user segmentation engine with complex filtering logic"
            ],
            link: "#"
        }
    ];

    return (
        <>
            <section ref={sectionRef} id="projects" className="py-20 bg-slate-900">
                <div className="container mx-auto px-6">
                    <SectionHeading title="The Challenges" subtitle="Every great developer faces epic quests. Here are mine—and how I conquered them." />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" style={{ perspective: '1000px' }}>
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
