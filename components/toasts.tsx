import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';


interface ToastProps {
    message: string;
    type: 'success' | 'error';
    isVisible: boolean;
    onClose: () => void;
}

const toastVariants = {
    initial: {
        opacity: 0,
        y: 50,
        scale: 0.3,
    },
    animate: {
        opacity: 1,
        y: 0,
        scale: 1,
    },
    exit: {
        opacity: 0,
        scale: 0.5,
        transition: {
            duration: 0.2,
        },
    },
};

const Toast = ({ message, type, isVisible, onClose }: ToastProps) => {
    const bgColor = type === 'success' ? 'bg-green-500' : 'bg-red-500';

    // Auto-close after 3 seconds
    useEffect(() => {
        if (isVisible) {
            const timer = setTimeout(() => {
                onClose();
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [isVisible, onClose]);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className={`fixed bottom-4 right-4 px-6 py-3 rounded-lg text-white ${bgColor} shadow-lg`}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={toastVariants}
                >
                    <div className="flex items-center gap-2">
                        {type === 'success' ? (
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                        ) : (
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        )}
                        <span>{message}</span>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Toast;