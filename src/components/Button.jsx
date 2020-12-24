import React from 'react';
import ClassNames from 'classnames';


function Button({onClick, className, outline, circle, children}){
  return(
    <button 
      onClick={onClick}
      className={ClassNames('button', className, {
        'button--outline': outline,
        'button--circle': circle,
      })}>
      {children}
    </button>
  )
}


export default Button;