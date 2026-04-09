import { motion } from "motion/react";
import { BookOpen, BarChart3, Cpu } from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.1 } },
  viewport: { once: true }
};

export default function Curriculum() {
  return (
    <section className="py-40 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div {...fadeIn} className="mb-20 space-y-4">
          <h2 className="text-4xl md:text-5xl font-black tracking-tightest text-black">Curriculum</h2>
          <div className="h-1 w-20 bg-black"></div>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            { title: "Drucker's Discipline", tag: "Management", icon: <BookOpen />, desc: "피터 드러커의 경영 원칙을 현대 AI 시대에 맞게 재해석합니다." },
            { title: "Macro to Micro", tag: "Finance", icon: <BarChart3 />, desc: "거시 경제 지표부터 미세한 재무 전략까지, 데이터 기반 의사결정을 학습합니다." },
            { title: "Practical AI", tag: "Technology", icon: <Cpu />, desc: "실제 경영 현장에 즉시 도입 가능한 AI 도구와 프로세스를 구축합니다." }
          ].map((card, i) => (
            <motion.div 
              key={i} 
              variants={fadeIn}
              className="group p-8 bg-white border border-neutral-100 rounded-[32px] hover:border-black transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
            >
              <div className="mb-6 p-3 w-fit bg-neutral-50 text-black rounded-2xl group-hover:bg-black group-hover:text-white transition-colors">
                {card.icon}
              </div>
              <div className="inline-block px-3 py-1 mb-4 text-[10px] font-black uppercase tracking-widest text-black bg-neutral-100 rounded-full">
                {card.tag}
              </div>
              <h3 className="text-2xl font-black tracking-tightest mb-4 text-black">{card.title}</h3>
              <p className="text-neutral-500 leading-relaxed">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
