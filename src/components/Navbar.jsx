import { useState } from "react";
import IkImage from "./Image";
import { Link } from "react-router";
import { SignedIn, UserButton, SignedOut, SignInButton } from "@clerk/clerk-react";

function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <div className="w-full h-16 md:h-20 flex items-center justify-between">
            {/* LOGO */}
            <Link to="/" className="flex items-center gap-4 text-2xl font-bold">
                {/* <Image path="/logo.png" className="w-8 h-8" alt="" /> */}
                <IkImage source={"logo.png"} alt="Lemon logo" className={"w-8 h-8"} />
                <span>Lemon Blog</span>
            </Link>

            {/* MOBILE MENU */}
            <div className="md:hidden">
                {/* MOBILE BUTTON */}
                <div 
                    className="cursor-pointer text-4xl" 
                    onClick={() => setOpen(!open)}
                >
                    {open ? "X" : "𐩘"}
                </div>
                {/* MOBILE LINK LIST */}
                <div className={`w-full h-screen flex flex-col items-center justify-center gap-8 font-medium text-lg absolute top-16 transition-all ease-in-out ${open ? "-right-0" : "-right-[100%]"}`}>
                    <Link to="/">Home</Link>
                    <Link to="/">Trending</Link>
                    <Link to="/">Most Popular</Link>
                    <Link to="/">About</Link>
                    <Link to="/login">
                        <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">Login 👋</button>
                    </Link>
                </div>
            </div>
            
            {/* DESKTOP MENU */}
            <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
                <Link to="/">Home</Link>
                <Link to="/">Trending</Link>
                <Link to="/">Most Popular</Link>
                <Link to="/">About</Link>
                <SignedIn>
                    <UserButton />
                </SignedIn>
                <SignedOut>
                    <Link to="/login">
                        <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">Login 👋</button>
                    </Link>
                </SignedOut>
            </div>
        </div>
    );
}

export default Navbar