import NextAuth, { AuthOptions } from "next-auth";
import DiscordProvider from "next-auth/providers/discord";

// Here we removed the export
const authOptions: AuthOptions = {
    providers: [
        DiscordProvider({
            clientId: process.env.CLIENT_ID as string,
            clientSecret: process.env.CLIENT_SECRET as string,
        }),
    ],
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }