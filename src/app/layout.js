import "./globals.css";

export const metadata = {
  title: "MarketingMatch",
  icons:{
    icon: null,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
