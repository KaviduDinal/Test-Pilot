import { db, users } from "@/db";
import {currentUser} from "@clerk/nextjs/server";
import {eq} from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req:NextRequest) {
    const User=await currentUser();

    try{
        const userResult=await db.select().from(users).where(
            eq(users.email,User?.primaryEmailAddress?.emailAddress??'')
        );
        if(userResult.length==0) {
            const newUser =await db.insert(users).values({
                email:User?.primaryEmailAddress?.emailAddress??'',
                clerkUserId:User?.id??'',
                name:User?.fullName??'New User'
            }).returning();

            return NextResponse.json({user:newUser[0]});
        }
        else{
            return NextResponse.json({user:userResult[0]});
        }
    }
    catch(e){
        console.error("Error in user route:",e);
        return NextResponse.json({error:"Failed to fetch or create user"}, {status:500});

    }
}