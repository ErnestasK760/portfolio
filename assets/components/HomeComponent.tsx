import React, {FunctionComponent, useEffect, useRef} from 'react';
import {LeftContextMenuComponent} from "./LeftContextMenuComponent";
import {ContentComponent} from "./ContentComponent";
import {RightContextPaneComponent} from "./RightContextPaneComponent";
// @ts-ignore
// import Experience from '../experience/experience.js';


export const HomeComponent: FunctionComponent = () => {
    const contentPanel = useRef(null);
    useEffect(() => {

    }, []);

    return (
        <div className="background-plate">
            <LeftContextMenuComponent />
            <ContentComponent ref={contentPanel} />
            <RightContextPaneComponent />
        </div>
    );
};