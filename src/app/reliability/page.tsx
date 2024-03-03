import Hero from '@/components/Hero'
import relibImg from '@/../public/reliability.jpg'

const ReliabilityPage = () => {
  return (
    <Hero
      imgData={relibImg}
      imgAlt='welding'
      title='We give high reliability hosting' 
    />
  );
};

export default ReliabilityPage;
