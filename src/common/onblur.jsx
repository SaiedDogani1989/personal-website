import React from 'react';

const OnBlurComponent = ({ onBlur }) => {
    
    const handleBlur = (e) => {
        const currentTarget = e.currentTarget;
    
        // Check the newly focused element in the next tick of the event loop
        setTimeout(() => {
          // Check if the new activeElement is a child of the original container
          if (!currentTarget.contains(document.activeElement)) {
            // You can invoke a callback or add custom logic here
            onBlur();
          }
        }, 0);
      };
      
      return (
        <div tabIndex="1" onBlur={onBlur}>
          Hello <input type="text" value="world" />
        </div>
      );
    }
 
export default OnBlurComponent ;
