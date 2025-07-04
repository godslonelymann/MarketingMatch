import { Inter } from 'next/font/google';
import "./globals.css";
import Navbar from './components/Navbar';
// import CTAButton from './components/ui/CTAButton';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: "MarketingMatch",
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
