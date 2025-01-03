import React from "react";
import { SidebarTrigger } from "./ui/sidebar";
import { NavUser } from "./nav-user";
import { User } from "@/types";

const user: User = {
    id: 1,
    name: "shadcn",
    email: "m@example.com",
    avatar: "/flux-image.png",
};

const Navbar = () => {
    return (
        <header className="sticky z-10 bg-backuground/95 supports-[bacdrop-filter]:bg-background/60 backdrop-blur top-0 flex shrink-0 items-center gap-2 border-b g-16 px-3">
            <SidebarTrigger />

            <div className="ml-auto">
                <NavUser
                    user={user}
                    isNavbar
                    btnClassName="hover:bg-transparent focus-visible:ring-0"
                />
            </div>
        </header>
    );
};

export default Navbar;
