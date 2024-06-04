import React from "react";
import { useTechnicians } from "@/hooks/technician/useTechnicians";
import TechniciansCarouselSection from "./TechnicianCarouselSection";

interface SearchedTechniciansCarouselProps {
    SearchQuery: { params: any, searchParams: { searchQuery: string } }; // Define la prop SearchQuery como un string
}

async function SearchedTechniciansCarousel({ SearchQuery}: SearchedTechniciansCarouselProps) { // Recibe props como un objeto
    const { fetchTechnicians  } = useTechnicians();

    const technicians = await fetchTechnicians();

    const stopwords: string[] = [
        "a", "al", "ante", "bajo", "cabe", "con", "contra", "de", "desde", "durante",
        "e", "el", "en", "entre", "eso", "este", "la", "le", "lo", "los", "las", "les",
        "me", "mi", "mis", "nos", "nosotros", "nuestro", "o", "para", "pero", "por", "qué",
        "se", "si", "sin", "sobre", "su", "sus", "tú", "te", "tu", "un", "una", "uno", "y", "ya"
    ];

    console.log("QUERYYYYY: ", SearchQuery.searchParams.searchQuery)

    function removeStopwords(inputString: string, stopwords: string[]): string {
        // Split the input string into words

        const words = inputString.split(" ");
        words.map((word: string) => {
            console.log("word metodo: ", word)
        })
        // Filter out the stopwords
        const filteredWords = words.filter(word => !stopwords.includes(word.toLowerCase()));
    
        // Join the remaining words back into a string
        const result = filteredWords.join(" ");
    
        return result;
    }

    const words=removeStopwords(SearchQuery.searchParams.searchQuery, stopwords).split(" ")
    
    console.log('WORDSSSSSSSSSSSSSSSSS: ', removeStopwords(SearchQuery.searchParams.searchQuery, stopwords))

    if (!technicians) return <p>No se pudieron cargar los técnicos</p>;


    // Filtrar técnicos por categoría
    const getTechniciansBySearch = (words: string[]) => {
        // Filtrar los técnicos que cumplen la condición
        const filteredTechnicians = technicians.filter((technician) =>
            words.some((word: string) => technician.tags.includes(word))
        );
    
        // Verificar si la lista filtrada está vacía
        if (filteredTechnicians.length === 0) {
            return []; // Si está vacía, retornar una lista vacía
        } else {
            return filteredTechnicians; // Si no está vacía, retornar la lista filtrada
        }
    };                

    return (
    <div className="max-w-6xl mx-auto py-8">
        <TechniciansCarouselSection 
        name={words.join("-")}
        technicians={getTechniciansBySearch(words)}/>
    </div>
    );
}

export default SearchedTechniciansCarousel; // No te olvides de exportar la función
