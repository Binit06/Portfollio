import React from 'react';
import { Trophy } from 'lucide-react';
import { ACHIEVEMENTS } from '../constants';

const Awards: React.FC = () => {
    return (
        <section className="py-20 bg-slate-900/30 px-6 border-t border-slate-900">
            <div className="max-w-4xl mx-auto">
                 <div className="flex items-center gap-3 mb-8 justify-center">
                    <Trophy className="text-yellow-500" size={24} />
                    <h2 className="text-2xl font-bold text-white">Honors & Awards</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {ACHIEVEMENTS.map((award, idx) => (
                        <div key={idx} className="flex items-center gap-3 bg-slate-950 p-4 rounded border border-slate-800">
                             <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></div>
                             <span className="text-slate-300 text-sm">{award}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Awards;