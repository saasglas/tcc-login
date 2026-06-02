import React, { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { Lock, Eye, EyeOff, ArrowRight, UserPlus } from 'lucide-react';

// Aqui está o CNPJInput ajustado
function CNPJInput({ value, onChange, error }: { value: string, onChange: (val: string) => void, error?: string }) {
  return (
    <div className="flex flex-col gap-1.5 w-full">
      <label className="text-[10px] uppercase tracking-widest font-bold text-pink-primary ml-2">
        CNPJ
      </label>
      <div className="flex items-center gap-3 bg-dark-bg shadow-[inset_2px_5px_10px_rgba(0,0,0,0.5)] border border-white/5 rounded-2xl px-4 py-3.5 input-glow transition-all">
        <UserPlus size={18} className="text-dark-gray" />
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="00.000.000/0000-00"
          className="bg-transparent border-none outline-none w-full text-white placeholder:text-dark-gray/50 text-sm"
        />
      </div>
      {error && <span className="text-xs text-pink-primary ml-2">{error}</span>}
    </div>
  );
}

export default function LoginCard() {
  const [cnpj, setCnpj] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (cnpj.length < 18) {
      setError('CNPJ incompleto');
      return;
    }
    setError(null);
    setLoading(true);
    // Simulate loading
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <motion.div 
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="p-[1px] rounded-[24px] bg-gradient-to-br from-pink-primary via-purple-vibrant to-dark-bg shadow-[0_0_30px_rgba(235,37,146,0.2)] w-full max-w-[400px] group transition-all duration-500 hover:shadow-[0_0_40px_rgba(235,37,146,0.3)]"
    >
      <div className="bg-[#171717] rounded-[23px] p-8 md:p-10 flex flex-col gap-6">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold font-archivo tracking-tight text-white">
            Acesse o sistema
          </h2>
          <p className="text-sm text-dark-gray">
            Entre com o CNPJ da sua empresa
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <CNPJInput 
            value={cnpj} 
            onChange={(val) => { setCnpj(val); setError(null); }} 
            error={error || undefined}
          />

          <div className="flex flex-col gap-1.5 w-full">
            <label className="text-[10px] uppercase tracking-widest font-bold text-pink-primary ml-2">
              Senha
            </label>
            <div className="flex items-center gap-3 bg-dark-bg shadow-[inset_2px_5px_10px_rgba(0,0,0,0.5)] border border-white/5 rounded-2xl px-4 py-3.5 input-glow transition-all">
              <Lock size={18} className="text-dark-gray" />
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="bg-transparent border-none outline-none w-full text-white placeholder:text-dark-gray/50 text-sm"
              />
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-dark-gray hover:text-pink-primary transition-colors cursor-pointer"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            <div className="flex justify-end">
              <button 
                type="button" 
                className="text-xs text-purple-vibrant hover:underline font-medium transition-colors cursor-pointer"
              >
                Esqueci minha senha
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="group relative mt-4 overflow-hidden rounded-2xl bg-pink-primary py-4 text-sm font-bold text-white transition-all hover:bg-pink-dark active:scale-95 disabled:opacity-70 shadow-lg shadow-pink-primary/20 cursor-pointer"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              {loading ? (
                <>
                  <div className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                  Entrando...
                </>
              ) : (
                <>
                  Entrar no sistema
                </>
              )}
            </span>
          </button>
        </form>

        <div className="relative flex items-center py-2">
          <div className="flex-grow border-t border-white/10"></div>
          <span className="flex-shrink mx-4 text-[10px] text-dark-gray uppercase tracking-widest font-bold">
            ou
          </span>
          <div className="flex-grow border-t border-white/10"></div>
        </div>

        <div className="text-center space-y-4">
          <p className="text-xs text-dark-gray font-medium">Ainda não tem acesso?</p>
          <button className="w-full flex items-center justify-center gap-2 rounded-2xl border border-white/10 py-3 text-xs font-bold text-white transition-all hover:bg-white/5 hover:border-pink-primary/30 cursor-pointer">
            Solicitar cadastro
          </button>
        </div>
      </div>
    </motion.div>
  );
}