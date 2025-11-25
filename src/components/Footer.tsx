import React from 'react';
import { Github, Linkedin, Mail, Twitter, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const socialLinks = [
    { icon: Github, href: "https://github.com/Binit06", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/binit-lenka-710bb9283", label: "LinkedIn" },
    { icon: Twitter, href: "https://x.com/binit536", label: "Twitter" },
    { icon: Mail, href: "mailto:binitlenka@gmail.com", label: "Email" },
  ];

  return (
    <footer className="relative pt-20 pb-10 bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/50 to-slate-700/10 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center">
        
        <button 
            onClick={scrollToTop}
            className="group flex items-center gap-3 px-6 py-3 rounded-full bg-slate-900 border border-slate-800 hover:border-green-500/50 hover:bg-slate-900/80 transition-all duration-300 shadow-lg hover:shadow-green-500/20 mb-12"
        >
            <span className="text-slate-200 font-medium group-hover:text-green-400 transition-colors">Let's Connect</span>
            <ArrowUp size={18} className="text-slate-500 group-hover:text-green-400 group-hover:-translate-y-1 transition-all duration-300" />
        </button>

        <div className="flex gap-8 mb-8">
            {socialLinks.map((social, index) => (
                <a 
                    key={index}
                    href={social.href}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-slate-600 hover:text-green-400 transition-colors duration-300"
                    aria-label={social.label}
                >
                    <social.icon size={20} />
                </a>
            ))}
        </div>

        <div className="text-center space-y-2">
            <p className="text-slate-500 text-sm">
                Designed & Built by <span className="text-slate-300">Binit Lenka</span>
            </p>
            <p className="font-mono text-xs text-slate-700">
                <span className="text-green-900 mr-2">root@binit:~$</span>
                <span className="text-green-800">System.exit(0)</span>
            </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;