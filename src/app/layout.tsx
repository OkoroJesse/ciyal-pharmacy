import type { Metadata } from 'next';
import './globals.css';
import { CartProvider } from '@/context/CartContext';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { CartDrawer } from '@/components/CartDrawer';
import { PrescriptionUploadModal } from '@/components/PrescriptionUploadModal';
import { Preloader } from '@/components/Preloader';
import { BookingModal } from '@/components/BookingModal';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'Ciyal Pharmacy | Modern Healthcare & Express Delivery',
  description: 'Experience clinical excellence with modern convenience. Access authentic medications, seek expert counseling, and schedule vaccination or screenings with same-day temperature-controlled local delivery.',
  keywords: 'pharmacy, online pharmacy, prescription refill, same day medicine delivery, telehealth consultation, clinical checkup',
  authors: [{ name: 'Ciyal Pharmacy' }],
  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen flex flex-col bg-bg-custom text-text-custom selection:bg-primary/10 selection:text-primary">
        <CartProvider>
          {/* Main Navigation Header */}
          <Navbar />
          
          {/* Page Content Shell */}
          <main className="flex-grow pt-24">
            {children}
          </main>
          
          {/* Main Footer */}
          <Footer />

          {/* Overlays & Drawers (Universal Site-Wide Actions) */}
          <Preloader />
          <CartDrawer />
          <PrescriptionUploadModal />
          <BookingModal />
        </CartProvider>
      </body>
    </html>
  );
}
