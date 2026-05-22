import { db } from "@/db";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({
        message: "Admin Credits API",
        usage: "POST with { email, credits } to add credits",
        example: {
            email: "shahzaibsheikh233@gmail.com",
            credits: 20000
        }
    });
}

export async function POST(req: NextRequest) {
    try {
        const { email, credits } = await req.json();
        
        // Simple admin check - you can enhance this with proper auth
        const adminEmails = ["shahzaibsheikh233@gmail.com"];
        
        if (!adminEmails.includes(email)) {
            return NextResponse.json(
                { error: "Unauthorized" }, 
                { status: 403 }
            );
        }

        // Find user by email
        const [user] = await db.select()
            .from(users)
            .where(eq(users.email, email));

        if (!user) {
            return NextResponse.json(
                { error: "User not found" }, 
                { status: 404 }
            );
        }

        // Add credits to existing balance
        const newCredits = user.credits + credits;
        
        await db.update(users)
            .set({ credits: newCredits })
            .where(eq(users.email, email));

        return NextResponse.json({
            message: `Successfully added ${credits} credits`,
            email: email,
            previousCredits: user.credits,
            newCredits: newCredits
        });

    } catch (error) {
        console.error('Error adding credits:', error);
        return NextResponse.json(
            { error: 'Failed to add credits' }, 
            { status: 500 }
        );
    }
}