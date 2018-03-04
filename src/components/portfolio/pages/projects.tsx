import * as React from "react";
import "./projects.css"

class Projects extends React.Component<{
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
            <div id={"projects"}>
               Projects
            </div>
        );
    }
}

export default Projects;