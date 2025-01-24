import Header from "./components/header";
import Provider from "@/app/components/ui/provider"

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className="bg-[#f1f3f5]">
      <body className="w-[500px] min-h-screen mx-auto bg-white">
        <Provider>
          <Header />
          {children}
        </Provider>
      </body>
    </html>
  );
}