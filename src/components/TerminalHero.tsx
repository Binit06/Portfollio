import React from 'react';
import { Github, Linkedin, Mail, ChevronDown, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../constants';
import SpotlightBorder from './SpotlightBorder'; // Import the new component

const TerminalHero: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden bg-slate-950 pt-20">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute inset-0 bg-slate-950 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,transparent_70%,black)]"></div>
      
      {/* Glowing Orb in background */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-green-500/20 rounded-full blur-[120px] pointer-events-none"
      />

      <div className="w-full max-w-4xl px-6 relative z-10">
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <SpotlightBorder className="w-full shadow-2xl">
                <div className="bg-slate-900/50 p-4 flex items-center gap-2 border-b border-slate-800">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                    </div>
                    <div className="flex-1 text-center">
                        <span className="text-xs text-slate-500 font-mono flex items-center justify-center gap-2">
                            <Terminal size={12} />
                            zsh — {PERSONAL_INFO.name.toLowerCase()}
                        </span>
                    </div>
                </div>
                
                <div className="p-8 md:p-12 font-mono text-slate-300 space-y-6 bg-slate-950/80 backdrop-blur-sm">
                    <div className="space-y-2">
                        <div className="flex gap-2 items-center text-sm md:text-base">
                            <span className="text-green-400">➜</span>
                            <span className="text-blue-400">~</span>
                            <span className="text-yellow-300">init_portfolio.sh</span>
                        </div>
                        <motion.h1 
                            initial={{ clipPath: 'polygon(0 0, 0 100%, 0 100%, 0 0)' }}
                            animate={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
                            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
                            className="text-4xl md:text-7xl font-bold text-white tracking-tight"
                        >
                            {PERSONAL_INFO.name}
                        </motion.h1>
                        <motion.p 
                             initial={{ opacity: 0 }}
                             animate={{ opacity: 1 }}
                             transition={{ delay: 1 }}
                             className="text-xl md:text-2xl text-slate-400 font-light"
                        >
                            {PERSONAL_INFO.role}
                        </motion.p>
                    </div>

                    <motion.div 
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }} 
                        transition={{ delay: 1.5 }}
                        className="pl-4 border-l-2 border-slate-800 space-y-2 text-sm md:text-base"
                    >
                        <p className="text-slate-400">
                            <span className="text-blue-400">const</span> mission = <span className="text-green-400">"{PERSONAL_INFO.tagline}"</span>;
                        </p>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 2 }}
                        className="pt-6 flex flex-wrap gap-4"
                    >
                        {[
                            { icon: Github, label: "GitHub", href: PERSONAL_INFO.github },
                            { icon: Linkedin, label: "LinkedIn", href: PERSONAL_INFO.linkedin },
                            { icon: Mail, label: "Contact", href: `mailto:${PERSONAL_INFO.email}`, primary: true }
                        ].map((btn, i) => (
                            <a 
                                key={i} 
                                href={btn.href}
                                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                                    btn.primary 
                                    ? 'bg-green-600 hover:bg-green-500 text-white shadow-lg shadow-green-500/20' 
                                    : 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700'
                                }`}
                            >
                                <btn.icon size={18} /> {btn.label}
                            </a>
                        ))}
                    </motion.div>
                </div>
            </SpotlightBorder>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }} 
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 text-slate-500"
      >
        <ChevronDown size={32} />
      </motion.div>
    </div>
  );
};

export default TerminalHero;