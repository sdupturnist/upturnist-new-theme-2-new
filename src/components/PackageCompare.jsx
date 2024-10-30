'use client'


import { useModalContext } from '@/context/modalContext';
import React, { useState, useEffect } from 'react';
import Button from './Buttons';



export default function ComparePackages({ data }) {


    const { setModalFor, setShowModal } = useModalContext()

    const [isVisible, setIsVisible] = useState(true);
    const [windowWidth, setWindowWidth] = useState(null);


    const [currentBox, setCurrentBox] = useState(1);


    const handleBoxChange = (boxNumber) => {
        setCurrentBox(boxNumber);
    };


    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        setWindowWidth(window.innerWidth); // set initial width
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.pageYOffset <= 0); // hide the div if scrolled down
        };
        if (windowWidth && windowWidth > 1199) {

            window.addEventListener("scroll", handleScroll);
        } else {
            setIsVisible(true); // Show the div when width is not available or greater than 575px
        }
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [windowWidth]);


    const openPackageBookModal = () => {
        setShowModal(true)
        setModalFor('package')
    };


    return (<>



        <div className="compare-package ">
            <h4 className="para">Compare Plans</h4>
            <div className="flex my-[30px] gap-[10px] rounded-md overflow-hidden">
                {data.map((item, key) => {
                    return <Button
                        key={key}
                        size="small"
                        label={item.title}
                        icon={false}
                        action={() => handleBoxChange(key + 1)}
                        classes={`${currentBox === key + 1 ? 'active-button' : ''} w-full !block !text-center items-center`}
                    />
                })}
            </div>

            {data.map((item, key) => {
                return <>

                    <div key={key}>
                        <div className="card card-effect sm:rounded-[30px] text-start package_new relative  rounded-[30px] !border-b-0" style={{ display: currentBox === key + 1 ? 'block' : 'none' }}>
                            <div className="bg-box-package p-[30px] grid gap-[20px] sticky top-0  border !border-[#ffffff0d] transition-all rounded-[30px] rounded-b-none backdrop-blur-sm">
                                <div>
                                    <h4 className="text-[24px]">{item.title}</h4>
                                </div>
                                <div>
                                    <button title={`Starting at AED ${item.packages.price}`} aria-label={`Starting at AED ${item.packages.price}`} onClick={openPackageBookModal} className="btn btn-small">
                                        Starting at AED {item.packages.price}
                                    </button>
                                </div>
                            </div>
                            <ul className="list-unstyled">
                                {JSON.parse(item.packages.features).map((item, key) => {
                                    return (
                                        <li
                                            key={key}
                                            className="flex justify-between px-[30px] py-[16px] border-b border-[#f9fafb1a] border-dotted"
                                        >

                                            <p className={`${item.value === 'x' ? 'opacity-[0.4]' : ''} w-[90%]`}>
                                                {item.value} - {item.label}
                                            </p>


                                            <div className='item-flex'>
                                                {item.value !== 'x' ? (
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" fill="none" viewBox="0 0 21 20">
                                                        <g clipPath="url(#a)">
                                                            <path
                                                                stroke="url(#b)"
                                                                d="M9.16.672a2.854 2.854 0 0 1 3.68 0l.495.425a2.86 2.86 0 0 0 1.605.66l.66.048A2.83 2.83 0 0 1 18.195 4.4l.047.66a2.86 2.86 0 0 0 .661 1.604l.425.496a2.854 2.854 0 0 1 0 3.68l-.425.495a2.86 2.86 0 0 0-.66 1.605l-.048.66a2.83 2.83 0 0 1-2.595 2.595l-.66.047a2.86 2.86 0 0 0-1.604.661l-.496.425a2.854 2.854 0 0 1-3.68 0l-.496-.425a2.86 2.86 0 0 0-1.604-.66l-.66-.048A2.83 2.83 0 0 1 3.805 13.6l-.047-.66a2.86 2.86 0 0 0-.661-1.604l-.425-.496a2.854 2.854 0 0 1 0-3.68l.425-.496a2.86 2.86 0 0 0 .66-1.604l.048-.66A2.83 2.83 0 0 1 6.4 1.805l.66-.047a2.86 2.86 0 0 0 1.604-.661L9.16.672Z"
                                                                opacity=".2"
                                                            />
                                                            <path
                                                                stroke="url(#c)"
                                                                strokeLinecap="round"
                                                                d="m9 9.785.756.939c.296.368.755.368 1.051 0L13 8"
                                                            />
                                                        </g>
                                                        <defs>
                                                            <linearGradient id="b" x1="11" x2="11" y1="0" y2="18" gradientUnits="userSpaceOnUse">
                                                                <stop stopColor="#fff" stopOpacity=".75" />
                                                                <stop offset="1" stopColor="#fff" stopOpacity=".5" />
                                                            </linearGradient>
                                                            <linearGradient id="c" x1="11" x2="11" y1="8" y2="11" gradientUnits="userSpaceOnUse">
                                                                <stop stopColor="#fff" stopOpacity=".75" />
                                                                <stop offset="1" stopColor="#fff" stopOpacity=".5" />
                                                            </linearGradient>
                                                            <clipPath id="a">
                                                                <path fill="#fff" d="M.668 0h20v20h-20z" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                ) : null}
                                            </div>




                                        </li>
                                    )
                                })}
                            </ul>
                            <div className="inner-5">
                                <button title={`Starting at AED ${item.packages.price}`} aria-label={`Starting at AED ${item.packages.price}`} onClick={openPackageBookModal} className="btn btn-normal m-[20px] text-center">
                                    Starting at AED {item.packages.price}
                                </button>
                            </div>
                        </div>
                    </div>

                </>
            })}
        </div>


    </>)
}