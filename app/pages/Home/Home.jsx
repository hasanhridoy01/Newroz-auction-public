import Hero from "@/app/components/HomeComponents/Hero/Hero";
import "./Home.css";
import TabsItems from "@/app/components/HomeComponents/TabsItems/TabsItems";
import HowItWorks from "@/app/components/HomeComponents/HowItWorks/HowItWorks";
import HowItWorkSmall from "@/app/components/HomeComponents/HowItWorkSmall/HowItWorkSmall";
import Certified from "@/app/components/HomeComponents/Certified/Certified";
import Press from "@/app/components/HomeComponents/Press/Press";
import Promotional from "@/app/components/HomeComponents/Promotional/Promotional";

const HomeComponents = () => {
  return (
    <div>
      <Hero />
      <TabsItems />
      <HowItWorks />
      <HowItWorkSmall />
      <Certified />
      <Press />
      <Promotional />
    </div>
  );
};

export default HomeComponents;
