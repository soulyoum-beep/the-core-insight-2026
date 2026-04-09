import { motion } from "motion/react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
};

export default function Testimonials() {
  return (
    <section className="py-40 px-6 bg-neutral-50">
      <div className="max-w-7xl mx-auto">
        <motion.div {...fadeIn} className="text-center mb-20 space-y-4">
          <h2 className="text-4xl md:text-5xl font-black tracking-tightest text-black mb-4">Testimonials</h2>
          <p className="text-neutral-500">이미 많은 리더들이 변화를 경험하고 있습니다.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { author: "CEO Kim", comment: "경영의 본질을 깨닫는 시간이었습니다. 단순한 기술 교육이 아닌 철학이 담겨있습니다.", role: "Tech Startup Founder" },
            { author: "Founder Lee", comment: "AI 적용의 확신을 얻었습니다. 재무 전략과 AI의 결합이 이렇게 강력할 줄 몰랐습니다.", role: "Manufacturing CEO" }
          ].map((review, i) => (
            <motion.div 
              key={i} 
              variants={fadeIn}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="p-10 bg-white rounded-[32px] border border-neutral-100 shadow-sm"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-neutral-200 text-black rounded-full flex items-center justify-center font-bold">
                  {review.author[0]}
                </div>
                <div>
                  <div className="font-bold text-black">{review.author}</div>
                  <div className="text-xs text-neutral-400 uppercase tracking-widest">{review.role}</div>
                </div>
              </div>
              <p className="text-lg text-neutral-600 leading-relaxed italic">
                "{review.comment}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
