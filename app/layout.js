import "./globals.css";
import Layoutwrapper from "./components/Layoutwrapper.jsx";

export const metadata = {
  title: "Gastrotools Product Academy",
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="da">
      <body>
        <Layoutwrapper>{children}</Layoutwrapper>
      </body>
    </html>
  );
}
