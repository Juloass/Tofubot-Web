import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const userStats = {
    field1: 'dummy1',
    field2: 'dummy2',
};

async function main() {
    try {
        // Generate dummy data
        await prisma.user.createMany({
            data: [
                { discordId: 543756747651809300n, kamas: 1000, stats: userStats },
                { discordId: 543756747651809280n, kamas: 1000, stats: userStats },
                { discordId: 249270264733368330n, kamas: 0, stats: userStats },
                { discordId: 315900478065999873n, kamas: 100000, stats: userStats },
                { discordId: 334021361280352257n, kamas: 156541654, stats: userStats },
                // Add more dummy data as needed
            ],
            skipDuplicates: true
        });

        await prisma.set.upsert({
            where: { name: 'base-set' },
            update: {},
            create: { name: 'base-set' },
        });

        await prisma.set.upsert({
            where: { name: 'base-extension' },
            update: {},
            create: { name: 'base-extension' },
        });

        await prisma.set.upsert({
            where: { name: 'pwak' },
            update: {},
            create: { name: 'pwak' },
        });

        await prisma.set.upsert({
            where: { name: 'halouine' },
            update: {},
            create: { name: 'halouine' },
        });

        await prisma.set.upsert({
            where: { name: 'nowel' },
            update: {},
            create: { name: 'nowel' },
        });

        const unknownSet = await prisma.set.findFirst({ where: { name: 'unknown' } });
        const baseSet = await prisma.set.findFirst({ where: { name: 'base-set' } });
        const baseExtension = await prisma.set.findFirst({ where: { name: 'base-extension' } });

        await prisma.card.createMany({
            data: [
                { name: 'aminite', rarity: 0, setId: baseSet?.id ?? 0 },
                { name: 'boufton-orageux', rarity: 1, setId: baseSet?.id ?? 0 },
                { name: 'boufton-palichon', rarity: 1, setId: baseSet?.id ?? 0 },
                { name: 'bouftor-ethere', rarity: 2, setId: baseSet?.id ?? 0 },
                { name: 'bouftou-nuageux', rarity: 3, setId: baseSet?.id ?? 0 },
                { name: 'chafer-debutant', rarity: 0, setId: baseExtension?.id ?? 0 },
                { name: 'chafer-eclaireur', rarity: 0, setId: baseExtension?.id ?? 0 },
                { name: 'chafer-furtif', rarity: 1, setId: baseExtension?.id ?? 0 },
                { name: 'chafer-piquier', rarity: 2, setId: baseExtension?.id ?? 0 },
                { name: 'sergent-chafer', rarity: 3, setId: baseExtension?.id ?? 0 },
                { name: 'rib', rarity: 4, setId: baseExtension?.id ?? 0 },
                { name: 'kardorim', rarity: 5, setId: baseExtension?.id ?? 0 },
            ],
            skipDuplicates: true
        });

        // Generate dummy data for other models in a similar way
        const users = await prisma.user.findMany();
        for (const user of users) {
            const cards = await prisma.card.findMany();
            const collection = cards
                .sort(() => Math.random() - 0.5)
                .slice(0, Math.floor(Math.random() * cards.length));
            for (const card of collection) {
                await prisma.ownedCard.upsert({
                    where: {
                        unique_owned_card: {
                            userId: user.discordId,
                            cardId: card.id,
                        }
                    },
                    update: {},
                    create: {
                        userId: user.discordId,
                        cardId: card.id,
                    },
                });
            }
        }

        console.log('Dummy data generated successfully!');
    } catch (error) {
        console.error('Error generating dummy data:', error);
    }
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })