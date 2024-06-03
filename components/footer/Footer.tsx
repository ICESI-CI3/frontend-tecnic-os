import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Logo y descripción */}
          <div className="w-full md:w-1/3 mb-4">
            <h2 className="text-2xl font-semibold">HomeNeeds</h2>
            <p className="mt-2 text-gray-400">
              Brindando los mejores técnicos para todas tus necesidades en un solo lugar.
            </p>
          </div>

          {/* Enlaces rápidos */}
          <div className="w-full md:w-1/3 mb-4">
            <h3 className="text-xl font-semibold mb-2">Enlaces Rápidos</h3>
            <ul>
              <li className="mb-2">
                <Link href="/" legacyBehavior>
                  <a className="hover:underline">Inicio</a>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/about" legacyBehavior>
                  <a className="hover:underline">Sobre Nosotros</a>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/services" legacyBehavior>
                  <a className="hover:underline">Servicios</a>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/contact" legacyBehavior>
                  <a className="hover:underline">Contacto</a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Redes sociales */}
          <div className="w-full md:w-1/3 mb-4">
            <h3 className="text-xl font-semibold mb-2">Síguenos</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-gray-400 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35c-.731 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.494v-9.294h-3.126v-3.621h3.126v-2.672c0-3.066 1.872-4.736 4.606-4.736 1.31 0 2.437.097 2.763.141v3.204h-1.898c-1.489 0-1.779.709-1.779 1.748v2.315h3.559l-.464 3.621h-3.095v9.294h6.073c.731 0 1.325-.593 1.325-1.324v-21.351c0-.732-.593-1.325-1.325-1.325z"/>
                </svg>
              </a>
              <a href="https://twitter.com" className="text-gray-400 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.611 1.798-1.574 2.165-2.723-.951.564-2.005.974-3.127 1.195-.897-.955-2.178-1.55-3.594-1.55-2.719 0-4.923 2.204-4.923 4.923 0 .386.043.762.127 1.124-4.09-.205-7.719-2.165-10.148-5.144-.423.724-.666 1.562-.666 2.457 0 1.696.863 3.192 2.177 4.072-.803-.026-1.56-.246-2.223-.614v.062c0 2.367 1.684 4.342 3.918 4.789-.41.111-.844.171-1.291.171-.316 0-.622-.031-.921-.089.623 1.944 2.428 3.355 4.567 3.393-1.675 1.312-3.784 2.096-6.072 2.096-.394 0-.783-.023-1.17-.068 2.165 1.39 4.731 2.205 7.488 2.205 8.982 0 13.896-7.438 13.896-13.896 0-.212-.005-.425-.014-.636.954-.687 1.782-1.545 2.437-2.523z"/>
                </svg>
              </a>
              <a href="https://instagram.com" className="text-gray-400 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.34 3.608 1.316.975.975 1.254 2.242 1.316 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.34 2.633-1.316 3.608-.975.975-2.242 1.254-3.608 1.316-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.34-3.608-1.316-.975-.975-1.254-2.242-1.316-3.608-.058-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.849c.062-1.366.34-2.633 1.316-3.608.975-.975 2.242-1.254 3.608-1.316 1.265-.058 1.645-.07 4.849-.07zm0-2.163c-3.259 0-3.667.013-4.947.072-1.635.074-3.098.488-4.285 1.674-1.186 1.186-1.6 2.649-1.674 4.285-.059 1.281-.072 1.689-.072 4.947s.013 3.667.072 4.947c.074 1.635.488 3.098 1.674 4.285 1.186 1.186 2.649 1.6 4.285 1.674 1.281.059 1.689.072 4.947.072s3.667-.013 4.947-.072c1.635-.074 3.098-.488 4.285-1.674 1.186-1.186 1.6-2.649 1.674-4.285.059-1.281.072-1.689.072-4.947s-.013-3.667-.072-4.947c-.074-1.635-.488-3.098-1.674-4.285-1.186-1.186-2.649-1.6-4.285-1.674-1.281-.059-1.689-.072-4.947-.072zm0 5.838c-3.407 0-6.162 2.756-6.162 6.162s2.756 6.162 6.162 6.162 6.162-2.756 6.162-6.162-2.756-6.162-6.162-6.162zm0 10.152c-2.195 0-3.99-1.794-3.99-3.99s1.794-3.99 3.99-3.99 3.99 1.794 3.99 3.99-1.794 3.99-3.99 3.99zm6.406-11.845c-.796 0-1.443.646-1.443 1.443 0 .796.646 1.443 1.443 1.443.796 0 1.443-.646 1.443-1.443 0-.797-.646-1.443-1.443-1.443z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-500">
          &copy; {new Date().getFullYear()} HomeNeeds. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
