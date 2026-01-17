import React from "react";
import "../assets/css/all.min.css";
import "../assets/bootstrap/css/bootstrap.min.css";
import "../assets/css/owl.carousel.css";
import "../assets/css/magnific-popup.css";
import "../assets/css/animate.css";
import "../assets/css/meanmenu.min.css";
import "../assets/css/main.css";
import "../assets/css/responsive.css";
import whatwe from "../assets/img/Juice/WhatWe.png";
import abtYT from "../assets/img/Juice/About_YT.png";
import Crafted from "../assets/img/Juice/Crafted.png";
import "../assets/css/about.css";

function About() {
    return (
        <>
            {/* Breadcrumb Section */}
            <div className="breadcrumb-section breadcrumb-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 text-center">
                            <div className="breadcrumb-text">
                                <p>Premium Dry Fruits & Nuts</p>
                                <h1>About Us</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Team Section */}
            <div className="mt-150">
                <div className="container text-center">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="section-title">
                                <h3>Who <span className="orange-text">We Are</span></h3>
                                <p>At Yaazhvi Traders, we offer premium dry fruits and nuts for both wholesale and retail needs. Each product is selected with care to deliver natural freshness and rich flavor. We aim to be your reliable partner for healthy and high-quality choices.</p>
                            </div>
                        </div>
                    </div>
                    <div className="latest-news pt-100 pb-150">
                        <div className="container">
                            {/*<div className="row">*/}
                            {/*    <div className="col-lg-8 offset-lg-2 text-center">*/}
                            {/*        <div className="section-title">*/}
                            {/*            <h3><span className="orange-text">Our</span> News</h3>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*</div>*/}

                            <div className="row">


                                <div className="col-lg-4 col-md-6">
                                    <div className="single-latest-news">

                                        {/* Image added here */}
                                        <img
                                            src={abtYT}
                                            alt="Native & Nature"
                                            className="latest-news-img"
                                        />

                                        <div className="news-text-box">
                                            <h3><span className="orange-text">About Yaazhvi Traders</span></h3>
                                            <p className="excerpt">
                                                Trusted suppliers of quality dry fruits and nuts, Yaazhvi Traders offers carefully selected products for wholesale and retail markets. We ensure superior taste, freshness, and uncompromised standards.
                                            </p>
                                        </div>

                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="single-latest-news">

                                        {/* Image added here */}
                                        <img
                                            src={whatwe}
                                            alt="Native & Nature"
                                            className="latest-news-img"
                                        />

                                        <div className="news-text-box">
                                            <h3><span className="orange-text">What We Offer</span></h3>
                                            <p className="excerpt">
                                                We offer a wide range of premium dry fruits and nuts for both wholesale and retail customers. Our products are carefully sourced, hygienically packed, and delivered with assured freshness and quality.
                                            </p>
                                        </div>

                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="single-latest-news">

                                        {/* Image added here */}
                                        <img
                                            src={Crafted}
                                            alt="Native & Nature"
                                            className="latest-news-img"
                                        />

                                        <div className="news-text-box">
                                            <h3><span className="orange-text">Crafted with Care</span></h3>
                                            <p className="excerpt">
                                                Every product at Yaazhvi Traders is crafted with care, selecting only the finest dry fruits and nuts. We ensure that each item is handled with attention, preserving freshness, flavor, and quality.</p>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            {/* Featured Section */}
            <div className="feature-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="featured-text">
                                <h2 className="pb-3">
                                    Why <span className="orange-text">Yaazhvi Traders</span>
                                </h2>
                                <div className="row">
                                    {[
                                        {
                                            icon: "fas fa-shipping-fast",
                                            title: "Home Delivery",
                                            desc: "Enjoy fast and safe home delivery for all orders. Courier is free for orders above 1kg, bringing premium dry fruits & nuts straight to your doorstep."
                                        },
                                        {
                                            icon: "fas fa-money-bill-alt",
                                            title: "Best Price",
                                            desc: "We offer premium dry fruits and nuts at the best prices, ensuring high quality and freshness without breaking the budget."
                                        },
                                    ].map((item, index) => (
                                        <div className="col-lg-6 col-md-6 mb-4 mb-md-5" key={index}>
                                            <div className="list-box d-flex">
                                                <div className="list-icon">
                                                    <i className={item.icon}></i>
                                                </div>
                                                <div className="content">
                                                    <h3>{item.title}</h3>
                                                    <p>{item.desc}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default About;
