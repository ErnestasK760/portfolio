import React, {FunctionComponent, useEffect} from 'react';
// @ts-ignore
// import Experience from '../experience/experience.js';


export const AvatarComponent: FunctionComponent = () => {
    useEffect(() => {

    }, []);

    return (
        <div className="avatar-info">
            <div className="avatar-icon-outline">
                <img className="avatar-icon" src="profile/uwp1764194.jpeg" alt="not loaded"/>
            </div>

            <h1 className="name">Ernestas Kapustinskas</h1>
            <span className="position">Full-stack developer</span>
        </div>
    );
};