import React, {FunctionComponent, useEffect} from 'react';
import {NavigationContentComponent} from "./NavigationContentComponent";
// @ts-ignore
// import Experience from '../experience/experience.js';


export const LeftContextMenuComponent: FunctionComponent<leftContextMenuComponentProps> = (props) => {
    useEffect(() => {
        // console.log(props.contentPanel);
    }, []);

    return (
        <div className="left-pane">
            <NavigationContentComponent />
        </div>
    );
};