
import BlurAnimation from '@/components/BlurAnimation'
import BackgroundAnimation from '@/components/BackgroundAnimation'
import { AOSInit } from '@/components/Aos'
import AnimatedTextCharacter from '@/components/AnimatedText'
import Layout from '@/components/Layout'






export default function Thankyou() {
    return (
        <>
         <Layout>
            <AOSInit />
            <section style={{ marginTop: '-120px' }} className="hero sm:h-screen h-[80vh] flex items-center sm:py-20 py-6 overflow-hidden relative text-center">
                <div className="container z-10 relative">
                    <div className="grid gap-10">
                      <h1 className="heading-1" data-aos="fade-up">We appreciate your time to<span className="block">
                        <AnimatedTextCharacter textalign={'center'} text="share your details" />
                        </span>
                        </h1>
                        <p  data-aos="fade-up" data-delay="500">Our SEO Expert will inspect your website and revert to you with SEO Audit Report.</p>
                    </div>
                </div>
            </section>
            </Layout>
        </>
    )
}
