import Hero from "@/components/Hero";
import scaleImg from '@/../public/scale.jpg'

const ScalePage = () => {
  return (
    <Hero
      imgData={scaleImg}
      imgAlt="Steel Fac!"
      title="Scale to Infi!!...."
    />
  );
};

export default ScalePage;
