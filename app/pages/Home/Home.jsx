import Hero from "@/app/components/HomeComponents/Hero/Hero";
import "./Home.css";
import TabsItems from "@/app/components/HomeComponents/TabsItems/TabsItems";
import HowItWorks from "@/app/components/HomeComponents/HowItWorks/HowItWorks";

const HomeComponents = () => {
  return (
    <div>
      <Hero />
      <TabsItems />
      <HowItWorks />
    </div>
  );
};

export default HomeComponents;
