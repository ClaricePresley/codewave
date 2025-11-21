import BePart from "./BePart";
import Footer from "./Footer";
import Impact from "./Impact";
import Navbar from "./Navbar";
import { StoriesHope } from "./StoriesHope";
import { ContactSection } from "./VoluntaryForm";
import { QuemSomos } from "./QuemSomos";

export function Page() {
  return (
    <>
      <Navbar />
      <QuemSomos />  
      <StoriesHope />
      <BePart />
      <Impact />
      <ContactSection />
      <Footer />
    </>
  );
}
