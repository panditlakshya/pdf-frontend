import AppSidebar from "@/components/custom/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <>
        <AppSidebar />
        <main className="flex-1 h-screen flex flex-col">
          <SidebarTrigger />
          {children}
        </main>
      </>
    </SidebarProvider>
  );
}
