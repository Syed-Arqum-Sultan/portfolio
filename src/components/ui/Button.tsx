import { motion } from 'framer-motion';

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    variant?: 'primary' | 'outline';
    className?: string;
    href?: string;
    disabled?: boolean;
}

export const Button = ({ children, onClick, variant = 'primary', className = '', href, disabled = false }: ButtonProps) => {
    const baseStyles = "px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2";
    const variants = {
        primary: "bg-primary text-white hover:bg-emerald-600 shadow-lg hover:shadow-emerald-500/20",
        outline: "border-2 border-primary text-primary hover:bg-primary/10"
    };
    const disabledStyles = "opacity-50 cursor-not-allowed";

    if (href) {
        return (
            <motion.a
                href={href}
                whileHover={{ scale: disabled ? 1 : 1.05 }}
                whileTap={{ scale: disabled ? 1 : 0.95 }}
                className={`${baseStyles} ${variants[variant]} ${disabled ? disabledStyles : ''} ${className}`}
            >
                {children}
            </motion.a>
        );
    }

    return (
        <motion.button
            whileHover={{ scale: disabled ? 1 : 1.05 }}
            whileTap={{ scale: disabled ? 1 : 0.95 }}
            className={`${baseStyles} ${variants[variant]} ${disabled ? disabledStyles : ''} ${className}`}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </motion.button>
    );
};
