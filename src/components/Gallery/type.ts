export interface Card {
    id: number;
    name: string;
    rarity: number;
    image: string; // URL de l'image de la carte
  }
  
  export interface GalleryProps {
    userCollection: Card[];
  }