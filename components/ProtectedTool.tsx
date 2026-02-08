'use client'

import React from 'react';
import { Lock, Zap, Shield, ArrowRight, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

interface Props {
  name: string;
  description: string;
  category: string;
}

export function ProtectedTool({ name, description, category }: Props) {
  return (
    <div className="relative min-h-[600px] w-full flex items-center justify-center p-6 mt-20">
      {/* Premium Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 blur-[120px] rounded-full" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 max-w-2xl w-full bg-[#0A0A0A]/80 backdrop-blur-xl border border-white/10 rounded-[3rem] p-12 text-center"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[10px] font-black uppercase tracking-widest mb-8">
          <Shield className="w-3 h-3" /> Proprietary Engine v3.0
        </div>

        <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center text-white mb-8 mx-auto shadow-2xl">
          <Lock className="w-12 h-12 text-indigo-400" />
        </div>

        <h1 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tighter">
          {name} <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">PRO</span>
        </h1>

        <p className="text-zinc-400 text-lg mb-10 leading-relaxed">
          {description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3 text-left">
            <Zap className="w-5 h-5 text-yellow-500 shrink-0" />
            <div>
              <div className="text-white font-bold text-sm">WASM Optimized</div>
              <div className="text-zinc-500 text-xs">High-performance binary execution.</div>
            </div>
          </div>
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3 text-left">
            <Shield className="w-5 h-5 text-emerald-500 shrink-0" />
            <div>
              <div className="text-white font-bold text-sm">Privacy Hardened</div>
              <div className="text-zinc-500 text-xs">Zero-trust local processing.</div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href={`https://mojodocs.in/${category}`}
            className="w-full sm:w-auto px-8 py-4 bg-white text-black font-black rounded-2xl hover:scale-105 transition-all flex items-center justify-center gap-2 group"
          >
            USE LIVE TOOL <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <button className="w-full sm:w-auto px-8 py-4 bg-zinc-900 text-zinc-400 font-bold rounded-2xl border border-white/5 cursor-not-allowed">
            VIEW SOURCE (RESTRICTED)
          </button>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 text-zinc-600 text-[10px] font-medium tracking-widest uppercase italic">
          MojoDocs Intellectual Property Restricted Codebase
        </div>
      </motion.div>
    </div>
  );
}
