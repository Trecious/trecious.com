import * as React from "react";
import "./combButton.css"

class CombButton extends React.Component<{
    //props
    icon: JSX.Element,
    onClick: Function,
    text: string,
    id: string,
    className: string
}, {
    //state
}> {

    constructor(props) {
        super(null);

        this.props = props;
    }

    render() {
        return(
            <div id={this.props.id} className="combBtnCon noUserSelect">
                <svg className={"btn f " + this.props.id + " " + this.props.className} version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 184.751 184.751" onClick={() => this.props.onClick()}>
                    <path d="M0,92.375l46.188-80h92.378l46.185,80l-46.185,80H46.188L0,92.375z"/>
                </svg>
                <svg className="ext noPointer noUserSelect" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <rect className="noPointer"  y="6" width="20000" height="78" />
                </svg>
                <svg className="btn noPointer mRight noUserSelect" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 184.751 184.751">
                    <path className="noPointer" d="M0,92.375l46.188-80h92.378l46.185,80l-46.185,80H46.188L0,92.375z"/>
                </svg>

                <div className={"icon noUserSelect"}>
                    {this.props.icon}
                </div>

                <div className={"text noUserSelect"}>
                    {this.props.text}
                </div>
            </div>
        );
    }
}

export default CombButton;