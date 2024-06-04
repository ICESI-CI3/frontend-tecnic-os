import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900">
                <svg className="h-6 w-6 mr-1 text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.371 0 0 5.371 0 12s5.371 12 12 12 12-5.371 12-12S18.629 0 12 0zm0 21.8c-5.416 0-9.8-4.384-9.8-9.8S6.584 2.2 12 2.2 21.8 6.584 21.8 12 17.416 21.8 12 21.8z"/><path d="M10.465 16.387L5.558 11.48l1.414-1.414 3.493 3.493 7.9-7.9 1.414 1.414z"/>
                </svg>
                <span className="font-bold">HomeNeeds</span>
              </Link>
            </div>
            {/* Navbar items */}
            <div className="hidden md:flex items-center space-x-4 ml-8">
              <Link href="/admin/users" className="text-gray-700 hover:text-gray-900 cursor-pointer">Clientes</Link>
              <Link href="/admin/technicians" className="text-gray-700 hover:text-gray-900 cursor-pointer">Tecnicos</Link>
              <div className="text-gray-700 hover:text-gray-900 cursor-pointer">Citas</div>
            </div>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button className="mobile-menu-button">
              <svg className="w-6 h-6 text-gray-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
