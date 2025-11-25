import React from "react";
import { Cpu } from "lucide-react";
import SectionTitle from "./SectionTitle";
import InfiniteLoop from "./InfiniteLoop";
import { SKILLS } from "../constants";

const SkillCard = ({ name }: { name: string }) => (
  <div className="flex items-center gap-2 px-4 py-2 bg-slate-900 border border-slate-800 rounded-lg whitespace-nowrap text-slate-300 shadow-md hover:border-green-500/50 hover:bg-slate-800 transition-colors">
    <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]"></div>
    <span className="font-mono text-sm font-semibold">{name}</span>
  </div>
);

const TechStack: React.FC = () => {
  const allSkills = [...SKILLS.languages, ...SKILLS.backend, ...SKILLS.devops, ...SKILLS.frontend];

  const half = Math.ceil(allSkills.length / 2);
  const row1 = allSkills.slice(0, half);
  const row2 = allSkills.slice(half, half * 2);

  const renderRow = (skills: string[]) => (
    <>
      {skills.map((s) => (
        <SkillCard key={s} name={s} />
      ))}
    </>
  );

  return (
    <section className="py-24 bg-slate-950 px-6 overflow-hidden border-t border-slate-900/50">
      <div className="max-w-6xl mx-auto mb-16">
        <SectionTitle icon={Cpu} title="Tech Stack" subtitle="My arsenal for building robust systems." />
      </div>

      <div className="space-y-6 md:space-y-8 -mx-6 md:mx-0">
        <InfiniteLoop direction="right" speed={35}>
          {renderRow(row1)}
        </InfiniteLoop>

        <InfiniteLoop direction="left" speed={45}>
          {renderRow(row2)}
        </InfiniteLoop>
      </div>
    </section>
  );
};

export default TechStack;
