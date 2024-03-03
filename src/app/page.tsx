import Image from "next/image";
import Hero from "@/components/Hero";
import homeImg from "../../public/home.jpg";

export default function Home() {
  return (
    <Hero imgData={homeImg} imgAlt="car fac" title="Proff Cloud Hosting!" />
  );
}
