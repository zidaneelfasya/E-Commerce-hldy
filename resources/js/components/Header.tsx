import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { AlignJustify, Search } from "lucide-react";
import ResponsiveNavLink from "@/Components-breeze/ResponsiveNavLink";
import MenuButton from "./MenuButton";

const Header: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen((prev) => !prev);
    };
    return (
        <header className="bg-white text-black py-4 fixed top-0 w-full z-10 shadow-md">
            <div className="container mx-auto flex items-center justify-between">
                <div className="flex items-center">
                    <MenuButton isOpen={menuOpen} onClick={toggleMenu} />
                    <div className="text-3xl font-extrabold font-serif ml-4">
                        hldy
                    </div>
                </div>

                {/* Navigasi Tengah */}
                <nav className="flex space-x-8">
                    <a href="#" className="hover:underline font-medium">
                        Home
                    </a>
                    <a href="#" className="hover:underline font-medium">
                        Shop
                    </a>
                    <a href="#" className="hover:underline font-medium">
                        Cart
                    </a>
                    <a href="#" className="hover:underline font-medium">
                        Contact
                    </a>
                </nav>

                {/* Pencarian dan Tombol */}
                <div className="flex items-center space-x-4">
                    {/* Pencarian */}
                    <div className="flex items-center border border-gray-300 rounded-md bg-gray-100">
                        <Input
                            type="text"
                            className="border-none p-2 bg-transparent w-64"
                            placeholder="Search"
                        />
                        <Button type="submit" variant="ghost">
                            <Search />
                        </Button>
                    </div>
                    {/* Login dan Register */}
                    <div className="flex space-x-4">
                        <ResponsiveNavLink
                            method="post"
                            href={route("login")}
                            as="button"
                            className="text-sm font-medium text-gray-700 hover:text-black"
                        >
                            Login
                        </ResponsiveNavLink>
                        <ResponsiveNavLink
                            method="post"
                            href={route("register")}
                            as="button"
                            className="text-sm font-medium text-gray-700 hover:text-black"
                        >
                            Register
                        </ResponsiveNavLink>
                    </div>
                </div>
            </div>
            {menuOpen && (
                <div className="absolute top-full left-0 w-5/12  bg-white  z-10">
                    <div className="flex flex-col p-4 space-y-4">
                        <a href="#" className="font-medium">
                            Best Seller
                        </a>
                        <a href="#" className="font-medium">
                            new Arrival
                        </a>
                        <a href="#" className="font-medium">
                            Wanita
                        </a>
                        <a href="#" className="font-medium">
                            Pria
                        </a>
                        <a href="#" className="font-medium">
                            Sale
                        </a>
                        <a href="#" className="font-medium">
                            Big Size
                        </a>
                        <a href="#" className="font-medium">
                            Muslim
                        </a>
                        <a href="#" className="font-medium">
                            Aksesoris
                        </a>
                        <a href="#" className="font-medium">
                            Parfum
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
