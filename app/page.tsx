import { Navbar } from "@/components";
import CarouselComponent from "@/components/carousel/CarouserComponent";
import TechniciansCarousel from "@/components/carousel/TechniciansCarousel";
import Image from "next/image";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <Navbar />
      <CarouselComponent />
      <Suspense fallback={<div>Cargando...</div>}>
        <TechniciansCarousel />
      </Suspense>
      <h1 className="flex items-center">Home</h1>
    </>
  );
}
