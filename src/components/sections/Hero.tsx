import { motion } from "motion/react";
import { BookOpen, Cpu, BarChart3 } from "lucide-react";
import EmailForm from "../EmailForm";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-6 pt-20 text-center">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-5xl z-10 w-full"
      >
        <h1 className="text-6xl md:text-8xl font-black tracking-tightest leading-[0.9] mb-8 text-black">
          Redefining Management <br />
          <span className="text-neutral-400">in the AI Era.</span>
        </h1>
        <p className="text-xl md:text-2xl text-neutral-600 mb-12 font-medium">
          본질을 꿰뚫는 경영 철학과 정교한 재무 전략의 결합.
        </p>
        
        {/* 기존 단순 버튼 대신 폼 컴포넌트 배치 */}
        <EmailForm buttonText="세미나 신청하기" className="mt-8" />
      </motion.div>

      {/* Floating Assets Simulation */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ y: [0, -20, 0] }} 
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-10 md:left-20 p-4 bg-neutral-50 rounded-2xl border border-neutral-100 shadow-sm"
        >
          <BookOpen className="w-8 h-8 text-neutral-400" />
        </motion.div>
        <motion.div 
          animate={{ y: [0, 20, 0] }} 
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/4 right-10 md:right-20 p-4 bg-neutral-50 rounded-2xl border border-neutral-100 shadow-sm"
        >
          <Cpu className="w-8 h-8 text-neutral-400" />
        </motion.div>
        <motion.div 
          animate={{ scale: [1, 1.1, 1] }} 
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-1/3 right-1/4 p-4 bg-neutral-50 rounded-2xl border border-neutral-100 shadow-sm hidden md:block"
        >
          <BarChart3 className="w-8 h-8 text-neutral-400" />
        </motion.div>
      </div>
    </section>
  );
}
