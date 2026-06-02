import Header from '../components/Header';
import LoginCard from '../components/LoginCard';
import { motion } from 'motion/react';

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-[#121212] relative overflow-hidden flex flex-col items-center justify-center px-4 py-20">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-pink-primary/10 rounded-full blur-[120px]" />
        <div className="absolute top-[40%] -right-[10%] w-[30%] h-[30%] bg-purple-primary/10 rounded-full blur-[120px]" />
        <div className="absolute -bottom-[10%] left-[20%] w-[35%] h-[35%] bg-pink-vibrant/5 rounded-full blur-[120px]" />
      </div>

      <Header />

      <main className="flex-1 w-full max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center z-10 py-12 md:py-24">
        
        {/* Left Side: Branding & Context */}
        <motion.div 
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="hidden md:flex flex-col gap-6 text-left"
        >
          <div className="inline-block self-start px-3 py-1 bg-pink-primary/10 border border-pink-primary/30 rounded-full text-pink-primary text-[10px] font-bold tracking-widest uppercase">
            Plataforma B2B
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold font-archivo tracking-tight leading-[1.1] text-white">
            Gerencie seus pedidos <br />
            <span className="text-purple-vibrant">com inteligência.</span>
          </h1>
          <p className="text-lg text-gray-muted max-w-md">
            Acesse nossa plataforma exclusiva para parceiros e agilize o faturamento da sua empresa em poucos cliques de forma rápida e segura.
          </p>
          
          <div className="flex gap-6 pt-4">
            <div className="p-5 bg-white/5 rounded-2xl border border-white/5 backdrop-blur-sm">
              <div className="text-2xl font-bold text-white">100%</div>
              <div className="text-[10px] text-dark-gray uppercase tracking-widest font-bold mt-1">Uptime Garantido</div>
            </div>
            <div className="p-5 bg-white/5 rounded-2xl border border-white/5 backdrop-blur-sm">
              <div className="text-2xl font-bold text-white">24H</div>
              <div className="text-[10px] text-dark-gray uppercase tracking-widest font-bold mt-1">Suporte Técnico</div>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Login Card */}
        <div className="flex justify-center md:justify-end">
          <LoginCard />
        </div>
      </main>

      <footer className="w-full p-8 text-center z-10">
        <p className="text-[10px] text-dark-surface uppercase tracking-[0.3em] font-bold">
          © 2024 Celslife. Segurança e Privacidade Garantidas.
        </p>
      </footer>
    </div>
  );
}
