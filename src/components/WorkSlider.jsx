import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { EffectCoverflow, Navigation, Autoplay } from 'swiper/modules';
import { useModalContext } from '@/context/modalContext'; // Assuming you have a modal context defined
import Images from './Images';
import { useThemeContext } from '@/context/themeContext';


export default function ThreeDSlider(props) {
    const { setModalData, setShowModal, setModalFor } = useModalContext();
    const {theme} = useThemeContext()
    const swiperRef = useRef(null); // Reference for Swiper instance

    const openModal = (item) => {
        setModalData({
            imageUrl: item.featuredImage.node.sourceUrl,
            heading: item.title,
            description: item.content && item.content.replace("Client: ", "").replace("Project: ", "").replace("|", "<br/>"),
            link: item.works.link,
            projectStory: item.works.projectStory,
        });
        setShowModal(true);
        setModalFor('work');
    };

    const handleMouseEnter = () => {
        if (swiperRef.current && swiperRef.current.autoplay) {
            swiperRef.current.autoplay.stop(); // Stop autoplay
        }
    };

    const handleMouseLeave = () => {
        if (swiperRef.current && swiperRef.current.autoplay) {
            swiperRef.current.autoplay.start(); // Restart autoplay
        }
    };

    return (
        <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Swiper
                ref={swiperRef} // Assign ref to Swiper
                spaceBetween={30}
                //slidesPerView={3}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    640: {
                      slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                      },
                    999: {
                      slidesPerView: 3,
                    },
                  }}
                modules={[Navigation, Autoplay]} // Ensure modules are registered
            >
                {props.data && props.data.data.works.nodes.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className={`${theme === 'dark' ? 'rounded-[30px]' : 'rounded-[20px]'} card overflow-hidden`} onClick={() => openModal(item)}>
                            <Images
                                src={item.featuredImage.node.sourceUrl}
                                imageurl={item.featuredImage.node.sourceUrl}
                                styles={''}
                                quality={100}
                                width={theme === 'dark' ? '250' : '280'}
                                height={theme === 'dark' ? '250' : '280'}
                                alt={item.featuredImage.node.altText}
                                placeholder={false}
                                classes={`${theme === 'dark' ? 'h-[250px]' : 'block w-full object-cover h-[280px]'} block w-full object-cover `}
                                onLoad={openModal}
                            />
                            <span className='hidden'>{item.title}</span>
                            <div className="text-left p-[30px] pt-[20px] text-[15px]" dangerouslySetInnerHTML={{
                                __html: item.content &&
                                    item.content
                                        .replace("Client: ", "")
                                        .replace("Project: ", "")
                                        .replace("|", "<br/>")
                            }} />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
