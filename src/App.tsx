import React, { useState, useEffect, useRef } from 'react';
import { 
  Terminal, 
  ChevronRight, 
  Trophy, 
  Code2, 
  ShieldCheck, 
  Target, 
  MapPin, 
  ExternalLink,
  Github,
  Globe,
  User,
  Sword,
  Search,
  Hash
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from './lib/utils';

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// --- Terminal Component ---
const PortfolioTerminal = () => {
  const [commands, setCommands] = useState<{ cmd: string; output: string }[]>([
    { cmd: 'whoami', output: 'Muhammad Khairul (Rull). Programmer, Cyber Security, & 2k Elo Chess Player.' }
  ]);
  const [input, setInput] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);

  const availableCommands = {
    'help': 'Tampilkan bantuan komputer.',
    'about': 'Tentang diri saya.',
    'skills': 'Daftar skill yang saya miliki.',
    'goals': 'Visi dan misi ke depan.',
    'clear': 'Bersihkan terminal.',
    'chess': 'Statistik catur.'
  };

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.toLowerCase().trim();
    if (!cmd) return;

    let output = '';
    switch (cmd) {
      case 'help':
        output = 'Perintah tersedia: ' + Object.keys(availableCommands).join(', ');
        break;
      case 'about':
        output = 'Saya adalah Muhammad Khairul, dipanggil Rull. Seorang multitalenta yang mendalami pemrograman filosofis, cybersecurity, dan catur strategis.';
        break;
      case 'skills':
        output = 'Cyber Security, Programmer (Philosophy driven), Chess Grandmaster (Level 2000 Elo), Multitalent.';
        break;
      case 'goals':
        output = 'Menjadi ilmuwan hebat di Amerika Serikat dan bertemu dengan tokoh-tokoh besar dunia.';
        break;
      case 'chess':
        output = '4000+ games, 2000 Elo Rapid, Favorite: Italian & French Defense (80% WR).';
        break;
      case 'clear':
        setCommands([]);
        setInput('');
        return;
      default:
        output = `Error: Perintah '${cmd}' tidak ditemukan. Ketik 'help' untuk bantuan.`;
    }

    setCommands([...commands, { cmd: input, output }]);
    setInput('');
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [commands]);

  return (
    <div className="w-full bg-zinc-950 rounded-xl overflow-hidden terminal-shadow font-mono text-sm border border-zinc-800">
      <div className="bg-zinc-900 px-4 py-2 flex items-center gap-2 border-b border-zinc-800">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
        </div>
        <div className="text-zinc-500 text-xs ml-2">rull-terminal — bash</div>
      </div>
      <div 
        ref={scrollRef}
        className="p-4 h-64 overflow-y-auto text-zinc-300 selection:bg-zinc-700 selection:text-white"
      >
        <div className="mb-4 text-zinc-500 italic">Ketik 'help' untuk melihat perintah.</div>
        {commands.map((c, i) => (
          <div key={i} className="mb-3">
            <div className="flex items-center gap-2">
              <span className="text-emerald-400">rull@portfolio:~$</span>
              <span>{c.cmd}</span>
            </div>
            <div className="mt-1 text-zinc-400 leading-relaxed whitespace-pre-wrap">{c.output}</div>
          </div>
        ))}
        <form onSubmit={handleCommand} className="flex items-center gap-2">
          <span className="text-emerald-400">rull@portfolio:~$</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="bg-transparent border-none outline-none flex-1 text-zinc-300 p-0"
            autoFocus
          />
        </form>
      </div>
    </div>
  );
};

// --- Main App ---
export default function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Container - Optimized for mobile width but scales */}
      <div className="max-w-md mx-auto px-6 py-12 md:py-20 lg:max-w-xl transition-all duration-300">
        
        {/* Profile Card */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <div className="relative mb-6">
            <div className="w-32 h-32 rounded-3xl overflow-hidden border-4 border-zinc-100 shadow-xl group transition-transform hover:scale-105 active:scale-95 duration-300">
              <img 
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=80&w=256&h=256" // Default placeholder
                alt="Muhammad Khairul"
                className="w-full h-full object-cover"
                onError={(e) => {
                   e.currentTarget.src = "https://ui-avatars.com/api/?name=Muhammad+Khairul&background=f4f4f5&color=18181b&size=256";
                }}
              />
            </div>
            <div className="absolute -bottom-2 -right-2 bg-zinc-900 text-white p-2 rounded-xl shadow-lg border border-zinc-800">
              <Sword size={16} />
            </div>
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-zinc-900 mb-2">Muhammad Khairul</h1>
          <p className="text-zinc-500 font-medium mb-4">"Rull" &bull; Multitalenta</p>
          
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            <span className="inline-flex items-center px-3 py-1 bg-zinc-100 text-zinc-700 text-[10px] font-bold uppercase tracking-wider rounded-full border border-zinc-200">Chess Mastery</span>
            <span className="inline-flex items-center px-3 py-1 bg-zinc-100 text-zinc-700 text-[10px] font-bold uppercase tracking-wider rounded-full border border-zinc-200">Cyber Security</span>
            <span className="inline-flex items-center px-3 py-1 bg-zinc-100 text-zinc-700 text-[10px] font-bold uppercase tracking-wider rounded-full border border-zinc-200">Philosophy Coder</span>
          </div>
        </motion.section>

        {/* Info Grid - Cards */}
        <div className="grid gap-4 mb-12">
          {/* Dashboard Chess */}
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="p-6 rounded-3xl bg-zinc-50 border border-zinc-100 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <Trophy size={100} className="text-zinc-900" />
            </div>
            <div className="flex items-start gap-4 mb-4">
              <div className="p-2.5 bg-white shadow-sm border border-zinc-200 rounded-2xl">
                <Trophy size={20} className="text-amber-600" />
              </div>
              <div>
                <h3 className="font-bold text-zinc-900">Statistik Catur</h3>
                <p className="text-xs text-zinc-500">Username: Kingblundernow</p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-3 rounded-2xl shadow-sm border border-zinc-100 transition-hover hover:border-zinc-300">
                <p className="text-[10px] uppercase tracking-wider text-zinc-400 font-extrabold mb-1">Rapid Rating</p>
                <p className="text-xl font-bold text-zinc-900 tracking-tight">2000 Elo</p>
              </div>
              <div className="bg-white p-3 rounded-2xl shadow-sm border border-zinc-100 transition-hover hover:border-zinc-300">
                <p className="text-[10px] uppercase tracking-wider text-zinc-400 font-extrabold mb-1">Total Game</p>
                <p className="text-xl font-bold text-zinc-900 tracking-tight">4000+</p>
              </div>
            </div>
            
            <div className="mt-4 bg-white/50 p-4 rounded-2xl border border-zinc-200/50">
              <p className="text-[10px] uppercase tracking-widest text-zinc-400 font-extrabold mb-3">Opening Favorit:</p>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span className="text-[13px] font-medium text-zinc-600">Italian Game</span>
                  </div>
                  <span className="text-[13px] font-bold text-emerald-600">80% WR</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span className="text-[13px] font-medium text-zinc-600">French Defense</span>
                  </div>
                  <span className="text-[13px] font-bold text-emerald-600">80% WR</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Goals Card */}
          <motion.div 
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="p-6 rounded-3xl bg-zinc-900 text-white relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Target size={100} className="text-white" />
            </div>
            <div className="flex items-start gap-4 mb-4">
              <div className="p-2.5 bg-zinc-800 border border-zinc-700 rounded-2xl">
                <Target size={20} className="text-zinc-100" />
              </div>
              <h3 className="font-bold text-zinc-100">Impian & Visi</h3>
            </div>
            <p className="text-[15px] text-zinc-300 leading-relaxed mb-6 font-medium">
              Menjadi <span className="text-white font-black underline decoration-zinc-500 decoration-2 underline-offset-4 pointer-events-none">ilmuwan hebat</span> di Amerika Serikat dan menemui tokoh-tokoh besar dunia.
            </p>
            <div className="flex items-center gap-2 text-[10px] font-bold tracking-tighter text-zinc-500 bg-zinc-800/80 px-3 py-1.5 rounded-full inline-flex border border-zinc-700/50">
              <MapPin size={10} className="text-zinc-400" />
              <span className="uppercase">USA Connection</span>
            </div>
          </motion.div>
        </div>

        {/* Terminal Section */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-5 px-1">
            <div className="w-8 h-[1px] bg-zinc-200" />
            <h2 className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-zinc-400">Interactive Bio</h2>
          </div>
          <PortfolioTerminal />
        </section>

        {/* Skills Section - Minimalist */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6 px-1 text-right justify-end">
            <h2 className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-zinc-400">Expertise</h2>
            <div className="w-8 h-[1px] bg-zinc-200" />
          </div>
          <div className="grid grid-cols-2 gap-3">
            {[
              { icon: <ShieldCheck size={18} />, label: "Cyber Security", color: "bg-white text-zinc-900 border-zinc-100 shadow-sm" },
              { icon: <Code2 size={18} />, label: "Programmer", color: "bg-white text-zinc-900 border-zinc-100 shadow-sm" },
              { icon: <Globe size={18} />, label: "Modern UI/UX", color: "bg-white text-zinc-900 border-zinc-100 shadow-sm" },
              { icon: <User size={18} />, label: "Philosophy", color: "bg-white text-zinc-900 border-zinc-100 shadow-sm" }
            ].map((skill, index) => (
              <motion.div 
                key={index} 
                whileTap={{ scale: 0.95 }}
                className={cn("p-4 rounded-2xl border flex flex-col gap-3 group items-center text-center", skill.color)}
              >
                <div className="p-2 rounded-xl bg-zinc-50 group-hover:bg-zinc-100 transition-colors">
                  {skill.icon}
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider">{skill.label}</span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-12 border-t border-zinc-100 text-center">
          <div className="flex justify-center gap-10 mb-8">
            <motion.a whileHover={{ y: -2 }} href="#" className="text-zinc-300 hover:text-zinc-900 transition-colors">
              <Github size={24} />
            </motion.a>
            <motion.a whileHover={{ y: -2 }} href="#" className="text-zinc-300 hover:text-zinc-900 transition-colors">
              <Globe size={24} />
            </motion.a>
            <motion.a whileHover={{ y: -2 }} href="#" className="text-zinc-300 hover:text-zinc-900 transition-colors">
              <ExternalLink size={24} />
            </motion.a>
          </div>
          <p className="text-[9px] text-zinc-400 font-bold uppercase tracking-[0.3em] mb-4">
            Muhammad Khairul &bull; 2026
          </p>
          <div className="inline-block px-3 py-1 rounded-full bg-zinc-50 border border-zinc-100">
            <p className="text-[8px] text-zinc-400 font-bold uppercase tracking-widest leading-none">
              Built for the Great Science in America
            </p>
          </div>
        </footer>

      </div>
    </div>
  );
}

