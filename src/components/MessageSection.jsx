import { motion } from 'framer-motion'
import './MessageSection.css'

export default function MessageSection() {
  return (
    <section className="message-section">
      <motion.div
        className="message-wrapper"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="ring-glow-wrapper">
          <div className="ring-glow">
            <span className="ring-heart">♥</span>
          </div>
        </div>

        <h2 className="message-title">
          <span className="message-lead">يا أغلى إنسانة في حياتي...</span>
          <span className="signature">إسراء ❤️</span>
        </h2>

        <motion.p
          className="message-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          النهارده يومك انتي، 13/11، اليوم اللي ربنا خلقك فيه عشان تفرّحي الدنيا وأنا قبلها.<br /><br />
          مش هعرف أعبّرلك بالكلام، بس حبيت أعملّك المكان ده هدية عشان تعرفي قد إيه انتي مهمة بالنسبالي.
          من يوم ما قرينا الفاتحة 21/8/2025 وأنا حاسس إن حياتي بقى ليها طعم تاني،
          ومن يوم خطوبتنا 17/10/2025 وأنا بعدّ الأيام عشان نكمّل الباقي سوا.<br /><br />
          ضحكتك بتفرحني، وكلامك بيطمّني، وأي يوم تعبان يهون عليّا لما بسمع صوتك.
          ولو الزمن يرجع تاني مليون مرة، هختارك تاني من غير ما أفكر.<br /><br />
          وعد مني: هفضل جنبك، هحترمك وأقدّرك، وهكون معاكي في كل الظروف
          حلوة كانت ولا صعبة، وربنا يتمم لنا على خير.<br /><br />
          كل سنة وانتي طيبة يا إسراء، وكل سنة وانتي أقرب لقلبي من اللي قبلها.</motion.p>

        <motion.div
          className="message-signature-line"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        />

        <motion.p
          className="message-from"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1 }}
        >
          بحبك يا إسراء بجد، وكل سنة وانتي طيبة، وربنا يخليكي ليا ويفضل يضحكك طول عمرك ❤️🌹
        </motion.p>
      </motion.div>
    </section>
  )
}
