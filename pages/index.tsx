import { useState } from 'react';
import Image from 'next/image';
import { PROPERTYLISTINGSAMPLE } from '@/constants';
import { PropertyProps } from '@/interfaces';
import Pill from '@/components/Pill';
import PropertyCard from '@/components/PropertyCard';

const FILTER_CATEGORIES = [
  'Luxury Villa',
  'Pool',
  'Free Parking',
  'Mountain View',
  'Fireplace',
  'Self Checkin',
  'Desert View',
  'Pet Friendly',
  'City View',
  'Free WiFi',
  '24h Checkin',
  'Riverside',
  'Private Dock',
  'Free Kayaks',
  'Beachfront',
  'Private Pool',
  'Chef Service',
  'Lakeside',
  'Hiking Trails',
  'Garden',
  'City Center',
  'Secluded',
  'Hot Tub',
  'Cliffside',
  'Infinity Pool',
  'Sea View',
  'Historical',
  'Free Breakfast',
  'Public Transport',
  'Safari',
  'Guided Tours',
  'Countryside',
  'Riverfront',
  'Private Garden',
  'Ski Access',
  'Ocean View',
];

export default function Home() {
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const handleFilterClick = (filter: string) => {
    setActiveFilters((prevFilters) => {
      if (prevFilters.includes(filter)) {
        return prevFilters.filter((f) => f !== filter);
      } else {
        return [...prevFilters, filter];
      }
    });
  };

  const filteredProperties = PROPERTYLISTINGSAMPLE.filter((property) => {
    if (activeFilters.length === 0) {
      return true;
    }
    return activeFilters.every((filter) => property.category.includes(filter));
  });

  return (
    <>
      <section className="relative h-[500px] bg-cover bg-center" style={{ backgroundImage: "url('')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center p-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Find your favorite place here!
          </h1>
          <p className="text-lg md:text-xl text-white">
            The best prices for over 2 million properties worldwide.
          </p>
        </div>
      </section>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Filter by:</h2>
          <div className="flex flex-wrap gap-2">
            {FILTER_CATEGORIES.map((filter) => (
              <Pill
                key={filter}
                label={filter}
                onClick={() => handleFilterClick(filter)}
                isActive={activeFilters.includes(filter)}
              />
            ))}
          </div>
        </section>

        <section>
          {filteredProperties.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProperties.map((property) => (
                <PropertyCard key={property.name} property={property} />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500 text-lg">No properties found matching your filters.</p>
          )}
        </section>
      </main>
    </>
  );
}