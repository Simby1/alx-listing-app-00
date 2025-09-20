import { PropertyProps } from "@/interfaces";
import Image from "next/image";

interface PropertyCardProps {
  property: PropertyProps;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative h-60 w-full">
        <Image 
          src={property.image} 
          alt={property.name} 
          layout="fill" 
          objectFit="cover" 
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold">{property.name}</h3>
        <div className="flex items-center mt-2">
          <span className="text-yellow-500">⭐</span>
          <span className="ml-1 text-gray-700">{property.rating}</span>
        </div>
        <p className="mt-2 text-gray-600 font-bold">
          ${property.price}
          <span className="text-sm font-normal text-gray-500"> per night</span>
        </p>
      </div>
    </div>
  );
};

export default PropertyCard;