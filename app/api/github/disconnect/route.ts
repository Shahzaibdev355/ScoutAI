import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const cookieStore = await cookies();
        
        // Remove the GitHub token cookie
        cookieStore.delete('gh_token');
        
        return NextResponse.json({ 
            success: true, 
            message: "GitHub disconnected successfully" 
        });
    } catch (error) {
        console.error('Error disconnecting GitHub:', error);
        return NextResponse.json(
            { error: "Failed to disconnect GitHub" }, 
            { status: 500 }
        );
    }
}