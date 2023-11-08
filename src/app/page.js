import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faEnvelope } from '@fortawesome/free-brands-svg-icons';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-black text-white">

      <style>{`
        body {
          font-family: 'Roboto', sans-serif;
        }
        h1, h2, p {
          font-family: 'Playfair Display', serif;
        }
      `}</style>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-4 sm:px-20 text-center space-y-6">
        <img src="/Lazoff.svg" alt="Lazoff.Tech Logo" className="w-40 sm:w-64 my-6" />

        <h1 className="text-3xl sm:text-4xl mb-3 font-bold">
          Crafting Digital Experiences
        </h1>
     
        <div className="text-left space-y-4">
          <h2 className="text-md sm:text-lg font-semibold">Our Services</h2>
          <p className="text-gold-500">• Luxury Websites</p>
          <p className="text-gold-500">• Mobile Apps</p>
          <p className="text-gold-500">• Custom Software</p>
        </div>

        <div className="flex justify-center sm:justify-start space-x-3 sm:space-x-4">
          <a href="https://www.linkedin.com/in/joshua-lazoff/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
            <FontAwesomeIcon icon={faLinkedin} className="h-8 w-8 sm:h-10 sm:w-10" alt="LinkedIn Logo" />
          </a>
          <a href="mailto:joshua&#64;lazoff&#46;tech" className="text-gold-500 hover:text-gold-700">
            <FontAwesomeIcon icon={fa-envelope} className="h-8 w-8 sm:h-10 sm:w-10" alt="Email Icon" />
          </a>
        </div>
      </main>
    </div>
  )
}
