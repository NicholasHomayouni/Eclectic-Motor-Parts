import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Card from '@/components/Card'
import Flow from '@/components/Flow'

export default function Home() {
  return (
    <>
    <header>
      <h1>My Website</h1>
      <h2>Welcome to my website!</h2>
    </header>
      <main>
        <Flow />
        {/* <ul>
          <li>{<Card />}</li>
          <li>{<Card />}</li>
          <li>{<Card />}</li>
        </ul> */}
      </main>
    </>
  )
}
