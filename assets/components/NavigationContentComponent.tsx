import React, {FunctionComponent, useEffect, useRef} from "react";

type leftContextMenuComponentProps = {
    handleClick: () => void;
}

export const NavigationContentComponent: FunctionComponent<leftContextMenuComponentProps> = (props) => {

    useEffect(() => {
    }, []);

    return (
        <div className="navigation">
            <ul className="nav-list">
                <li onClick={props.handleClick}>About me</li>
                <li>Projects</li>
                <li>Interests</li>
            </ul>
        </div>
    );
};