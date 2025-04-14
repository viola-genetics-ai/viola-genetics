"use client";

import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const menuItems = [
    { name: "Dashboard", href: "admin/" },
    { name: "Analyze", href: "admin/analyze" },
  ];

  return (
    <div className="min-h-screen flex flex-col md:flex-row font-sans">
      {/* Mobile Sidebar */}
      <div className="md:hidden flex items-center justify-between p-4 bg-black text-white">
        <span className="text-xl font-bold text-yellow-400">V-Dash</span>
        <Sheet>
          <SheetTrigger>
            <Menu className="w-6 h-6" />
          </SheetTrigger>
          <SheetContent side="left" className="bg-black text-white w-64">
            <SheetHeader>
              <SheetTitle className="text-yellow-400 text-2xl font-light text-cecnter">
                V-Dash
              </SheetTitle>
            </SheetHeader>

            <nav className="mt-6 flex flex-col gap-4">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="rounded-lg px-4 py-2 hover:bg-yellow-400 hover:text-black transition"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop Sidebar */}
      <aside className="hidden md:flex md:flex-col md:w-64 bg-black text-white p-6 shadow-lg">
        <div className="text-2xl font-bold text-yellow-400 mb-8">V-Dash</div>
        <nav className="flex flex-col gap-4">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="rounded-lg px-4 py-2 hover:bg-yellow-400 hover:text-black transition"
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-white">
        <h1 className="text-2xl font-bold text-black mb-6">Admin Panel</h1>
        {children}
      </main>
    </div>
  );
}
