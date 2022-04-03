import NextAuth from "next-auth";
import EmailProvider from "next-auth/providers/email";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    }),
  ],
  theme: {
    colorScheme: "dark",
  },
  pages: {

  },
  callbacks: {
    async jwt({ token }) {
      return token;
    },
    async redirect(url, baseUrl){
      return 'http://localhost:3000'
    },
    async session({session, token, user}){
      session.user.name = session.user.name.split(' ')[0];
      return session;
    }
  },
  secret: process.env.JWT_SECRET,
});
