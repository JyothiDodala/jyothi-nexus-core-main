import { motion } from "framer-motion";

const LoadingScreen = () => (
  <motion.div
    className="fixed inset-0 z-50 flex items-center justify-center bg-background"
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="flex flex-col items-center gap-6">
      <div className="relative h-16 w-16">
        <div className="absolute inset-0 rounded-full border-2 border-muted" />
        <div className="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-primary neon-glow" />
        <div className="absolute inset-2 animate-spin rounded-full border-2 border-transparent border-b-secondary" style={{ animationDirection: "reverse", animationDuration: "1.5s" }} />
      </div>
      <p className="font-mono text-sm text-muted-foreground tracking-widest uppercase">
        Loading<span className="animate-pulse-glow">...</span>
      </p>
    </div>
  </motion.div>
);

export default LoadingScreen;
