interface NavigationProps {
  onJoinClick?: () => void;
}

export default function Navigation({ onJoinClick }: NavigationProps) {
  const handleScrollToCTA = () => {
    if (onJoinClick) {
      onJoinClick();
    } else {
      const ctaSection = document.getElementById("cta-section");
      ctaSection?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 bg-white/80 backdrop-blur-md">
      <div className="text-xl font-black tracking-tighter cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        CORE INSIGHT
      </div>
      <button 
        onClick={handleScrollToCTA}
        className="px-6 py-2 text-sm font-medium text-white bg-black rounded-full hover:bg-neutral-800 transition-colors"
      >
        신청하기
      </button>
    </nav>
  );
}
