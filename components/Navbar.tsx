import Link from "next/link";
import { auth, signIn, signOut } from "@/auth";
import Image from "next/image";
import {Session} from "next-auth";
import {JSX} from "react";


const Navbar = async () :Promise<JSX.Element> => {
    const session : Session | null = await auth();
    return (
  <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
    <nav className="flex justify-between items-center">
      <Link href="/">
        <Image src="/logo.png" alt="logo" width={144} height={30} />
      </Link>
      <div className="flex item-center gap-5 text-black">
        {session && session?.user ? (
          <>
            <Link href="/startup/create">
              <span>Create</span>
            </Link>

            <form action={async () :Promise<void> => {
              'use server'

              await signOut()
              }}>
              <button type="submit">Logout</button>
            </form>            
              <span>{session?.user?.name}</span>
            
          </>
        ) : (
            <>
          <form action={async() :Promise<void> =>{
            'use server';

            await signIn( "github");
          }}>
            <button type="submit">Login</button>
          </form>
            </>
        )}
      </div>
    </nav>
  </header>
  
)
};

export default Navbar;
