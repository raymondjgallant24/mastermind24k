import './globals.css';

export const metadata = {
    title: 'Mastermind24k',
    description: 'Welcome to Mastermind24k!',
  };
  
  export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <head />
        <body className="min-h-screen bg-gray-900 text-yellow-400">{children}</body>
      </html>
    );
  }
  