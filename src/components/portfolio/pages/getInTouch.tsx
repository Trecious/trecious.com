import * as React from "react";
import "./getInTouch.css"

class GetInTouch extends React.Component<{
    //props
}, {
    //state
}> {

    constructor(props) {
        super(null);

        this.props = props;

    }


    render() {
        return(
            <div id={"getInTouch"}>
               Get in touch
            </div>
        );
    }
}

export default GetInTouch;