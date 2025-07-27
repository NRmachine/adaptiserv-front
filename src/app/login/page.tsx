import Connexion from "../components/connexion";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function Login() {
  return (
    <div className="bg-white">
      <Navbar />
      <Connexion />
      <Footer />
    </div>
  );
}