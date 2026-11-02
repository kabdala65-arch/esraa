import { motion } from 'framer-motion'
import './SpecialDatesSection.css'

const dates = [
  { icon: '🎂', date: '13 / 11 / 2003', title: 'يوم ميلادك', text: 'اليوم اللي الدنيا اتنوّرت فيه بيكي' },
  { icon: '📖', date: '21 / 8 / 2025', title: 'قراءة الفاتحة', text: 'اليوم اللي بدأت فيه حكايتنا بجد' },
  { icon: '💍', date: '17 / 10 / 2025', title: 'يوم خطوبتنا', text: 'اليوم اللي بقيتي فيه رسمي ليا ولقلبي' },
]

export default function SpecialDatesSection() {
  return (
    <section className="dates-section">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <span className="section-tag">أيامنا</span>
        <h2 className="section-title">تواريخ مش هنساها</h2>
        <p className="section-subtitle">كل تاريخ فيهم له مكان خاص جوه قلبي ♥</p>
      </motion.div>

      <div className="dates-list">
        {dates.map((d, i) => (
          <motion.div
            key={d.title}
            className="date-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: i * 0.12 }}
          >
            <span className="date-icon">{d.icon}</span>
            <span className="date-value">{d.date}</span>
            <span className="date-title">{d.title}</span>
            <span className="date-text">{d.text}</span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
