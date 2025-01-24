import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
import { Provider } from "@/components/ui/provider";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-[#f1f3f5]">
      <body className="w-[500px] min-h-screen mx-auto bg-white">
        <Provider>
        <Header />
        {children}
        <Footer/>
        </Provider>
      </body>
    </html>
  );
}