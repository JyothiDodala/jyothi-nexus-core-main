import { motion } from "framer-motion";
import { ArrowLeft, Github, Layers, Upload, MapPin, LogIn, Brain, Leaf } from "lucide-react";
import { useNavigate } from "react-router-dom";

import plantHome from "@/assets/plant-disease-home.png";
import plantLogin from "@/assets/plant-disease-login.png";
import plantUpload from "@/assets/plant-disease-upload.png";
import plantResult from "@/assets/plant-disease-result.png";
import plantMap from "@/assets/plant-disease-map.png";
import plantModel from "@/assets/plant-disease-model.png";

const screenshots = [
  { src: plantHome, label: "Home & Overview", icon: Leaf, desc: "Landing page with project introduction and AI-powered disease detection overview." },
  { src: plantLogin, label: "User Login", icon: LogIn, desc: "Secure authentication system for registered farmers and users." },
  { src: plantUpload, label: "Image Upload", icon: Upload, desc: "Simple interface to upload plant leaf images for disease analysis." },
  { src: plantResult, label: "Disease Prediction", icon: Brain, desc: "CNN model identifies the disease — here detecting Pepper Bell Bacterial Spot." },
  { src: plantMap, label: "Location Tracking", icon: MapPin, desc: "Google Maps integration to track and visualize disease spread geographically." },
  { src: plantModel, label: "CNN Architecture", icon: Layers, desc: "Sequential CNN model with 815K parameters for accurate classification." },
];

const PlantDiseaseProject = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="sticky top-0 z-50 glass border-b border-primary/10 backdrop-blur-xl"
      >
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center gap-4">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft size={18} />
            <span className="text-sm">Back to Portfolio</span>
          </button>
          <div className="ml-auto">
            <a
              href="https://github.com/jyothidodali/plant-disease-identification"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glow flex items-center gap-2 px-4 py-2 rounded-lg text-xs text-primary-foreground"
            >
              <Github size={14} />
              View Source
            </a>
          </div>
        </div>
      </motion.header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-mono text-primary tracking-widest uppercase mb-4 block">
            AI / Deep Learning Project
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Plant Disease <span className="gradient-text">Identification</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            An AI-powered collaborative platform that helps farmers instantly identify plant diseases 
            by photographing affected leaves. Built with CNN, Django, TensorFlow, and Google Maps integration 
            for real-time disease tracking and forecasting.
          </p>
          <div className="flex flex-wrap justify-center gap-2 mt-6">
            {["Python", "Django", "TensorFlow", "Keras", "CNN", "OpenCV", "Google Maps API"].map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 font-mono"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Key Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid sm:grid-cols-3 gap-4 mb-16"
        >
          {[
            { label: "815K+", sub: "Model Parameters" },
            { label: "15", sub: "Disease Classes" },
            { label: "Real-time", sub: "Predictions" },
          ].map((stat) => (
            <div key={stat.label} className="glass rounded-2xl p-6 text-center gradient-border">
              <div className="text-2xl font-bold gradient-text">{stat.label}</div>
              <div className="text-xs text-muted-foreground mt-1">{stat.sub}</div>
            </div>
          ))}
        </motion.div>

        {/* Screenshots */}
        <div className="grid md:grid-cols-2 gap-8">
          {screenshots.map((shot, i) => (
            <motion.div
              key={shot.label}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + i * 0.08 }}
              className="glass rounded-2xl overflow-hidden gradient-border group hover:neon-glow transition-all duration-300"
            >
              <div className="overflow-hidden">
                <img
                  src={shot.src}
                  alt={shot.label}
                  className="w-full h-56 object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <shot.icon size={16} className="text-primary" />
                  <h3 className="font-semibold text-foreground">{shot.label}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{shot.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PlantDiseaseProject;
