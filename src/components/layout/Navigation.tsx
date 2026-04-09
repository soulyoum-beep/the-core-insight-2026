import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "@/src/lib/supabase";

interface NavigationProps {
  onJoinClick?: () => void;
}

export default function Navigation({ onJoinClick }: NavigationProps) {
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => setUser(data.session?.user ?? null));
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });
    return () => subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

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
      <div className="flex items-center gap-3">
        {user ? (
          <button
            onClick={handleLogout}
            className="px-6 py-2 text-sm font-medium text-black border border-black rounded-full hover:bg-neutral-100 transition-colors"
          >
            로그아웃
          </button>
        ) : (
          <Link
            to="/login"
            className="px-6 py-2 text-sm font-medium text-black border border-black rounded-full hover:bg-neutral-100 transition-colors"
          >
            로그인
          </Link>
        )}
        <button
          onClick={handleScrollToCTA}
          className="px-6 py-2 text-sm font-medium text-white bg-black rounded-full hover:bg-neutral-800 transition-colors"
        >
          신청하기
        </button>
      </div>
    </nav>
  );
}
