import React from 'react';
import Image from 'next/image';
import { GalleryProps } from './type';

const Gallery: React.FC<GalleryProps> = ({ userCollection }) => {
  return (
    <div className="grid grid-cols-7 gap-4 p-8">
      {userCollection.map((card) => (
        <div key={card.id} className="card bg-gray-100 p-4 rounded-lg shadow-md">
          <Image src='/assets/card_test.jpg' alt={card.name} width={190} height={266} className="rounded-lg"/>
          <h3 className="text-xl mt-2">Nom: {card.name}</h3>
          <p>Rareté: {card.rarity}</p>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
