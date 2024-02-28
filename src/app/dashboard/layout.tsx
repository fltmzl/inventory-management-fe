import React from "react";
import Drawer from "./components/Drawer/Drawer";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <Drawer />
      <main className="bg-zinc-200 dark:bg-stone-900 flex-1 h-screen overflow-auto">{children}</main>
    </div>
  );
}
