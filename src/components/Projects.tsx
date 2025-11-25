import React from 'react';
import { Database, Github, ExternalLink, Code2, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';
import SectionTitle from './SectionTitle';
import SpotlightCard from './SpotlightCard';

const Projects: React.FC = () => {
  return (
    <section className="py-24 bg-slate-950 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <SectionTitle icon={Database} title="Featured Projects" subtitle="Scalable solutions solving real-world problems." />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
            >
                <SpotlightCard className="h-full flex flex-col group">
                    <div className="p-8 flex-grow flex flex-col">
                        <div className="flex justify-between items-start mb-6">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-green-500/10 rounded-lg">
                                    <Code2 className="text-green-500" size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors">
                                {project.title}
                                </h3>
                            </div>
                            <div className="flex gap-3">
                              {project.github !== "Private" ? (
                                  <a href={project.github} className="text-slate-400 hover:text-white hover:bg-slate-800 p-2 rounded-full transition-all" target="_blank">
                                      <Github size={20} />
                                  </a>
                              ) : (
                                  <div className="text-slate-600 bg-slate-800/50 p-2 rounded-full cursor-not-allowed" title="This repository is private">
                                      <Github size={20} />
                                  </div>
                              )}

                              {project.link !== "Private" ? (
                                  <a href={project.link} className="text-slate-400 hover:text-white hover:bg-slate-800 p-2 rounded-full transition-all" target="_blank">
                                      <ExternalLink size={20} />
                                  </a>
                              ) : (
                                  <div className="text-slate-600 bg-slate-800/50 p-2 rounded-full cursor-not-allowed" title="This project is private">
                                      <ExternalLink size={20} />
                                  </div>
                              )}
                          </div>
                        </div>
                        
                        <p className="text-slate-400 mb-6 text-sm leading-relaxed flex-grow">
                            {project.description}
                        </p>

                        {project.stats && (
                            <div className="mb-6 p-3 bg-slate-950/30 rounded-lg border border-slate-800/50 flex items-center gap-2">
                                <Star size={14} className="text-yellow-500" />
                                <span className="text-slate-300 text-xs font-mono">{project.stats}</span>
                            </div>
                        )}

                        <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-slate-800/50">
                            {project.tags.map(tag => (
                            <span key={tag} className="text-xs font-medium text-green-300/80 bg-green-900/20 px-2.5 py-1 rounded-full">
                                {tag}
                            </span>
                            ))}
                        </div>
                    </div>
                </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;