import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import profileImg from "@/assets/profile.jpg";

const stats = [
  { label: "Projects Completed", value: 10 },
  { label: "Technologies Known", value: 15 },
  { label: "Certifications", value: 5 },
  
];

const AnimatedCounter = ({ target }: { target: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1500;
          const steps = 40;
          const increment = target / steps;
          let current = 0;
          const interval = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(interval);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <div ref={ref} className="text-3xl md:text-4xl font-bold gradient-text">{count}+</div>;
};

const AboutSection = () => (
  <SectionWrapper id="about">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
      About <span className="gradient-text">Me</span>
    </h2>
    <p className="text-muted-foreground text-center mb-12 max-w-md mx-auto text-sm">
      Get to know me better
    </p>

    <div className="grid md:grid-cols-2 gap-10 items-center">
      {/* Avatar */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex justify-center"
      >
        <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-2xl glass neon-glow overflow-hidden gradient-border">
          <img src={profileImg} alt="Jyothi Dodali" className="w-full h-full object-cover" />
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 -z-10" />
        </div>
      </motion.div>

      {/* Bio */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="glass rounded-2xl p-6 md:p-8 gradient-border">
          <h3 className="text-xl font-semibold mb-4 text-foreground">
            Full Stack Developer & AI Enthusiast
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed mb-4">
            I'm a final-year B.Tech CSE (AI & ML) student passionate about building intelligent
            web applications. I combine strong full-stack development skills with a deep interest
            in artificial intelligence and machine learning.
          </p>
          <p className="text-muted-foreground text-sm leading-relaxed">
            My focus areas include building scalable web applications using the MERN stack,
            developing ML-powered solutions, and solving complex problems with clean,
            efficient code.
          </p>
        </div>
      </motion.div>
    </div>

    {/* Stats */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
      {stats.map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="glass rounded-xl p-6 text-center gradient-border hover:neon-glow transition-shadow duration-300"
        >
          <AnimatedCounter target={stat.value} />
          <p className="text-muted-foreground text-xs mt-2">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default AboutSection;
