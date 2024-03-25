import { PrismaClient } from '@prisma/client';
import { GetStaticProps } from 'next';

const prisma = new PrismaClient();

export default async function Page({ params }: { params: { id: string } }) {
    // validate id is a number representing a discord user id
    if (!/^\d{18}$/.test(params.id)) {
        return <h1>Invalid id</h1>;
    }
    // Cast params.id to bigint, it's safe to do so since we validated it
    const discordId = BigInt(params.id);
    // fetch user from db
    const user = await prisma.user.findUnique({
        where: {
            discordId: discordId
        }
    });

    const kamas = user?.kamas ?? 1000;
    // if user not found
    if (!user) {
        return <div><h1>User not found</h1><h2>Kamas : {kamas}</h2></div>;
    }

    const mostOwnedCards = await prisma.ownedCard.groupBy({
        by: ['cardId'],
        _count: {
            userId: true
        },
        orderBy: {
            _count: {
                userId: 'desc'
            }
        },
        take: 1 // Adjust the number of cards you want to retrieve
    });

    const leastOwnedCards = await prisma.ownedCard.groupBy({
        by: ['cardId'],
        _count: {
            userId: true,
        },
        orderBy: {
            _count: {
                userId: 'asc'
            }
        },
        take: 1 // Adjust the number of cards you want to retrieve
    });

    console.log("Most Owned Cards:", mostOwnedCards);
    console.log("Least Owned Cards:", leastOwnedCards);

    // render user
    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-4">User Stats</h1>
            <h3 className="text-xl">ID: {user.id}</h3>
            <h3 className="text-xl">Discord ID: {user.discordId.toString()}</h3>
            <h3 className="text-xl">Kamas: {user.kamas}</h3>
            <h4 className="text-lg mt-4">Stats: {JSON.stringify(user.stats)}</h4>
            <hr className="my-8 border-gray-400" />
            <div>
                <h1 className="text-3xl font-bold mb-4">Global Stats</h1>
                <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-2">Most Owned Card</h2>
                    {// Display most owned card id and user owning this card like this "{id} (Owned by {count} users)"
                    }
                    <h3 className="text-xl">ID: {mostOwnedCards[0].cardId} (Owned by {mostOwnedCards[0]._count.userId} users)</h3>
                </div>
                <div>
                    <h2 className="text-2xl font-bold mb-2">Least Owned Card</h2>
                    {// Display least owned card id and user owning this card like this "{id} (Owned by {count} users)"
                    }
                    <h3 className="text-xl">ID: {leastOwnedCards[0].cardId} (Owned by {leastOwnedCards[0]._count.userId} users)</h3>
                </div>
            </div>
        </div>
    );
}