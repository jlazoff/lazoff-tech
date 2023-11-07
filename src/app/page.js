import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-black text-white">
     
      <style>{`
        body {
          font-family: 'Roboto', sans-serif;
        }
        h1, h2 {
          font-family: 'Playfair Display', serif;
        }
      `}</style>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-4 sm:px-20 text-center space-y-6">
        <img src="/Lazoff.svg" alt="Lazoff Logo" className="w-40 sm:w-64 my-6" />

        <h1 className="text-3xl sm:text-4xl mb-3 font-bold">
          Crafting Digital Experiences
        </h1>
        <h2 className="text-lg sm:text-xl mb-5">
          Team Founder: Joshua Lazoff
        </h2>

        <div className="text-left space-y-4">
          <h3 className="text-md sm:text-lg font-semibold">Our Services</h3>
          <p className="text-gold-500">• Luxury Websites</p>
          <p className="text-gold-500">• Mobile Apps</p>
          <p className="text-gold-500">• Custom Software</p>
        </div>

        <div className="pt-6">
          <a href="https://www.linkedin.com/in/joshualazoff" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline flex items-center justify-center">
            <FontAwesomeIcon icon={faLinkedin} className="mr-2" /> Connect on LinkedIn
          </a>
          <p className="mt-3">Email: <a href="mailto:joshua@lazoff.tech" className="text-gold-500 hover:underline">joshua@lazoff.tech</a></p>
        </div>
      </main>
    </div>
  )
}
