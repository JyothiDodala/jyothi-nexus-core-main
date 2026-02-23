import { motion } from "framer-motion";
import { Download, FileText } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const RESUME_URL = "/Jyothi_resume.pdf";

const ResumeSection = () => (
  <SectionWrapper id="resume">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
      My <span className="gradient-text">Resume</span>
    </h2>
    <p className="text-muted-foreground text-center mb-12 max-w-md mx-auto text-sm">
      Download my latest resume
    </p>

    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="max-w-lg mx-auto glass rounded-2xl p-8 md:p-10 text-center gradient-border neon-glow"
    >
      <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
        <FileText size={28} className="text-primary" />
      </div>
      <h3 className="text-xl font-semibold mb-3 text-foreground">
        Jyothi Dodali
      </h3>
      <p className="text-muted-foreground text-sm mb-8 leading-relaxed">
        Full Stack Developer with expertise in MERN stack, Python, and AI/ML.
        Final-year B.Tech CSE student passionate about building intelligent solutions.
      </p>
      <a
        href={RESUME_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-glow inline-flex items-center gap-2 px-8 py-3 rounded-lg text-primary-foreground font-semibold text-sm"
      >
        <Download size={16} />
        Download Resume
      </a>
    </motion.div>
  </SectionWrapper>
);

export default ResumeSection;
