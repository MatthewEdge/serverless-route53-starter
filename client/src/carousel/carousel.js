import React, { Component } from "react"
import ReactDOM from "react-dom"

import {ImageCard} from "../cards/image-card"

import BulmaCarousel from 'bulma-carousel'
import "./carousel.css"


export class CarouselContainer extends Component {
    constructor() {
        super()
    }

    componentDidMount() {
        BulmaCarousel.attach();
    }

    render() {
        /* <!-- Carousel Modal --> */
        /* <!-- Note - toggle "is-active" on carousel items to determine where carousel starts --> */
        return (
            <div className="carousel carousel-animated carousel-animate-slide">
                <div className="carousel-container">
                    <div id="c-image1" className="carousel-item has-background">
                        <ImageCard url="https://i.imgsafe.org/ba/baa924a5e3.png" target={this.props.target}/>
                        <div className="title">First</div>
                    </div>
                    <div id="c-image2" className="carousel-item has-background">
                        <ImageCard url="https://media.istockphoto.com/photos/abstract-cubes-retro-styled-colorful-background-picture-id508795172?k=6&m=508795172&s=612x612&w=0&h=cNTF4sOLFL3VuYscPNiPCf-tnXfdowg4rVeGUIvQ0WM=" />
                        <div className="title">Second</div>
                    </div>
                    <div id="c-image3" className="carousel-item has-background">
                        <ImageCard url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJxwMeRksWbcYaMDDoBroO8ZfwvCiUeq11P2Mc6F69m45w-A67" />
                        <div className="title">Third</div>
                    </div>
                    <div id="c-image4" className="carousel-item has-background">
                        <ImageCard url="https://placekitten.com/250/180" />
                        <div className="title">Fourth</div>
                    </div>
                </div>
                <div className="carousel-navigation is-overlay">
                    <div className="carousel-nav-left">
                        <i className="fas fa-chevron-left" aria-hidden="true"></i>
                    </div>
                    <div className="carousel-nav-right">
                        <i className="fas fa-chevron-right" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
        )
    }
}
