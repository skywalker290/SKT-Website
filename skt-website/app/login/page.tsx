"use client";

import { useActionState } from "react";
import { authenticate } from "./actions";
import Link from "next/link";

export default function LoginPage() {
  const [errorMessage, formAction, isPending] = useActionState(
    authenticate,
    undefined,
  );

  return (
    <main className="min-h-screen bg-surface flex items-center justify-center p-6 bg-[url('https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=2000')] bg-cover bg-center relative">
      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

      {/* Glassmorphism Login Card */}
      <div className="relative z-10 w-full max-w-md bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl shadow-2xl">
        <div className="text-center mb-8">
          <Link href="/">
            <div className="inline-block px-3 py-1 mb-4 rounded-full bg-primary/20 border border-primary/30 text-primary-container text-xs font-bold uppercase tracking-widest cursor-pointer hover:bg-primary/30 transition">
              Return Home
            </div>
          </Link>
          <h1 className="font-display text-4xl font-bold text-white mb-2">
            Client Portal
          </h1>
          <p className="text-white/80 font-sans text-sm">
            Sign in to access your bespoke itineraries and digital concierge.
          </p>
        </div>

        <form action={formAction} className="space-y-6">
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-white/80" htmlFor="email">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="user@example.com"
              required
              className="w-full px-4 py-3 rounded-xl bg-black/20 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all backdrop-blur-sm font-sans"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-white/80" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              name="password"
              required
              defaultValue="password"
              className="w-full px-4 py-3 rounded-xl bg-black/20 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all backdrop-blur-sm font-sans"
            />
          </div>

          {errorMessage && (
            <div className="p-3 text-sm text-red-200 bg-red-900/30 border border-red-900/50 rounded-xl backdrop-blur-md">
              {errorMessage}
            </div>
          )}

          <button
            type="submit"
            disabled={isPending}
            className="w-full py-4 rounded-xl bg-primary text-white font-bold tracking-wide hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/30 flex justify-center items-center"
          >
            {isPending ? (
              <span className="opacity-80">Authenticating...</span>
            ) : (
              "Sign In to Portal"
            )}
          </button>
        </form>
        
        <div className="mt-8 text-center text-white/60 text-xs font-sans">
          <p>Mock login: user@example.com / password</p>
        </div>
      </div>
    </main>
  );
}
