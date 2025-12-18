import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';

interface ProjectModalProps {
    isOpen: boolean;
    onClose: () => void;
    project: {
        title: string;
        description: string;
        fullDescription: string;
        tags: string[];
        image: string;
        features: string[];
        technologies: string[];
        challenges: string[];
    } | null;
}

export const ProjectModal = ({ isOpen, onClose, project }: ProjectModalProps) => {
    if (!project) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/80 z-50 backdrop-blur-sm"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto"
                        onClick={onClose}
                    >
                        <div
                            onClick={(e) => e.stopPropagation()}
                            className="bg-slate-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-slate-700 shadow-2xl"
                        >
                            {/* Header */}
                            <div className="sticky top-0 bg-slate-900 border-b border-slate-800 p-6 flex justify-between items-center z-10">
                                <h2 className="text-3xl font-bold text-slate-100">{project.title}</h2>
                                <button
                                    onClick={onClose}
                                    className="text-slate-400 hover:text-primary transition-colors text-2xl"
                                >
                                    <FaTimes />
                                </button>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                {/* Image */}
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-64 object-cover rounded-xl mb-6"
                                />

                                {/* Description */}
                                <div className="mb-6">
                                    <h3 className="text-xl font-bold text-slate-200 mb-3">Overview</h3>
                                    <p className="text-slate-400 leading-relaxed">{project.fullDescription}</p>
                                </div>

                                {/* Technologies */}
                                <div className="mb-6">
                                    <h3 className="text-xl font-bold text-slate-200 mb-3">Technologies Used</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech, i) => (
                                            <span
                                                key={i}
                                                className="px-4 py-2 bg-slate-800 text-primary rounded-lg border border-slate-700"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Key Features */}
                                <div className="mb-6">
                                    <h3 className="text-xl font-bold text-slate-200 mb-3">Key Features</h3>
                                    <ul className="space-y-2">
                                        {project.features.map((feature, i) => (
                                            <li key={i} className="text-slate-400 flex items-start">
                                                <span className="text-primary mr-2">✓</span>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Challenges */}
                                <div>
                                    <h3 className="text-xl font-bold text-slate-200 mb-3">Technical Challenges</h3>
                                    <ul className="space-y-2">
                                        {project.challenges.map((challenge, i) => (
                                            <li key={i} className="text-slate-400 flex items-start">
                                                <span className="text-primary mr-2">•</span>
                                                {challenge}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};
