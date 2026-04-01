// src/components/Footer.jsx
import { Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-4 border-t border-slate-200 bg-white/60 py-6 text-center">
      <div className="flex justify-center items-center gap-2 mb-4">
        <Mail size={16} className="text-slate-500" />
        <a href="mailto:saiprajwal08@gmail.com" className="text-slate-600 hover:text-blue-700 transition-colors text-sm font-medium">
          saiprajwal08@gmail.com
        </a>
      </div>
      <p className="text-sm text-slate-500">
        Designed & Built by Sai Prajwal R.
      </p>
    </footer>
  );
}