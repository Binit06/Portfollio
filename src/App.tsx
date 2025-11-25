import React from 'react';
import TerminalHero from './components/TerminalHero';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Awards from './components/Awards';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-200 selection:bg-green-500/30 relative">
       <div className="fixed inset-0 z-50 pointer-events-none opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
       
       <TerminalHero />
       <TechStack />
       <Projects />
       <Experience />
       <Awards />
       <Footer />
    </div>
  );
};

export default App;