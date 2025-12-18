import { SectionHeading } from './ui/SectionHeading';
import { motion } from 'framer-motion';
import { Button } from './ui/Button';
import { useState } from 'react';
import { ProjectModal } from './ProjectModal';

export const Projects = () => {
    const [selectedProject, setSelectedProject] = useState<number | null>(null);

    const projects = [
        {
            title: "Car Rental System",
            description: "A complete multi-step booking flow with OTP verification and dynamic Google Maps integration. Optimized database performance and designed reusable UI components.",
            fullDescription: "Developed a comprehensive car rental platform featuring a sophisticated multi-step booking process. The system integrates real-time Google Maps for location selection, OTP-based authentication for security, and optimized database queries for fast performance. Built with Angular for the frontend and Django REST Framework for the backend, the application handles complex booking workflows while maintaining a clean, intuitive user experience.",
            tags: ["Angular", "Django", "Google Maps", "Redis"],
            image: "/car-rental.png",
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
            title: "OTP Verification System",
            description: "Unified verification flow for email and SMS using Firebase. Features reusable UI components, secure delivery, and dynamic document validation.",
            fullDescription: "Built a robust authentication system that provides seamless OTP verification through both email and SMS channels. The system leverages Firebase for secure SMS delivery while implementing a custom email service. Features include dynamic document upload validation, reusable UI components, and comprehensive error handling to ensure a smooth user onboarding experience.",
            tags: ["Python", "Firebase", "Security", "API"],
            image: "/otp-verification.png",
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
            title: "Automation Pipelines",
            description: "Automated promo code generation and scheduled tasks targeting specific user segments. Implemented scalable batch-processing pipelines.",
            fullDescription: "Developed an enterprise-grade automation system for promotional campaign management. The platform enables marketing teams to create targeted campaigns with automated promo code generation, user segmentation, and scheduled task execution. Built on Django with Celery for distributed task processing, the system handles high-volume batch operations efficiently while providing real-time monitoring and reporting capabilities.",
            tags: ["Django", "Celery", "Automation", "Batch Processing"],
            image: "/automation.png",
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
            <section id="projects" className="py-20 bg-slate-900">
                <div className="container mx-auto px-6">
                    <SectionHeading title="Featured Projects" subtitle="Highlights of my recent work and contributions." />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-primary/50 transition-all group"
                            >
                                <div className="h-48 bg-slate-700 overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                    />
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
                                        onClick={() => setSelectedProject(index)}
                                    >
                                        View Details
                                    </Button>
                                </div>
                            </motion.div>
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
