import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Card from '@/components/Card'
import Diagram from '@/components/Diagram'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <header>
        <h1>My Website</h1>
        <h2>Welcome to my website!</h2>
      </header>
      <div className="bg-white rounded-lg p-8">
        <Diagram />
      </div>
      {/* <div>
        <ul>
          <li>{<Card />}</li>
          <li>{<Card />}</li>
          <li>{<Card />}</li>
        </ul>
      </div> */}
    </>
  )
}
