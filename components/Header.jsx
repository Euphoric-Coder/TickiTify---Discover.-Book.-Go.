import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import SearchBar from "./SearchBar";

function Header() {
  return (
    <div className="border-b bg-white">
      {/* Desktop Header */}
      <div className="hidden lg:flex items-center justify-between gap-6 p-4">
        {/* Left: Logo */}
        <div className="flex items-center gap-2 shrink-0">
          <Link href="/" className="flex items-center font-bold">
            <Image
              src={"/logo.png"}
              alt="logo"
              width={50}
              height={50}
              className="w-12 lg:w-16"
            />
            <span className="text-2xl lg:text-3xl text-primary font-bold">
              TickiTify
            </span>
          </Link>
        </div>

        {/* Center: SearchBar */}
        <div className="flex-1 flex justify-center px-6">
          <SearchBar />
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-3">
          <SignedIn>
            <div className="flex items-center gap-3">
              <Link href="/seller">
                <button className="bg-blue-600 text-white px-3 py-1.5 text-sm rounded-lg hover:bg-blue-700 transition">
                  Sell Tickets
                </button>
              </Link>
              <Link href="/tickets">
                <button className="bg-gray-100 text-gray-800 px-3 py-1.5 text-sm rounded-lg hover:bg-gray-200 transition border border-gray-300">
                  My Tickets
                </button>
              </Link>
              <UserButton />
            </div>
          </SignedIn>
          <SignedOut>
            <SignInButton mode="modal">
              <button className="bg-gray-100 text-gray-800 px-3 py-1.5 text-sm rounded-lg hover:bg-gray-200 transition border border-gray-300">
                Sign In
              </button>
            </SignInButton>
          </SignedOut>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="lg:hidden flex flex-col gap-3 p-4">
        {/* Top: Logo + User */}
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center font-bold">
            <Image
              src={"/logo.png"}
              alt="logo"
              width={40}
              height={40}
              className="w-10"
            />
            <span className="text-xl text-primary font-bold ml-2">
              TickiTify
            </span>
          </Link>
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <SignInButton mode="modal">
              <button className="bg-gray-100 text-gray-800 px-3 py-1 text-sm rounded-lg hover:bg-gray-200 transition border border-gray-300">
                Sign In
              </button>
            </SignInButton>
          </SignedOut>
        </div>

        {/* Middle: SearchBar */}
        <SearchBar />

        {/* Bottom: Action Buttons */}
        <div className="w-full flex justify-center gap-3">
          <SignedIn>
            <Link href="/seller" className="flex-1">
              <button className="w-full bg-blue-600 text-white px-3 py-1.5 text-sm rounded-lg hover:bg-blue-700 transition">
                Sell Tickets
              </button>
            </Link>

            <Link href="/tickets" className="flex-1">
              <button className="w-full bg-gray-100 text-gray-800 px-3 py-1.5 text-sm rounded-lg hover:bg-gray-200 transition border border-gray-300">
                My Tickets
              </button>
            </Link>
          </SignedIn>
        </div>
      </div>
    </div>
  );
}

export default Header;
