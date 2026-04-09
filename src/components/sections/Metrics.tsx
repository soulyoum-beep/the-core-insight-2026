import { motion } from "motion/react";

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

export default function Metrics() {
  return (
    <section className="py-24 md:py-40 px-6 bg-neutral-50">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-8"
        >
          {[
            { value: "150+", label: "CEOs Mentored" },
            { value: "30%", label: "Efficiency via AI" },
            { value: "10+", label: "Macro Indices" },
            { value: "0", label: "Compromise" }
          ].map((metric, i) => (
            <motion.div key={i} variants={fadeIn} className="flex flex-col items-center text-center">
              <span className="text-6xl sm:text-7xl lg:text-8xl font-black tracking-tighter mb-2 text-black">
                {metric.value}
              </span>
              <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-neutral-400">
                {metric.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
