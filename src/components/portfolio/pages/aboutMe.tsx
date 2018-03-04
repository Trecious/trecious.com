import * as React from "react";
import "./aboutMe.css"
import {TimelineMax} from "gsap";
import {PortfolioData} from "../portfolio"

class AboutMe extends React.Component<{
    //props
    data: PortfolioData;
}, {

}> {

    constructor(props) {
        super(null);

        this.props = props;

    }


    render() {
        return(
            <div id={"aboutMe"}>
                About me
            </div>
        );
    }
}

export default AboutMe;