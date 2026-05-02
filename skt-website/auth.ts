import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Credentials({
      name: "Mock Login",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "user@example.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const email = String(credentials?.email || "").trim();
        const password = String(credentials?.password || "");
        
        if (email === "user@example.com" && password === "password") {
          return { id: "1", name: "Elite Member", email: "user@example.com" };
        }
        
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  secret: process.env.AUTH_SECRET || "srikela_travels_mock_secret_key_2026",
  callbacks: {
    authorized({ request, auth }) {
      return true; // We don't block anything globally
    },
  },
});
