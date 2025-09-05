import './globals.css';

export const metadata = {
  title: "Chat App",
  description: "Simple chat app using Mistral API",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">{children}</body>
    </html>
  );
}
