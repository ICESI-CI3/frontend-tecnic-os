import { CarouselComponent, Footer, Navbar, TechniciansCarousel } from "@/components";
import SearchedTechniciansCarousel from "@/components/carousel/SearchedTechniciansCarousel";
import { Suspense } from "react";

interface SearchedTechniciansCarouselProps {
    SearchQuery: { params: any, searchParams: { searchQuery: string } }; // Define la prop SearchQuery como un string
}

export default function HomeSearched(SearchQuery: SearchedTechniciansCarouselProps) { // Espera un string directamente
  return (
    <>
      <CarouselComponent />
      <Suspense fallback={<div>Cargando...</div>}>
        <SearchedTechniciansCarousel SearchQuery={SearchQuery} /> {/* Pasa SearchQuery directamente como prop */}
      </Suspense>
      <Footer />
    </>
  );
}
