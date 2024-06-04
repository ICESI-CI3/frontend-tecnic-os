import React from "react";
import { UseTechnicians } from "@/hooks/technician/useTechnicians";
import TechniciansCarouselSection from "./TechnicianCarouselSection";

export default async function TechniciansCarousel() {
  const { fetchTechnicians  } = UseTechnicians();

  const technicians = await fetchTechnicians();

  if (!technicians) return <p>No se pudieron cargar los técnicos</p>;

  const homeCategories = [
    {
      id: 1,
      name: "Plomeros",
      tag: "#plumber"
    },
    {
      id: 2,
      name: "Electricistas",
      tag: "#electrician"
    },
    {
      id: 3,
      name: "Constructores",
      tag: "#builder"
    }
  ]

   // Filtrar técnicos por categoría
   const getTechniciansByCategory = (tag:string) => {
    return technicians.filter((technician) =>
      technician.tags.includes(tag)
    ).slice(0, 10); // Limitar a 10 técnicos
  };
  
  return (
    <div className="max-w-6xl mx-auto py-8">
      {homeCategories.map((category) => (
        <TechniciansCarouselSection 
        key={category.id}
        name={category.name}
        technicians={getTechniciansByCategory(category.tag)}/>
      ))}
    </div>
  );
}
