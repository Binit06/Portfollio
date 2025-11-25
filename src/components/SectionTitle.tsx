import React from 'react';
import type { LucideIcon } from 'lucide-react';

interface SectionTitleProps {
  icon: LucideIcon;
  title: string;
  subtitle?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ icon: Icon, title, subtitle }) => (
  <div className="mb-12">
    <div className="flex items-center gap-3 mb-2">
      <Icon className="text-green-500" size={28} />
      <h2 className="text-3xl font-bold text-white">{title}</h2>
    </div>
    <div className="h-1 w-20 bg-green-500 rounded-full mb-4"></div>
    {subtitle && <p className="text-slate-400">{subtitle}</p>}
  </div>
);

export default SectionTitle;
