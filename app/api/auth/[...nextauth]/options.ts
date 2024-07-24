import {getServerSession, NextAuthOptions} from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import {userService} from "@/lib/auth";
import {PrismaAdapter} from "@next-auth/prisma-adapter";
import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient()

export const authOptions: NextAuthOptions = {
    // Secret for Next-auth, without this JWT encryption/decryption won't work
    secret: process.env.NEXTAUTH_SECRET,
    adapter: PrismaAdapter(prisma),
    // Configure one or more authentication providers
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_APP_CLIENT_ID as string,
            clientSecret: process.env.GITHUB_APP_CLIENT_SECRET as string,
            profile(profile) {
                console.log("github" + profile)
                profile.refresh
                return {
                    id: profile.id.toString(),
                    name: profile.name ?? profile.login,
                    email: profile.email,
                    image: profile.avatar_url
                }
            },

        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_APP_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
            httpOptions: {
                timeout: 10000,
            },
        }),
        Credentials({
            name: 'Credentials',
            credentials: {
                username: {label: "Username", type: "text"},
                password: {label: "Password", type: "password"}
            },
            async authorize(credentials, req) {
                const {username, password} = credentials as {
                    username: string,
                    password: string
                }
                console.log('credentials', credentials)
                return userService.authenticate(username, password)
            }

        })
    ],
    pages: {
        // signIn: "/auth/login",
    },
    session: {
        strategy: "jwt"
    },
    callbacks: {
        async jwt({token, account, profile}) {
            if (account && account.type === "credentials") {
                token.userId = account.providerAccountId
            }
            // console.log('jwt', token,account,profile)
            return token
        },
        async session({session, token, user}) {
            session.user.id = token.userId
            return session
        }
    }
};

export const getServerAuthSession = () => getServerSession(authOptions)
