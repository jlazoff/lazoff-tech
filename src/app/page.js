import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Logo from '@/components/Logo';
import Particles from '@/components/Particles';

const services = [
  {
    title: "Website & Mobile Applications",
    description: "Crafting user-friendly digital experiences."
  },
  {
    title: "Custom Software Solutions",
    description: "Technology for your unique needs."
  }
];

const contacts = [
  {
    name: "LinkedIn",
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/joshua-lazoff/",
    external: true,
    className: "text-blue-500 hover:text-blue-700",
  },
  {
    name: "Email",
    icon: faEnvelope,
    url: "mailto:joshua@lazoff.tech",
    external: false,
    className: "text-gold-500 hover:text-gold-700",
  }
];

export default function Home() {

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 text-light dark:text-dark">
      <Particles />
      <header className="flex flex-col items-center justify-center flex-1 w-full px-4 space-y-6 text-center sm:px-20">
        <Logo />

        <h1 className="my-3 text-2xl font-bold sm:text-3xl">
          Software Engineering
        </h1>
        <section className="mb-6">
          <h2 className="my-4 text-xl underline sm:text-2xl">
            Our Services
          </h2>
          <ul className="flex flex-col text-center gap-y-4 text-mb-2">
            {services.map((service, index) => (
              <li key={index}>
                <p className='text-lg sm:text-xl'>
                  <span className="mr-2">&#9679;</span>
                  <strong>{service?.title}</strong>
                </p>
                <p className="mt-1">
                  {service?.description}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <nav className="flex justify-center space-x-3 sm:justify-start sm:space-x-4">
          {contacts.map((contact, index) => (
            <a
              href={contact.url}
              key={index}
              className={`transition-colors ${contact.className}`}
              aria-label={contact.name}
              {...(contact.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              <FontAwesomeIcon icon={contact.icon} className="w-8 h-8" alt={contact.name} />
            </a>
          ))}
        </nav>
      </header>
    </div>
  )
}
