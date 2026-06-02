import { motion } from 'motion/react';
import { LogIn } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-5xl z-50">
      <motion.div 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="glass-nav rounded-full px-6 py-3 flex items-center justify-between"
      >
        <a href="/" className="flex items-center gap-2">
          <img 
            alt="Celslife" 
            className="h-8 md:h-10" 
            src="https://www.celslife.com.br/img/celsbranco.png" 
          />
        </a>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#" className="font-archivo font-bold text-white/80 hover:text-white transition-colors text-sm uppercase tracking-wider">
            Sobre
          </a>
          <a href="#" className="font-archivo font-bold text-white/80 hover:text-white transition-colors text-sm uppercase tracking-wider">
            Como funciona
          </a>
          <a href="#" className="font-archivo font-bold text-white/80 hover:text-white transition-colors text-sm uppercase tracking-wider">
            Suporte
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-5 py-2 rounded-full text-sm font-bold font-archivo text-white hover:bg-white/10 transition-all cursor-pointer">
            <LogIn size={16} />
            Login
          </button>
          <button className="flex items-center gap-2 px-6 py-2 rounded-full text-sm font-bold font-archivo bg-pink-primary hover:bg-pink-dark text-white transition-all shadow-lg shadow-pink-primary/20 cursor-pointer">
            <span className="hidden sm:inline">Solicitar acesso</span>
            <span className="sm:hidden">Cadastro</span>
          </button>
        </div>
      </motion.div>
    </header>
  );
}