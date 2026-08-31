import "./globals.css";

export const metadata = {
  title: "Aamir Hussain | WordPress & Front-End Developer",
  description:
    "Portfolio of Aamir Hussain, WordPress Developer and Front-End Developer specializing in responsive websites, React and Next.js.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}