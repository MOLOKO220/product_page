import type { Metadata } from "next";
import "./globals.scss";

import ReduxProvider from "./providers/ReduxProvider";
import RedixUiProvider from "./providers/RedixUiProvider";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ReduxProvider>
        <body>
          <RedixUiProvider>{children}</RedixUiProvider>
        </body>
      </ReduxProvider>
    </html>
  );
}
