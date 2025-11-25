import React from 'react';
import { Trophy, Award } from 'lucide-react';
import { ACHIEVEMENTS } from '../constants';

const Awards: React.FC = () => {
    return (
        <section className="py-24 relative overflow-hidden bg-slate-950 border-t border-slate-900">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-green-500/5 blur-[100px] rounded-full pointer-events-none"></div>
            
            <div className="max-w-4xl mx-auto relative z-10 px-6">
                 
                 <div className="flex flex-col items-center mb-12 text-center">
                    <div className="inline-flex p-3 rounded-full bg-green-500/10 text-green-500 mb-4 ring-1 ring-green-500/20 shadow-[0_0_15px_rgba(34,197,94,0.2)]">
                        <Trophy size={28} />
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-2">Honors & Awards</h2>
                    <p className="text-slate-400">Recognition of my work and contributions.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {ACHIEVEMENTS.map((award, idx) => (
                        <div 
                            key={idx} 
                            className="group relative flex items-start gap-4 p-5 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-green-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_5px_15px_rgba(0,0,0,0.3),0_0_15px_rgba(34,197,94,0.05)] overflow-hidden backdrop-blur-sm"
                        >
                             <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-500/5 to-transparent -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out pointer-events-none"></div>

                             <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-slate-900 border border-slate-800 text-slate-400 group-hover:text-green-500 group-hover:border-green-500/50 group-hover:scale-110 transition-all duration-300 shadow-sm relative z-10">
                                <Award size={24} />
                             </div>
                             
                             <div className="flex-1 pt-1 relative z-10">
                                <p className="text-slate-300 font-medium leading-relaxed group-hover:text-green-50 transition-colors">
                                    {award}
                                </p>
                             </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Awards;