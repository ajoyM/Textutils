import React, { PureComponent } from 'react';
import NoteContext from './noteContext';


const noteState = (props) => {
    const s1 = {
        name: 'Asmita',
        class: 'KG 1'
    }
    return (
        <NoteContext.Provider value={s1}>
             {props.children}
        </NoteContext.Provider>
    )
}

export default noteState;