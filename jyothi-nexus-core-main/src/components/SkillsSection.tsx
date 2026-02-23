import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", level: 90 },
      { name: "CSS", level: 85 },
      { name: "Bootstrap", level: 80 },
      { name: "JavaScript", level: 85 },
      { name: "React.js", level: 50 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 82 },
      { name: "Express.js", level: 80 },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "SQL", level: 78 },
    ],
  },
  {
    title: "Programming",
    skills: [
      { name: "Python", level: 85 },
    ],
  },
];

const SkillBar = ({ name, level, delay }: { name: string; level: number; delay: number }) => (
  <div className="mb-4">
    <div className="flex justify-between mb-1.5">
      <span className="text-sm text-foreground">{name}</span>
      <span className="text-xs text-muted-foreground font-mono">{level}%</span>
    </div>
    <div className="h-2 rounded-full bg-muted overflow-hidden">
      <motion.div
        className="h-full rounded-full"
        style={{
          background: "linear-gradient(90deg, hsl(192 95% 55%), hsl(270 80% 60%))",
        }}
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay, ease: "easeOut" }}
      />
    </div>
  </div>
);

const SkillsSection = () => (
  <SectionWrapper id="skills">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
      My <span className="gradient-text">Skills</span>
    </h2>
    <p className="text-muted-foreground text-center mb-12 max-w-md mx-auto text-sm">
      Technologies & tools I work with
    </p>

    <div className="grid sm:grid-cols-2 gap-6">
      {skillCategories.map((category, ci) => (
        <motion.div
          key={category.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: ci * 0.1 }}
          className="glass rounded-2xl p-6 gradient-border hover:neon-glow transition-shadow duration-300"
        >
          <h3 className="text-lg font-semibold mb-5 text-primary font-mono">
            {`// ${category.title}`}
          </h3>
          {category.skills.map((skill, si) => (
            <SkillBar
              key={skill.name}
              name={skill.name}
              level={skill.level}
              delay={ci * 0.1 + si * 0.08}
            />
          ))}
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default SkillsSection;
