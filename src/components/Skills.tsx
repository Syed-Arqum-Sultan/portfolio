import { SectionHeading } from './ui/SectionHeading';
import { motion } from 'framer-motion';
import { FaPython, FaReact, FaDatabase, FaServer, FaDocker } from 'react-icons/fa';

export const Skills = () => {
    const skills = [
        {
            category: "Backend & APIs",
            icon: <FaServer className="text-4xl text-primary mb-4" />,
            items: ["Python", "Django", "FastAPI", "REST APIs", "WebSockets", "Microservices"]
        },
        {
            category: "Frontend",
            icon: <FaReact className="text-4xl text-blue-400 mb-4" />,
            items: ["React", "Angular", "TypeScript", "JavaScript", "TailwindCSS", "Framer Motion"]
        },
        {
            category: "Databases",
            icon: <FaDatabase className="text-4xl text-green-400 mb-4" />,
            items: ["PostgreSQL", "MySQL", "Redis", "Celery", "RabbitMQ"]
        },
        {
            category: "DevOps & Cloud",
            icon: <FaDocker className="text-4xl text-blue-500 mb-4" />,
            items: ["Docker", "Nginx", "AWS", "Azure", "GCP", "CI/CD"]
        }
    ];

    return (
        <section id="skills" className="py-20 bg-slate-950">
            <div className="container mx-auto px-6">
                <SectionHeading title="Technical Skills" subtitle="My technical toolkit for building robust applications." />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
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
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
