import React from 'react';
import EmailButton from '../../atoms/mail'

const topBar = () => {
  return (
    <div className='top-bar pt-1 pb-1 text-light'>
      <div className='container'>
        <div className='d-flex justify-content-center'>
          <div className='d-flex pt-2 pb-2'>
            <div className='d-flex align-item-center mr-3'>
              <i className='fas fa-phone-alt mr-2' />
              <small>+49 (0) 8551 4844 </small> 
            </div>
            <div className="secondary">
            &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </div>
            <div className='d-flex align-item-center'>
              <i className='fas fa-envelope mr-2' />
              <small><EmailButton /></small>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default topBar;
