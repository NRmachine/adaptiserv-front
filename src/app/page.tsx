import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Landinghome from "./components/landinghome"

export default function Home() {
  return (
    <div className="dark bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">
      <Navbar />
      <Landinghome/>
    </div>
  );
}


