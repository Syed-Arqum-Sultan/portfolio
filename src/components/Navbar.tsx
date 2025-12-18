import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'The Beginning', to: 'journey' },
        { name: 'The Arsenal', to: 'skills' },
        { name: 'The Challenges', to: 'projects' },
        { name: 'The Impact', to: 'impact' },
        { name: 'Next Chapter', to: 'contact' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg py-4' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <Link to="hero" smooth={true} duration={500} className="text-2xl font-bold text-primary cursor-pointer">
                    SA.
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.to}
                            smooth={true}
                            duration={500}
                            className="text-slate-300 hover:text-primary cursor-pointer transition-colors font-medium"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="flex gap-4 ml-4 border-l border-slate-700 pl-4">
                        <a href="https://github.com/Syed-Arqum-Sultan" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-primary text-xl"><FaGithub /></a>
                        <a href="https://www.linkedin.com/in/syed-arqum-sultan" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-primary text-xl"><FaLinkedin /></a>
                    </div>
                </div>

                {/* Mobile Toggle */}
                <button className="md:hidden text-2xl text-slate-300" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-slate-800 overflow-hidden"
                    >
                        <div className="flex flex-col items-center py-8 gap-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.to}
                                    smooth={true}
                                    duration={500}
                                    onClick={() => setIsOpen(false)}
                                    className="text-slate-300 hover:text-primary text-lg font-medium cursor-pointer"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};
