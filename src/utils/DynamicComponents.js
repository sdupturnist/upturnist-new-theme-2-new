
import Loading from '@/components/Loading';
import dynamic from 'next/dynamic';


export const PortfolioSlider = dynamic(() => import('../components/WorkSlider'), {
    loading: () => <Loading />,
    ssr: false,
  });


  export const TestimonialSlider = dynamic(() => import('../components/TestimonialSlider'), {
    loading: () => <Loading />,
    ssr: false,
  });



  export const HeroContent = dynamic(() => import('../components/HeroDescription'), {
    ///loading: () => <Loading />,
    ssr: false,
  });