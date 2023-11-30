import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

export default function Home() {

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 text-black dark:text-white">
  
      <header className="flex flex-col items-center justify-center flex-1 w-full px-4 space-y-6 text-center sm:px-20">
        <Image src="/LazoffTech-black.svg" alt="Lazoff.Tech Logo" className="my-4 w-100vw sm:w-75" width={600} height={100} />

    
<div className="relative">
  <img
    className="dark:hidden"
    src="/LazoffTech-black.svg"
    alt="Lazoff.Tech Dark Logo"
  />
  <img
    className="hidden dark:block"
    src="/LazoffTech-white.svg"
    alt="Lazoff.Tech White Logo"
  />
</div>
        <h1 className="mb-3 text-3xl font-bold sm:text-3xl">
          Software Engineering &amp; Consulting
        </h1>

        <h2 className="mb-2 text-2xl font-bold sm:text-2xl">
          Elevating your digital presence with innovative technology solutions
        </h2>

        <section className="mb-6">
          <h2 className="my-4 text-2xl underline sm:text-2xl">Our Services</h2>
          <ul className="flex flex-col text-center text-mb-2">
            <li className="mb-2">
              <span className="mr-2">&#9679;</span>
              <strong>Website & Mobile Applications</strong><br /><span class="text-mb-1">Crafting sophisticated, user-friendly digital experiences.</span>
              <br />
            </li>
            <li className="mb-2">
              <span className="mr-2">&#9679;</span>
              <strong>Custom Software Solutions</strong><br /><span class="text-mb-1">Tailoring technology to align with your distinctive business needs.</span>
            </li>
          </ul>
        </section>

        <nav className="flex justify-center space-x-3 sm:justify-start sm:space-x-4">
          <a href="https://www.linkedin.com/in/joshua-lazoff/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
            <FontAwesomeIcon icon={faLinkedin} className="w-8 h-8 sm:h-10 sm:w-10" alt="LinkedIn Logo" />
          </a>
          <a href="mailto:joshua&#64;lazoff&#46;tech" className="text-gold-500 hover:text-gold-700">
            <FontAwesomeIcon icon={faEnvelope} className="w-8 h-8 sm:h-10 sm:w-10" alt="Email Icon" />
          </a>
        </nav>
      </header>
    </div>
  )
}
