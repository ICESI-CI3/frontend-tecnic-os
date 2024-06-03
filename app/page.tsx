import { CarouselComponent, Footer, Navbar, TechniciansCarousel } from "@/components";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <Navbar />
      <CarouselComponent />
      <Suspense fallback={<div>Cargando...</div>}>
        <TechniciansCarousel />
      </Suspense>
      <Footer />
    </>
  );
}
