import "./globals.css";
import LayoutWrapper from "./components/Layoutwrapper.jsx";

export const metadata = {
  title: "Gastrotools Product Academy",
};

export default function RootLayout({ children }) {
  return (
    <html lang="da">
      <body>
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
