
import AnimatedTextCharacter from "./AnimatedText"


export default function PageHeading({ heading, subHeading }) {

 


  return (<>



<section className="hero-home bg-box flex items-center sm:mt-[-100px] text-center min-h-screen  pb-[50px]">
          <div className="container mx-auto">
            <div className="grid gap-[30px]">
            <h1 data-aos="fade-up" className="heading-1"><span className="block">
                <AnimatedTextCharacter text={heading && heading} />
            </span>
            </h1>
            <p data-aos="fade-up" data-delay="500" className="sm:max-w-[70%] mx-auto" dangerouslySetInnerHTML={{ __html: subHeading && subHeading }} />
            <div className='mt-3 flex items-center'>
            </div>
          </div>
          </div>
        </section>


  </>)
}