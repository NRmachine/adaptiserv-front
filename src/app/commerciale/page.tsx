// src/app/commerciale/page.tsx

"use client"; // Keep this if AgentCommercial uses client-side features

import Navbar from "../components/navbar";
import Footer from "../components/footer";
import AgentCommercial from "../components/AgentCommercial"; // Make sure this path is correct

export default function CommercialePage() { // Renamed to avoid conflict and be more descriptive for a page
  return (
    <div>
      <Navbar />
      <AgentCommercial /> {/* Correctly rendering your component */}
      <Footer />
    </div>
  );
}