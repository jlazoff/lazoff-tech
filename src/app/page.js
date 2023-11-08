import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 text-white bg-black">

      <style>{`
        body {
          font-family: 'Roboto', sans-serif;
        }
        h1, h2, p {
          font-family: 'Playfair Display', serif;
        }
      `}</style>

      <main className="flex flex-col items-center justify-center flex-1 w-full px-4 space-y-6 text-center sm:px-20">
        <img src="/Lazoff.svg" alt="Lazoff.Tech Logo" className="w-40 my-6 sm:w-64" />
        
        <h1 className="mb-3 text-3xl font-bold sm:text-4xl">
          Crafting Digital Experiences
        </h1>
        
        <h1 className="mb-3 text-3xl font-bold sm:text-4xl">
          Software Engineering &amp; Consulting
        </h1>

        <div className="space-y-4 text-left">
          <h3 className="font-semibold text-md sm:text-lg">Our Services</h3>
          <p className="text-gold-500">Websites, Mobile Apps, Custom Software</p>
        </div>

        <div className="flex justify-center space-x-3 sm:justify-start sm:space-x-4">
          <a href="https://www.linkedin.com/in/joshua-lazoff/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
            <FontAwesomeIcon icon={faLinkedin} className="w-8 h-8 sm:h-10 sm:w-10" alt="LinkedIn Logo" />
          </a>
          <a href="mailto:joshua&#64;lazoff&#46;tech" className="text-gold-500 hover:text-gold-700">
            <FontAwesomeIcon icon={faEnvelope} className="w-8 h-8 sm:h-10 sm:w-10" alt="Email Icon" />
          </a>
        </div>
      </main>
    </div>
  )
}
