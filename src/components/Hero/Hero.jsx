import React from "react";
import "./Hero.css";
import Header from "../Header/Header";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png"
import { motion } from "framer-motion"

const Hero = () => {
    const transition = { type: 'spring', duration: 3 }
    return (
        <div className="hero">
            <div className="blur hero-blur"></div>
            <div className="left-h">
                <Header />
                <div className="the-best-ad">
                    <div></div>
                    {/* <motion.div>
                        initial={{left:'238px'}}
                        whileInView={{left:'8px'}}
                        transition={{...transition,type:'tween'}}
                    </motion.div> */}
                    <span>THE BEST FITNESS CLUB IN THE TOWN</span>
                </div>

                {/* Hero Heading */}
                <div className="hero-text">
                    <div>
                        <span className="stroke-text">Shape </span>
                        <span>Your</span>
                    </div>
                    <div>
                        <span>
                            Ideal Body
                        </span>
                    </div>
                    <div>
                        <span>In here we will help you to shape and build your ideal body and live up your life to fullest</span>
                    </div>
                </div>
                {/* figure */}
                <div className="figures">
                    <div>
                        <span>+ 140</span>
                        <span>EXPERT COACHES</span>
                    </div>
                    <div>
                        <span>+ 978</span>
                        <span>MEMBERS JOINED</span>
                    </div>
                    <div>
                        <span>+ 50</span>
                        <span>FITNESS PROGRAMS</span>
                    </div>
                </div>

                {/* Hero button */}
                <div className="hero-buttons">
                    <buttons className="btn">Get Started</buttons>
                    <buttons className="btn">Learn More</buttons>
                </div>
            </div>
            <div className="right-h">
                <button className="btn">Join Now</button>
                <div className="heart-rate">
                    <img src={Heart} alt="" />
                    <span>Heart Rate </span>
                    <span>116 bpm</span>
                </div>
                {/* hero image */}
                <img src={hero_image} alt="" className="hero_image" />
                <img src={hero_image_back} alt="" className="hero_image_back" />

                {/* Calories */}
                <div className="calories">
                    <img src={Calories} alt="" />
                    <div>
                        <span>Calories Burned</span>
                        <span>220 kcal</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;