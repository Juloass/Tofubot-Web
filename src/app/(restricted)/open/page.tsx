"use client";

import { useSession, signIn, signOut } from "next-auth/react";

export default function Page() {

    const { data: session } = useSession()
    // parse user id from avatar url
    const regex = /https:\/\/cdn\.discordapp\.com\/avatars\/(\d{18})\//;
    const match = session?.user?.image?.match(regex);
    const userId = match ? match[1] : null;

    if (session && session.user) {
        return (
            <>
                Signed in as {session.user.name} ({userId}) <br />
                <button onClick={() => signOut()}>Sign out</button>
            </>
        )
    }
    return (
        <>
            Not signed in <br />
            <button onClick={() => signIn()}>Sign in</button>
        </>
    )
}