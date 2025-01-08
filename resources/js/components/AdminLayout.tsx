import React, { ReactHTML, ReactNode } from "react";
import { SidebarInset, SidebarProvider } from "./ui/sidebar";
import { AppSidebar } from "./app-sidebar";
import Navbar from "./Navbar";

const AdminLayout = ({
    children,
    header,
}: {
    children: React.ReactNode;
    header?: ReactNode;
}) => {
    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
                <Navbar />
                {header && (
                    <header className="bg-white shadow">
                        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                            {header}
                        </div>
                    </header>
                )}
                <main className="p-5"> {children}</main>
            </SidebarInset>
        </SidebarProvider>
    );
};

export default AdminLayout;
