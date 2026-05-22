import { ClerkProvider } from '@clerk/nextjs';
import "./globals.css";
import type { Metadata } from "next";
// import WorkspaceHeader from '../components/customs/WorkspaceHeader';
import Provider from './provider';
// import WorkspaceBody from '@/components/customs/WorkspaceBody';

export const metadata: Metadata = {
  title: "ScoutAI | AI Powered Code Testing & Automation",
  description: "Connect your GitHub repositories, generate intelligent test workflows, detect issues automatically, and accelerate software delivery with AI agents.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body style={{ margin: 0, padding: 0 }}>
          <Provider>
          {/* <WorkspaceHeader /> */}
            {children}
          {/* <WorkspaceBody /> */}
          </Provider>
        </body>
      </html>
    </ClerkProvider>
  );
}
