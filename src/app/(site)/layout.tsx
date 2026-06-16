import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NavigationProgress from "@/components/NavigationProgress";
import InitialLoader from "@/components/InitialLoader";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <InitialLoader />
      <NavigationProgress />
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
