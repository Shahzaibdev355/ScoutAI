"use client";

import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import React, { useContext } from 'react'
import { UserDetailContext } from '@/context/UserDetailContext'
import { Coins } from 'lucide-react'
import Link from "next/link";


// ─── Design Tokens ───────────────────────────────────────────────
const C = {
    primary: "#6d9846",
    primaryDark: "#537832",
    primaryLight: "#8ab85c",
    primaryBg: "#f2f7ed",
    primaryMid: "#d4e8c2",
    ink: "#0d1a05",
    inkMid: "#2d3d20",
    muted: "#6b7a5e",
    subtle: "#9aaa8c",
    border: "#e2ecd8",
    borderMid: "#cddcb8",
    surface: "#ffffff",
    surfaceAlt: "#f7faf4",
    bg: "#fafdf7",
} as const;

function WorkspaceHeader() {
    const { userDetail } = useContext(UserDetailContext);

    return (
        <div className='flex w-full justify-between p-4 items-center shadow-sm bg-white'>
            {/* Logo  */}
            {/* <div style={{ display: "flex", alignItems: "center", gap: 9 }}> */}
            <Link
                href="/"
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 9,
                    textDecoration: "none",
                    cursor: "pointer"
                }}
            >
                <div style={{
                    width: 32, height: 32, borderRadius: 9,
                    background: `linear-gradient(135deg, ${C.primaryDark}, ${C.primary})`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 16, boxShadow: `0 4px 12px ${C.primary}44`,
                }}>⚡</div>
                <span style={{ fontFamily: "'Geist', sans-serif", fontWeight: 600, fontSize: 16, letterSpacing: "-0.02em", color: C.ink }}>ScoutAI</span>
                <span style={{
                    fontFamily: "'Geist Mono', monospace", fontSize: 10, fontWeight: 500,
                    color: C.primary, background: C.primaryBg, border: `1px solid ${C.primaryMid}`,
                    borderRadius: 6, padding: "2px 7px", letterSpacing: "0.04em",
                }}>AI</span>
            </Link>


            {/* menu Options  */}
            <ul className='flex gap-8 text-sm font-medium'>
                <li>
                    <Link href="/workspace" className='hover:text-blue-600 cursor-pointer'>
                        Workspace
                    </Link>
                </li>

                <li>
                    <Link href="/workspace/pricing" className='hover:text-blue-600 cursor-pointer'>
                        Pricing
                    </Link>
                </li>

                <li>
                    <Link href="/workspace/contact-us" className='hover:text-blue-600 cursor-pointer'>
                        Support
                    </Link>
                </li>
            </ul>

            {/* User Details & Button  */}
            <div className='flex items-center gap-4'>
                {userDetail && (
                    <div className='flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium border border-blue-100'>
                        <Coins className='w-4 h-4 text-blue-500' />
                        {userDetail.credits} Credits
                    </div>
                )}
                <UserButton />
            </div>
        </div>
    )
}

export default WorkspaceHeader