import BePart from "./BePart";
import Footer from "./Footer";
import Impact from "./Impact";
import Navbar from "./Navbar";
import { StoriesHope } from "./StoriesHope";
import { ContactSection } from "./VoluntaryForm";

export function Page() {
  return (
    <>
      <Navbar />
      <StoriesHope />
      <BePart />
      <Impact />
      <ContactSection />
      <Footer />
    </>
  );
}
