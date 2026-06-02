import React from 'react';
import { Building2 } from 'lucide-react';

interface CNPJInputProps {
  value: string;
  onChange: (value: string) => void;
  error?: string;
}

export default function CNPJInput({ value, onChange, error }: CNPJInputProps) {
  const formatCNPJ = (val: string) => {
    const raw = val.replace(/\D/g, '').substring(0, 14);
    
    return raw
      .replace(/^(\d{2})(\d)/, '$1.$2')
      .replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3')
      .replace(/\.(\d{3})(\d)/, '.$1/$2')
      .replace(/(\d{4})(\d)/, '$1-$2');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatCNPJ(e.target.value);
    onChange(formatted);
  };

  return (
    <div className="flex flex-col gap-1.5 w-full">
      <label className="text-[10px] uppercase tracking-widest font-bold text-pink-primary ml-2">
        CNPJ
      </label>
      <div className={`
        flex items-center bg-[#1d1d1d] shadow-[inset_2px_5px_10px_rgba(0,0,0,0.5)] 
        rounded-2xl px-4 py-3.5 border border-white/5 transition-all duration-300
        input-glow
        ${error ? 'border-red-500/50' : ''}
      `}>
        <Building2 size={18} className="text-dark-gray" />
        <input
          type="text"
          value={value}
          onChange={handleChange}
          placeholder="00.000.000/0000-00"
          className="bg-transparent border-none outline-none w-full text-white placeholder:text-dark-gray/50 text-sm"
          autoComplete="off"
        />
      </div>
      {error && <span className="text-[10px] text-red-500 ml-2 font-medium">{error}</span>}
    </div>
  );
}
