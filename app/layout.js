import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="w-[500px] min-h-screen mx-auto border-2 border-gray-500">
        {children}
      </body>
    </html>
  );
}
