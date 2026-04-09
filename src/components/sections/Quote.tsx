import { motion } from "motion/react";
import { Quote as QuoteIcon } from "lucide-react";

export default function Quote() {
  return (
    <section className="py-40 px-6 bg-black text-white overflow-hidden relative">
      <motion.div 
        initial={{ opacity: 0, scale: 1.1 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="max-w-5xl mx-auto text-center relative z-10"
      >
        <QuoteIcon className="w-12 h-12 mx-auto mb-12 opacity-50" />
        <h2 className="text-4xl md:text-6xl font-black tracking-tightest leading-tight mb-8 italic">
          "측정할 수 없다면 경영할 수 없다."
        </h2>
        <p className="text-xl font-medium text-neutral-400">— Peter Drucker</p>
      </motion.div>
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white rounded-full blur-[120px]"></div>
      </div>
    </section>
  );
}
