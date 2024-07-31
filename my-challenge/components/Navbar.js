// components/Navbar.js

import styles from './Navbar.module.css'
import Image from 'next/image'
export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Image src="https://bytebucket.org/estoes-challenges/frontend/raw/30458c8234b0a017ad65869dafb74abea437b0ea/assets/images/logo.png" alt="Logo" />
      </div>
    </nav>
  )
}
