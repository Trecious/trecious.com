import "./portfolio.css";
import * as React from "react";
import AboutMe from "./pages/aboutMe";
import Projects from "./pages/projects";
import GetInTouch from "./pages/getInTouch";
import Education from "./pages/education";
import Experience from "./pages/experience";
import {QueryTypes} from "../../app"

class Portfolio extends React.Component<{
    //props
    data: PortfolioData,
    type: QueryTypes,
}, {
    //state
    pages: JSX.Element[];
}> {

    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            pages: []
        }
    }

    componentDidMount(){
        if(this.props.type == QueryTypes.Developer){
            this.setState({
                pages: [
                    <AboutMe data={this.props.data}/>,
                    <Experience/>,
                    <Education/>,
                    <Projects/>,
                    <GetInTouch/>
                ]
            });
        }
        if(this.props.type == QueryTypes.Member){
            this.setState({
                pages: [
                    <AboutMe data={this.props.data}/>,
                    <Experience/>,
                    <Education/>,
                    <GetInTouch/>
                ]
            });
        }
        if(this.props.type == QueryTypes.Bystander){
            this.setState({
                pages: [
                    <AboutMe data={this.props.data}/>,
                    <Education/>,
                ]
            });
        }
    }

    render() {
        return(
            <div id={"portfolio"}>
                {this.state.pages}
            </div>
        );
    }
}

export interface PortfolioData{
    username: string;
    name: string;
    birthday: string;

    country: string;
    city: string;

    aboutMe: string;

    experience: {
        symbol: string;
        header: string;
        from: string;
        to: string;
        location: string;
        description: string;
    }[];

    projects: {
        tile: string;
        pictures: string[];
        description: string;
        contributers: string;
        link: string;
    }[];

    education: {
        symbol: string;
        header: string;
        from: string;
        to: string;
        location: string;
        description: string;
    }[];

    skills: string[];
    interest: string[];
    languages: string[];

    email: string;

    primaryColor: string;
    secondaryColor: string;
}

export default Portfolio;