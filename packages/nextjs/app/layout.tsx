import { Play } from "next/font/google";
import "@rainbow-me/rainbowkit/styles.css";
import { ScaffoldEthAppWithProviders } from "~~/components/ScaffoldEthAppWithProviders";
import { ThemeProvider } from "~~/components/ThemeProvider";
import "~~/styles/globals.css";
import { getMetadata } from "~~/utils/scaffold-eth/getMetadata";

export const metadata = getMetadata({
  title: "Zk Multiverse",
  description: "Learn ZK with ZK Multiverse",
});

const play = Play({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-play",
} as any);

const ScaffoldEthApp = ({ children }: { children: React.ReactNode }) => {
  return (
    <html
      style={{ backgroundImage: "url(/images/inner-bg.png)" }}
      className={`bg-local h-screen bg-repeat ${(play as any).variable}`}
      suppressHydrationWarning
    >
      <body className="bg-local" style={{ backgroundImage: "url(/images/bg.jpg)" }}>
        <ThemeProvider enableSystem>
          <ScaffoldEthAppWithProviders>{children}</ScaffoldEthAppWithProviders>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default ScaffoldEthApp;
