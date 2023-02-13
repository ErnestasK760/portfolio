import React, {FunctionComponent, useEffect, useRef} from 'react';
import {LeftContextMenuComponent} from "./LeftContextMenuComponent";
import {ContentComponent} from "./ContentComponent";
import {RightContextPaneComponent} from "./RightContextPaneComponent";
// @ts-ignore
// import Experience from '../experience/experience.js';


export const HomeComponent: FunctionComponent = () => {
    const [contentPanelShade, setContentPanelShade] = React.useState(false);

    const handleClick = () => {
      setContentPanelShade(!contentPanelShade);
      console.log('homeComponent', contentPanelShade);
    };

    useEffect(() => {
    }, []);

    return (
        <div className="background-plate">
            <LeftContextMenuComponent handleClick={handleClick}/>
            <ContentComponent contentPanelShade={contentPanelShade}/>
            <RightContextPaneComponent />
        </div>
    );
};