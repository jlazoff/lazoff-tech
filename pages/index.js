import Image from 'next/image'
import { motion } from 'framer-motion'
import PlatonicAnimation from '../components/PlatonicAnimation'
import Head from 'next/head'



export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
      <Head>
        <title>Luxurious Web Development</title>
        <meta name="description" content="High-end website development for hotels and luxury products" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex items-center justify-center flex-grow">
        <motion.div initial="initial" animate="animate" variants={fadeIn}>
          <PlatonicAnimation />
        </motion.div>
      </div>
    </div>
  )
}

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 1 } },
}
