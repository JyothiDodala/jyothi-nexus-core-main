import { useState } from "react";
import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { ArrowRight, BookOpen } from "lucide-react";

const categories = ["All", "AI", "Web Development", "Career", "Tutorials"];

const blogs = [
  {
    title: "Getting Started with Machine Learning in 2026",
    excerpt: "A beginner-friendly guide to starting your ML journey with Python and popular frameworks.",
    category: "AI",
    date: "Jan 2026",
  },
  {
    title: "Building Scalable MERN Applications",
    excerpt: "Best practices and architecture patterns for building production-ready MERN stack apps.",
    category: "Web Development",
    date: "Dec 2025",
  },
  {
    title: "How I Landed My First Tech Internship",
    excerpt: "Tips, strategies, and resources that helped me break into the tech industry as a student.",
    category: "Career",
    date: "Nov 2025",
  },
  {
    title: "React Hooks Deep Dive: useEffect Patterns",
    excerpt: "Understanding common useEffect patterns, pitfalls, and best practices in React development.",
    category: "Tutorials",
    date: "Oct 2025",
  },
];

const BlogSection = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? blogs : blogs.filter((b) => b.category === active);

  return (
    <SectionWrapper id="blog">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
        My <span className="gradient-text">Blog</span>
      </h2>
      <p className="text-muted-foreground text-center mb-8 max-w-md mx-auto text-sm">
        Thoughts, tutorials & insights
      </p>

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-4 py-2 rounded-full text-xs font-mono transition-all duration-300 ${
              active === cat
                ? "btn-glow text-primary-foreground"
                : "glass text-muted-foreground hover:text-primary"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        {filtered.map((blog, i) => (
          <motion.article
            key={blog.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -4 }}
            className="glass rounded-2xl overflow-hidden gradient-border group hover:neon-glow transition-all duration-300"
          >
            <div className="h-36 bg-gradient-to-br from-primary/10 via-muted to-secondary/10 flex items-center justify-center">
              <BookOpen size={32} className="text-muted-foreground/50" />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-0.5 rounded">
                  {blog.category}
                </span>
                <span className="text-xs text-muted-foreground">{blog.date}</span>
              </div>
              <h3 className="text-base font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                {blog.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {blog.excerpt}
              </p>
              <button className="flex items-center gap-2 text-primary text-sm font-medium group/btn">
                Read More
                <ArrowRight
                  size={14}
                  className="transition-transform group-hover/btn:translate-x-1"
                />
              </button>
            </div>
          </motion.article>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default BlogSection;
