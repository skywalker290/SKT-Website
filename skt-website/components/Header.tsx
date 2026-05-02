import React from "react";
import Link from "next/link";
import { auth, signOut } from "@/auth";

export default async function Header() {
  const session = await auth();

  return (
    <header className="bg-surface/80 backdrop-blur-xl shadow-sm sticky top-0 z-50">
      <nav className="flex justify-between items-center w-full px-8 py-4 max-w-7xl mx-auto">
        <Link href="/" className="text-2xl font-black text-primary italic font-display tracking-tight">
          Sri Kela Travels
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-primary border-b-2 border-primary pb-1 font-display font-bold tracking-tight">Home</Link>
          <Link href="/services" className="text-on-surface-variant font-medium hover:text-primary transition-colors font-display tracking-tight">Services</Link>
          <Link href="/destinations" className="text-on-surface-variant font-medium hover:text-primary transition-colors font-display tracking-tight">Destinations</Link>
          <Link href="/about" className="text-on-surface-variant font-medium hover:text-primary transition-colors font-display tracking-tight">About</Link>
          <Link href="/contact" className="text-on-surface-variant font-medium hover:text-primary transition-colors font-display tracking-tight">Contact</Link>
        </div>
        
        <div className="flex items-center gap-6">
          {session ? (
            <div className="flex items-center gap-6">
              <div className="hidden md:flex items-center gap-2 text-sm text-on-surface font-medium">
                <span className="opacity-80">Welcome,</span>
                <span className="font-bold">{session.user?.name}</span>
              </div>
              <form action={async () => {
                "use server";
                await signOut();
              }}>
                <button className="text-sm font-bold text-on-surface-variant hover:text-primary transition-colors">
                  Sign Out
                </button>
              </form>
            </div>
          ) : (
            <Link href="/login" className="text-sm font-bold text-on-surface-variant hover:text-primary transition-colors">
              Sign In
            </Link>
          )}
          <button className="bg-primary hover:bg-primary-container text-white px-6 py-2.5 rounded-xl font-bold transition-all hover:scale-105 active:scale-95 duration-200 shadow-sm hidden md:block">
            Enquire
          </button>
        </div>
      </nav>
    </header>
  );
}
