import "@rainbow-me/rainbowkit/styles.css";
import "~~/styles/globals.css";
import { getMetadata } from "~~/utils/scaffold-eth/getMetadata";

export const metadata = getMetadata({
  title: "Zk Multiverse",
  description: "Learn ZK with ZK Multiverse",
});

const ScaffoldEthApp = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="bg-local h-screen bg-repeat" style={{ backgroundImage: "url(/images/inner-bg.png)" }}>
      {children}
    </section>
  );
};

export default ScaffoldEthApp;
