import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Linkedin, Github, Twitter, Mail } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const socials = [
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/jyothi-dodali-38b679259" },
  { icon: Github, label: "GitHub", href: "https://github.com/jyothidodali" },
  { icon: Twitter, label: "Twitter", href: "https://x.com/Jyothidodala" },
  { icon: Mail, label: "Email", href: "mailto:djyothiyadav487@gmail.com" },
];

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // placeholder
    alert("Thanks for reaching out! This is a demo form.");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <SectionWrapper id="contact">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
        Get In <span className="gradient-text">Touch</span>
      </h2>
      <p className="text-muted-foreground text-center mb-12 max-w-md mx-auto text-sm">
        Let's build something amazing together
      </p>

      <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-6 md:p-8 gradient-border space-y-5"
        >
          {[
            { name: "name" as const, label: "Name", type: "text" },
            { name: "email" as const, label: "Email", type: "email" },
            { name: "subject" as const, label: "Subject", type: "text" },
          ].map((field) => (
            <div key={field.name}>
              <label className="text-xs text-muted-foreground mb-1.5 block font-mono">
                {field.label}
              </label>
              <input
                type={field.type}
                required
                value={form[field.name]}
                onChange={(e) => setForm({ ...form, [field.name]: e.target.value })}
                className="w-full bg-muted/50 border border-border rounded-lg px-4 py-2.5 text-sm text-foreground outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all"
              />
            </div>
          ))}
          <div>
            <label className="text-xs text-muted-foreground mb-1.5 block font-mono">
              Message
            </label>
            <textarea
              required
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full bg-muted/50 border border-border rounded-lg px-4 py-2.5 text-sm text-foreground outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all resize-none"
            />
          </div>
          <button
            type="submit"
            className="btn-glow w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-primary-foreground font-semibold text-sm"
          >
            <Send size={16} />
            Send Message
          </button>
        </motion.form>

        {/* Social */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center items-center gap-6"
        >
          <p className="text-muted-foreground text-sm text-center leading-relaxed max-w-xs">
            Feel free to reach out for collaborations, opportunities, or just a friendly hello!
          </p>
          <div className="flex gap-4">
            {socials.map((s, i) => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="w-12 h-12 rounded-xl glass gradient-border flex items-center justify-center text-muted-foreground hover:text-primary hover:neon-glow transition-all duration-300"
                aria-label={s.label}
              >
                <s.icon size={20} />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default ContactSection;
