import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/utils.module.scss'
import Link from 'next/link'

const name = '[Your Name]'
export const siteTitle = 'Next.js Sample Website'

export default function Layout({ children, home }) {
  return (
    <div className={styles.post_container}>
      <header className={styles.header}>
        {home && (
          <>
        <div className={styles.leftSide}>
            <Image
              priority
              src="/images/profile.jpg"
              className={styles.borderCircle}
              height={40}
              width={40}
              alt={name}
            />
            <h1 className={styles.headingMd}>{name}</h1>
        </div>
        <div className={styles.rightSide}>
          <Link href="/blog">
            <a>Blog Post</a>
          </Link>
        </div>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}
