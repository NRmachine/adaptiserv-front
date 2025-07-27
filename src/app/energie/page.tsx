import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Energie from "../components/energie";
import Partenaire from "../components/partenaire";

export default function EnergiePage() {
  return (
    <div>
      <Navbar />
      <Energie />
      <Partenaire />
      <Footer />
    </div>
  );
}