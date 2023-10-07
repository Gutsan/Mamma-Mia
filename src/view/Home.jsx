import { HeroSection } from "../Components/Hero-Section";
import { CardCart } from "../Components/cardCart";
import { Gallery } from "../Components/gallery";
import "./home.css"
export const Home = () => {
  return (
    <>
    <HeroSection />
    <main>
      <Gallery />
      <CardCart />
    </main>
    </>
  );
};
