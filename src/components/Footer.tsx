import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export const Footer = () => {
    return (
        <footer className="bg-slate-950 py-8 border-t border-slate-800">
            <div className="container mx-auto px-6 text-center">
                <div className="flex justify-center gap-6 mb-4">
                    <a href="https://github.com/Syed-Arqum-Sultan" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary text-2xl transition-colors"><FaGithub /></a>
                    <a href="https://www.linkedin.com/in/syed-arqum-sultan" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary text-2xl transition-colors"><FaLinkedin /></a>
                    <a href="mailto:syedarqum1999@gmail.com" className="text-slate-400 hover:text-primary text-2xl transition-colors"><FaEnvelope /></a>
                </div>
                <p className="text-slate-500">© {new Date().getFullYear()} Syed Arqum. All rights reserved.</p>
            </div>
        </footer>
    );
};
