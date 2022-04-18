import React from 'react';
import cl from './MyModal.module.css';


const Mymodal = ({children, visible, setVisible }) => {

    const rootClasses = [cl.Mymodal]
    
if (visible) {
    rootClasses.push(cl.active);
}
    return (
        <div className={rootClasses.join(' ')}>
<div className= {cl.MyModalContent}>  
    {children}
</div>
        </div>
    );
};

export default Mymodal;