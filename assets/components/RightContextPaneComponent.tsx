import React, {FunctionComponent, useEffect} from 'react';
import {AvatarComponent} from "./AvatarComponent";
// @ts-ignore
// import Experience from '../experience/experience.js';


export const RightContextPaneComponent: FunctionComponent = () => {
    useEffect(() => {

    }, []);

    return (
        <div className="right-pane">
            <AvatarComponent />
        </div>
    );
};