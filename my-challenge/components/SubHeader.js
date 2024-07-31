// components/Subheader.js
import styles from './Subheader.module.css'
import { useRouter } from 'next/router'
import Link from 'next/link';
export default function Subheader() {
  const router = useRouter();

  const handleBackClick = () => {
    router.back();
  };

  return (
    <div className={styles.subheader}>
      <button className={styles.backButton} onClick={handleBackClick}>
        <span className={styles.arrow}>←Back</span>
      </button>
      <Link href="/add-project" className={styles.editButton}>
        Add New Project
      </Link>
    </div>
  )
}
