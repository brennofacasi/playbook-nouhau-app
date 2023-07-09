import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOption: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Nouhau",
      credentials: {
        username: { type: "email" },
        password: { type: "password" },
      },
      async authorize(credentials) {
        const authResponse = await fetch("http://localhost:3030/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: credentials?.username,
            password: credentials?.password,
          }),
        });

        if (!authResponse.ok) {
          return null;
        }

        const user = await authResponse.json();
        return user;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token, user }) {
      session.user = token as any;
      return session;
    },
  },
  pages: {
    signIn: "/",
  },
};

const handler = NextAuth(authOption);

export { handler as GET, handler as POST };
