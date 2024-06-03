// CarouselComponent.tsx
"use client";
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Importa los estilos predeterminados

export default function CarouselComponent() {
  return (
    <div className="w-full max-w-4xl mx-auto mt-8">
      <Carousel
        showArrows={true}
        showStatus={false}
        showIndicators={true}
        infiniteLoop={true}
        autoPlay={true}
        interval={6000}
        stopOnHover={true}
        swipeable={true}
        dynamicHeight={true}
      >
        <div className="h-64 md:h-80">
          <img className="w-full h-full object-cover" src="https://reparacionescostarica.com/wp-content/uploads/2021/04/Reparacion-de-lavadoras-en-Costa-Rica-1.jpg" alt="Image 1" />
        </div>
        <div className="h-64 md:h-80">
          <img className="w-full h-full object-cover" src="https://calahondaservicios.com/wp-content/uploads/2023/11/Que-habilidades-debe-tener-un-electricista.webp" alt="Image 2" />
        </div>
        <div className="h-64 md:h-80">
          <img className="w-full h-full object-cover" src="https://www.ippoecuador.com/wp-content/uploads/2019/11/EMPRESA-DE-LIMPIEZA.jpg" alt="Image 3" />
        </div>
      </Carousel>
    </div>
  );
}
