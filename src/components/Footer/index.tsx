import { Link } from 'react-router-dom'
import s from './Footer.module.scss'

export default function Footer() {
  return (
    <footer className={s.footer}>
      <div className={s.top}>

        <div className={s.brand}>
          <div className={s['brand-logo']}>
            <span className={s['brand-logo-mark']}>🌿</span>
            <span className={s['brand-logo-text']}>Eco<span>Clean</span></span>
          </div>
          <p>Professional eco-friendly cleaning services in Toronto, committed to sustainability and your family's health.</p>
        </div>

        <div className={s.col}>
          <h4>Navigation</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className={s.col}>
          <h4>Contact</h4>
          <ul>
            <li>123 Green St, Toronto, ON</li>
            <li><a href="tel:4165551234">(416) 555-1234</a></li>
            <li><a href="mailto:info@ecoclean.ca">info@ecoclean.ca</a></li>
          </ul>
        </div>

      </div>

      <div className={s.bottom}>
        <p>© {new Date().getFullYear()} EcoClean Toronto. All rights reserved.</p>
        <span className={s.badge}>🌱 Eco-certified business</span>
      </div>
    </footer>
  )
}
