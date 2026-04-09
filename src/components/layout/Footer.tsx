export default function Footer() {
  return (
    <footer className="py-20 px-8 border-t border-neutral-100 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-lg font-black tracking-tighter text-black">CORE INSIGHT 2026</div>
        <div className="flex gap-8 text-sm font-medium text-neutral-400">
          <a href="#" className="hover:text-black transition-colors">Privacy</a>
          <a href="#" className="hover:text-black transition-colors">Terms</a>
          <a href="#" className="hover:text-black transition-colors">Contact</a>
        </div>
        <div className="text-sm text-neutral-400">
          © 2026 The Core Insight. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
