import { Provider } from "./providers/provider";
import "./globals.css";
import Sidebar from "./components/SideMenu";

export const metadata = {
  title: "Bibliotheca DAO",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main className="flex h-screen">
          <Provider>
            <Sidebar />
            {children}
          </Provider>
          {/* <div className="p-2">{children}</div> */}
        </main>
      </body>
    </html>
  );
}
