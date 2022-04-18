import React from 'react';
import cl from './MyModal.module.css';


const Mymodal = ({children }) => {
    return (
        <div className={[cl.Mymodal, cl.active].join(' ')}>
<div className= {cl.MyModalContent}>  
    {children}
</div>
        </div>
    );
};

export default Mymodal;