import { Technician } from "@/interfaces/technician";


interface Props {
    name: string,
    technicians: Technician[]
  }

export default async function TechniciansCarouselSection({name, technicians}: Props) {
    return (
        <>
        <h2 className="text-2xl font-semibold mb-4">
            {name}
        </h2>
        <div className="flex space-x-4 overflow-x-auto">
            {technicians.map((technician) => (
            <div
                key={technician.userId}
                className="min-w-[200px] bg-white p-4 rounded-lg shadow-md flex-shrink-0"
            >
                <img
                src="https://via.placeholder.com/150"
                alt={technician.description}
                className="w-full h-40 object-cover rounded-md mb-4"
                />
                <h3 className="text-lg font-semibold">{technician.tags}</h3>
                <p className="text-gray-500">"$20.000"</p>
                <button className="mt-2 text-blue-500">Ver detalles</button>
            </div>
            
        ))}
        </div>
      </>
    );
}