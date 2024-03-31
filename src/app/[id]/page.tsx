import { PrismaClient } from "@prisma/client";
import Gallery from "../../components/Gallery/Gallery";

const prisma = new PrismaClient();

export default async function userCollection({
  params,
}: {
  params: { id: string };
}) {
  // validate id is a number representing a discord user id
  if (!/^\d{18}$/.test(params.id)) {
    return <h1>Invalid id</h1>;
  }

  // Cast params.id to bigint, it's safe to do so since we validated it
  const discordId = BigInt(params.id);
  // fetch user from db
  const user = await prisma.user.findUnique({
    where: { discordId: discordId },
  });

  if (!user) {
    return <h1>User not found</h1>;
  }

  const userCollection = await prisma.ownedCard.findMany({
    where: { userId: user.discordId },
    include: { card: true }, // Inclut les détails des cartes
  });

  // Transforme les données pour qu'elles correspondent au type attendu par le composant Gallery
  const formattedUserCollection = userCollection.map(({ card }) => ({
    id: card.id,
    name: card.name,
    rarity: card.rarity,
    image: "/assets/card_test.png", // Utilise l'URL de l'image fixe pour le moment
  }));

  // render user
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">User Stats</h1>
      <h3 className="text-xl">Discord ID: {user.discordId.toString()}</h3>
      <h3 className="text-xl">Kamas: {user.kamas}</h3>
      <h4 className="text-lg mt-4">Stats: {JSON.stringify(user.stats)}</h4>
      <hr className="my-8 border-gray-400" />
      <Gallery userCollection={formattedUserCollection} />
    </div>
  );
}
