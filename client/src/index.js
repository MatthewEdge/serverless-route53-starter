import React, { Component } from "react"
import ReactDOM from "react-dom"

import Header from "./header/header"
import CardContainer from "./cards/card-container"

import "./index.css"

class AppContainer extends Component {
    constructor() {
        super()
        this.state = {
            title: "Homepage"
        }
    }

    render() {
        return (
            <div>
                <Header title={this.state.title} />

                {/* <!-- Notification Bar --> */}
                <div className="box notification-top">
                    <p className="has-text-centered">
                        <span className="tag is-primary">New</span> Click on the Card to open a fullscreen image
                    </p>
                </div>

                {/* TODO these need to be uploadable */}
                <CardContainer
                    rowSize={4}
                    images={[
                        "https://i.imgsafe.org/ba/baa924a5e3.png",
                        "https://media.istockphoto.com/photos/abstract-cubes-retro-styled-colorful-background-picture-id508795172?k=6&m=508795172&s=612x612&w=0&h=cNTF4sOLFL3VuYscPNiPCf-tnXfdowg4rVeGUIvQ0WM=",
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJxwMeRksWbcYaMDDoBroO8ZfwvCiUeq11P2Mc6F69m45w-A67",
                        "https://placekitten.com/250/180",
                        "https://i.imgsafe.org/ba/baa924a5e3.png",
                        "https://media.istockphoto.com/photos/abstract-cubes-retro-styled-colorful-background-picture-id508795172?k=6&m=508795172&s=612x612&w=0&h=cNTF4sOLFL3VuYscPNiPCf-tnXfdowg4rVeGUIvQ0WM=",
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJxwMeRksWbcYaMDDoBroO8ZfwvCiUeq11P2Mc6F69m45w-A67",
                        "https://placekitten.com/250/180",
                        "https://i.imgsafe.org/ba/baa924a5e3.png",
                        "https://media.istockphoto.com/photos/abstract-cubes-retro-styled-colorful-background-picture-id508795172?k=6&m=508795172&s=612x612&w=0&h=cNTF4sOLFL3VuYscPNiPCf-tnXfdowg4rVeGUIvQ0WM=",
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJxwMeRksWbcYaMDDoBroO8ZfwvCiUeq11P2Mc6F69m45w-A67",
                        "https://placekitten.com/250/180"
                    ]}
                />
            </div>
        )
    }
}
export default AppContainer

ReactDOM.render(<AppContainer />, document.getElementById("app"))
