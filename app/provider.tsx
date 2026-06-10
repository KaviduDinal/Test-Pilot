"use client"
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useUser } from '@clerk/nextjs';
import { UserDetailContext } from '../context/UserDetailContext';

function Provider({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    const [userDetails, setUserDetails] = useState<any>();
    const { isSignedIn, user } = useUser();

    useEffect(() => {
        if (!isSignedIn || !user) return;

        const clerkUserId = user.id as string;
        const email = (user.emailAddresses && user.emailAddresses[0]?.emailAddress) || user.primaryEmailAddress?.emailAddress || null;
        const name = (user.firstName || user.fullName) ? `${user.firstName ?? ''} ${user.lastName ?? ''}`.trim() || user.fullName || null : null;

        const createNewUser = async () => {
            try {
                const result = await axios.post("/api/users", {
                    clerkUserId: user.id,
                    email: user.primaryEmailAddress?.emailAddress,
                    name: user.fullName,
                });
                setUserDetails(result.data?.user);
            } catch (err) {
                console.error('Failed to create user', err);
            }
        }
        createNewUser();
    }, [isSignedIn, user])

    return (
        <UserDetailContext.Provider value={{ userDetails, setUserDetails }}>
            <div>{children}</div>
        </UserDetailContext.Provider>
    )
}
export default Provider