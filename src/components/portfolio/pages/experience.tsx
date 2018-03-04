import * as React from "react";
import "./experience.css"

class Experience extends React.Component<{
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
            <div id={"experience"}>
                Experience
            </div>
        );
    }
}

export default Experience;