import React from 'react';
import { GitBranch, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';
import { EXPERIENCE } from '../constants';
import SectionTitle from './SectionTitle';

const Experience: React.FC = () => {
  return (
    <section className="py-24 bg-slate-950 px-6 relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <SectionTitle icon={GitBranch} title="Experience" subtitle="My professional journey." />
        
        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-800 before:to-transparent">
          {EXPERIENCE.map((exp, index) => (
            <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
            >
                {/* Icon on timeline */}
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-800 bg-slate-900 group-hover:border-green-500 transition-colors shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_10px_rgba(0,0,0,0.5)] z-10">
                    <Briefcase size={18} className="text-slate-400 group-hover:text-green-500 transition-colors" />
                </div>
                
                {/* Content Card */}
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-900/50 p-6 rounded-xl border border-slate-800 hover:border-green-500/30 transition-all duration-300 shadow-lg hover:shadow-green-500/5 backdrop-blur-sm">
                    <div className="flex items-center justify-between mb-2">
                        <h4 className="font-bold text-white text-lg">{exp.company}</h4>
                        <span className="text-green-400 text-xs font-mono bg-green-900/20 px-2 py-1 rounded">{exp.period}</span>
                    </div>
                    <div className="text-sm text-slate-400 font-medium mb-4">{exp.role}</div>
                    <ul className="space-y-2">
                        {exp.details.map((detail, idx) => (
                            <li key={idx} className="text-slate-400 text-sm flex items-start">
                                <span className="text-green-500 mr-2 mt-1.5">›</span>
                                <span className="leading-relaxed">{detail}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;