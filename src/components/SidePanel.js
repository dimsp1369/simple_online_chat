import React from 'react';
import Contacts from "./Contacts";
import Rooms from "./Rooms";


const SidePanel = ({id}) => {
    return (
        <div className="SidePanelLayout">
            <div className="SidePanelLayout__Content">
                <Contacts id={id}/>
                <Rooms/>
            </div>
            <div className="SidePanelLayout__Credential">
                {`Your Id: ${id}`}
            </div>
        </div>
    );
};

export default SidePanel;
