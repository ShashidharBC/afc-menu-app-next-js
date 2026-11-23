import { Inter } from "next/font/google";
import "./globals.css";
import { AppSidebar } from "@/components/app-sidebar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Amareshwara Fast Food Center (AFC)",
  description: "Fresh, tasty fast food in the heart of Guledagudda.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} min-h-screen bg-gradient-to-br from-sky-100 via-blue-50 to-cyan-100 bg-fixed text-slate-800 antialiased`}
      >
        <SidebarProvider>
          <div className="flex min-h-screen w-full">
            <AppSidebar />
            <SidebarInset className="flex flex-col flex-1 w-full bg-transparent">
              <header className="sticky top-0 z-30 flex h-16 shrink-0 items-center gap-2 border-b border-white/60 bg-white/50 backdrop-blur-xl transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
                <div className="flex items-center gap-2 px-4">
                  <SidebarTrigger className="-ml-1 text-sky-700 hover:bg-sky-100" />
                  <Separator
                    orientation="vertical"
                    className="mr-2 h-4 bg-sky-200"
                  />
                  <Breadcrumb>
                    <BreadcrumbList>
                      <BreadcrumbItem className="hidden md:block">
                        <BreadcrumbLink
                          href="#"
                          className="text-sky-600 hover:text-sky-800"
                        >
                          Enjoy Your Fast Food
                        </BreadcrumbLink>
                      </BreadcrumbItem>
                      <BreadcrumbSeparator className="hidden md:block text-sky-400" />
                      <BreadcrumbItem>
                        <BreadcrumbPage className="text-base sm:text-lg font-semibold bg-gradient-to-r from-sky-700 to-blue-600 bg-clip-text text-transparent">
                          {"Amareshwara Fast Food Center (AFC)"}
                        </BreadcrumbPage>
                      </BreadcrumbItem>
                    </BreadcrumbList>
                  </Breadcrumb>
                </div>
              </header>
              <main className="flex-1 w-full">{children}</main>
            </SidebarInset>
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}
