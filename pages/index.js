import Head from 'next/head'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Camping</title>
        <meta name="description" content="The best places in England" />
        <link href="https://fonts.googleapis.com/css2?family=Forum&family=Inter:wght@400;900&display=swap" rel="stylesheet"></link>
      </Head>
    </div>
  )
}