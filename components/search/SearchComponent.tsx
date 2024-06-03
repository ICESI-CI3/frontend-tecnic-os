
import { useRouter } from "next/navigation";
import { useState } from 'react';

interface Props {
    placeholder: string,
    redirect: string
}

function SearchComponent( {placeholder, redirect} : Props) {
    const [searchQuery, setSearchQuery] = useState('');
    const router = useRouter();

    const handleSearch = (e: any) => {
        e.preventDefault();
        // Redirigir a la página de resultados de búsqueda con el query de búsqueda
        router.push(`${redirect}?q=${searchQuery}`);
    };


    return(
        <>
        <form className="md:flex hidden items-center" onSubmit={handleSearch}>
            <input
            type="text"
            placeholder={placeholder}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="px-3 py-2 mr-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
            <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
            Buscar
            </button>
        </form>
      </>
    );
}


export default SearchComponent;