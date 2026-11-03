
import "./globals.css";

function NavBar() {
  return (
    <nav className="navbar">
      <h2>🍽️ NextBites</h2>
      <p>Discover delicious recipes</p>
    </nav>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
