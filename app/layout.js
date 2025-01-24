"use client"; // 클라이언트 컴포넌트로 변환

import Header from "./components/header";
import Footer from "./components/footer";
import "./globals.css"
import ClientProvider from "./components/ClientProvider";

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning lang="en" className="bg-[#f1f3f5]">
      <body className="w-[500px] min-h-screen mx-auto bg-white">
        <ClientProvider>
        <Header />
        {children}
        <Footer/>
        </ClientProvider>
      </body>
    </html>
  );
}
