import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-[#f1f3f5]">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="w-[500px] min-h-screen mx-auto bg-white">
        {children}
      </body>
    </html>
  );
}
