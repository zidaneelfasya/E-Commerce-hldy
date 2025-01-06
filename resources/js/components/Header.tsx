import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const Header = () => {
    return (
        <header className="bg-purple-800 text-white py-4 fixed top-0 w-full z-10">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-lg font-bold">hldy</div>
                <nav className="flex space-x-4">
                    <a href="#" className="hover:underline">Home</a>
                    <a href="#" className="hover:underline">Shop</a>
                    <a href="#" className="hover:underline">Cart</a>
                    <a href="#" className="hover:underline">Contact</a>
                </nav>
                <div className="flex w-full max-w-lg items-center space-x-2">
                    <Input type="email" className="border p-2 w-3/4 bg-white" placeholder="Cari Produk" />
                    <Button type="submit" className="w-1/4" variant="ghost">
                        <Search />
                    </Button>
                </div>
                <div className="flex space-x-4 mt-4">
                    <Button variant="ghost">Login</Button>
                    <Button variant="ghost">Register</Button>
                </div>
            </div>
        </header>
    );
};

export default Header;
