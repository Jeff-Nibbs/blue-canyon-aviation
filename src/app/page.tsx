import Header from "@/components/homePage/Header";
import About from "@/components/homePage/About";
import Services from "@/components/homePage/Services";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <main className="bg-white h-fit">
      <Header />
      <About />
      <Services />
      <Footer />
    </main>
  );
}
