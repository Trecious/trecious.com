import "./app.css";
import * as React from "react";
import URLSearchQuery from "./utils/urlSearchParams";
import "./utils/urlSearchParams"
import Portfolio from "./components/portfolio/portfolio";
import Navbar from "./components/navbar/navbar"

class App extends React.Component<{
    //props
}, {
    //state
    content: JSX.Element[]
}> {

    private loadedType: QueryTypes;

    constructor(props: any) {
        super(props);
        this.state = {
            content: []
        };
    }

    componentDidMount(){
        this.checkUrlSearchQuery();
    }

    private checkUrlSearchQuery(){
        if(URLSearchQuery.count == 0){
            this.setState({
                content: [
                    <div key={"developers"} >
                        Developers:
                        <button onClick={() => {
                            URLSearchQuery.addEntry({
                                variable: "developer",
                                value: "Grievouz"
                            });
                            URLSearchQuery.updateQueryUrl();
                        }}>Grievouz</button>
                        <button onClick={() => {
                            URLSearchQuery.addEntry({
                                variable: "developer",
                                value: "BitPhinix"
                            });
                            URLSearchQuery.updateQueryUrl();
                        }}>BitPhinix</button>
                    </div>,
                    <div  key={"members"}>
                        Members:
                        <button onClick={() => {
                            URLSearchQuery.addEntry({
                                variable: "member",
                                value: "Quarx"
                            });
                            URLSearchQuery.updateQueryUrl();
                        }}>Quarx</button>
                    </div>,
                    <div key={"bystanders"}>
                        Bystanders:
                        <button onClick={() => {
                            URLSearchQuery.addEntry({
                                variable: "bystander",
                                value: "Shiki"
                            });
                            URLSearchQuery.updateQueryUrl();
                        }}>Shiki</button>
                    </div>
                ]
            });
            return;
        }

        else if(URLSearchQuery["developer"]){
            switch (URLSearchQuery["developer"]){
                case "Grievouz":{
                    this.setState({
                        content: [
                            <Navbar type={QueryTypes.Developer}/>,
                            <Portfolio key={"portfolio"} type={QueryTypes.Developer} data={{
                                username: "Grievouz",
                                name: "Tammo Ronke",
                                birthday: "",

                                country: "",
                                city: "",

                                aboutMe: "",

                                experience: {
                                    symbol: "",
                                    header: "",
                                    from: "",
                                    to: "",
                                    location: "",
                                    description: "",
                                    }[0],

                                projects: {
                                    tile: "",
                                    pictures: [],
                                    description: "",
                                    contributers: "",
                                    link: "",
                                }[0],

                                education: {
                                    symbol: "",
                                    header: "",
                                    from: "",
                                    to: "",
                                    location: "",
                                    description: "",
                                }[0],

                                skills: [],
                                interest: [],
                                languages: [],

                                email: "",

                                primaryColor: "",
                                secondaryColor: "",
                            }}/>
                        ]
                    });
                    return;
                }
                case "BitPhinix":{
                    this.setState({
                        content: [
                            <Navbar type={QueryTypes.Developer}/>,
                            <Portfolio key={"portfolio"} type={QueryTypes.Developer} data={{
                                username: "BitPhinix",
                                name: "Eric Meier",
                                birthday: "",

                                country: "",
                                city: "",

                                aboutMe: "",

                                experience: {
                                    symbol: "",
                                    header: "",
                                    from: "",
                                    to: "",
                                    location: "",
                                    description: "",
                                    }[0],

                                projects: {
                                    tile: "",
                                    pictures: [],
                                    description: "",
                                    contributers: "",
                                    link: "",
                                }[0],

                                education: {
                                    symbol: "",
                                    header: "",
                                    from: "",
                                    to: "",
                                    location: "",
                                    description: "",
                                }[0],

                                skills: [],
                                interest: [],
                                languages: [],

                                email: "",

                                primaryColor: "",
                                secondaryColor: "",
                            }}/>
                        ]
                    });
                    return;
                }
            }
        }
        else if(URLSearchQuery["member"]){
            switch (URLSearchQuery["member"]){
                case "Quarx":{
                    this.setState({
                        content: [
                            <Navbar type={QueryTypes.Member}/>,
                            <Portfolio key={"portfolio"} type={QueryTypes.Member} data={{
                                username: "Quarx",
                                name: "Marko Sereb.",
                                birthday: "",

                                country: "",
                                city: "",

                                aboutMe: "",

                                experience: {
                                    symbol: "",
                                    header: "",
                                    from: "",
                                    to: "",
                                    location: "",
                                    description: "",
                                }[0],

                                projects: {
                                    tile: "",
                                    pictures: [],
                                    description: "",
                                    contributers: "",
                                    link: "",
                                }[0],

                                education: {
                                    symbol: "",
                                    header: "",
                                    from: "",
                                    to: "",
                                    location: "",
                                    description: "",
                                }[0],

                                skills: [],
                                interest: [],
                                languages: [],

                                email: "",

                                primaryColor: "",
                                secondaryColor: "",
                            }}/>
                        ]
                    });
                    return;
                }
            }
        }
        else if(URLSearchQuery["bystander"]){
            switch (URLSearchQuery["bystander"]){
                case "Shiki":{
                    this.setState({
                        content: [
                            <Navbar type={QueryTypes.Bystander} />,
                            <Portfolio key={"portfolio"} type={QueryTypes.Bystander} data={{
                                username: "Shiki",
                                name: "Mango",
                                birthday: "",

                                country: "",
                                city: "",

                                aboutMe: "",

                                experience: {
                                    symbol: "",
                                    header: "",
                                    from: "",
                                    to: "",
                                    location: "",
                                    description: "",
                                }[0],

                                projects: {
                                    tile: "",
                                    pictures: [],
                                    description: "",
                                    contributers: "",
                                    link: "",
                                }[0],

                                education: {
                                    symbol: "",
                                    header: "",
                                    from: "",
                                    to: "",
                                    location: "",
                                    description: "",
                                }[0],

                                skills: [],
                                interest: [],
                                languages: [],

                                email: "",

                                primaryColor: "",
                                secondaryColor: "",
                            }}/>
                        ]
                    });
                    return;
                }
            }
        }

        this.setState({
            content: [
                <div key={"error"}>Didn't found a page!</div>
            ]
        });
    }

    render() {
        return(
            <div>
                {this.state.content}
            </div>
        );
    }
}

export enum QueryTypes{
    Developer,
    Member,
    Bystander,

    Company
}

export default App;