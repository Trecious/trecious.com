import * as React from "react";
import "./education.css"

class Education extends React.Component<{
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
            <div id={"education"}>
               Education
            </div>
        );
    }
}

export default Education;