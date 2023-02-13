import React, {FunctionComponent, useEffect, useRef} from "react";


export const NavigationContentComponent: FunctionComponent = () => {
    const [paneShadow, setPaneShadow] = React.useState(false);

    useEffect(() => {

    }, []);

    const handleClick = () => {
        setPaneShadow(!paneShadow);
    };

    return (
        <div className="navigation">
            <ul className="nav-list">
                <li onClick={handleClick}>About me</li>
                <li>Projects</li>
                <li>Interests</li>
            </ul>
        </div>
    );
};