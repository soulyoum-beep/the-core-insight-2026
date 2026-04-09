import { motion } from "motion/react";
import { Sparkles } from "lucide-react";
import EmailForm from "../EmailForm";

export default function CallToAction() {
  return (
    <section id="cta-section" className="py-60 px-6 text-center bg-white">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <Sparkles className="w-12 h-12 mx-auto mb-8 text-neutral-300" />
        <h2 className="text-5xl md:text-7xl font-black tracking-tightest leading-[0.9] text-black mb-12">
          Never run out of <br />
          <span className="text-neutral-400">inspiration again.</span>
        </h2>
        <div className="flex flex-col items-center gap-6">
          <EmailForm buttonText="지금 바로 신청하기" className="w-full" />
          <div className="flex items-center justify-center gap-2 text-neutral-400 font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
            마스터클래스는 소수 정예로 운영됩니다. (잔여 5석)
          </div>
        </div>
      </motion.div>
    </section>
  );
}
