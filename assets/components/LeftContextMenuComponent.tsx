import React, {FunctionComponent, useEffect} from 'react';
import {NavigationContentComponent} from "./NavigationContentComponent";
// @ts-ignore
// import Experience from '../experience/experience.js';
type LeftContextMenuComponentProps = {
    handleClick: () => void;
}

export const LeftContextMenuComponent: FunctionComponent<LeftContextMenuComponentProps> = (props) => {
    useEffect(() => {
    }, []);

    return (
        <div className="left-pane">
            <NavigationContentComponent handleClick={props.handleClick}/>
        </div>
    );
};