import { useRouter } from 'next/router';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

const Transition = ({ children }) => {
	const { asPath } = useRouter();
    const shouldReduceMotion = useReducedMotion();

    const variants = {
        out: {
            opacity: 0,
            y: 40,
            transition: {
                duration: 0.4
            }
        },
        in: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                delay: 0.3
            }
        }
    };

    return (
		<div className="effect-1">
			<AnimatePresence
                initial={false}
                mode='wait'
                onExitComplete={() => window.scrollTo(0, 0)}
            >
                <motion.div
                    key={asPath}
                    variants={!shouldReduceMotion ? variants : null}
                    animate="in"
                    initial="out"
                    exit="out"
                >
                    {children}
                </motion.div>
	        </AnimatePresence>
		</div>
	);
};

export default Transition;