import React, { useState, useRef, useEffect }from 'react';

import About from "../components/About"
import Featured from "../components/Featured"
import Footer from "../components/Footer"
import Gallery from "../components/Gallery"
import Header from "../components/Header"
import Navbar from "../components/Navbar"
import useLocoScroll from "../hooks/useLocoScroll"; 

import "../styles/home.scss"


const Home = () => {

    const [preloader, setPreloader] = useState(true);


    useLocoScroll(!preloader);
    const [timer, setTimer] = useState(1);

    const id =  useRef(null);

    const clear = () => {
        window.clearInterval(id.current);
        setPreloader(false);
        
    }

    useEffect(() => {
        id.current = window.setInterval(() => {
            setTimer( (timer) => timer - 1 )
        }, 1000)
    }, [])

    useEffect(() => {

        if(timer === 0) {
            clear();
        }

    }, [timer])


    return (
        <>

        {
            preloader ? (
                <div className="loader-wrapper absolute">
                    <h1>Flirty Flowers</h1>
                    <h2>Rio de Janerio</h2>
                </div>
                ) : (
                    <div className="main-container" id="main-container" data-scroll-container>
                        <Navbar />
                        <Header />
                        <Featured />
                        <About />
                        <Gallery />
                        <Footer />
                    </div>
                ) 
        
        }

        </>
    )
}

export default Home;