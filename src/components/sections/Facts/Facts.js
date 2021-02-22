import React from 'react';

import Section from '../../../HOC/Section';
import bgImage from '../../../assets/img/tree.jpg';

const Facts = () => {
  return (
    <Section id='facts'>
      <div
        className='facts-container'
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className='container pt-5 pb-4'>
          <div className='row'>
            <div className='col-sm-6 col-md-3 text-center mb-4'>
              <div className='mb-2 facts-icon'>
                <i className='fas fa-calendar-alt' />
              </div>
              <h4 className='facts-counter text-light'>60+</h4>
              <h5 className='facts-title text-light'>Jahre Erfahrung</h5>
            </div>
            <div className='col-sm-6 col-md-3 text-center mb-4'>
              <div className='mb-2 facts-icon'>
                <i className='fas fa-grin-beam' />
              </div>
              <h4 className='facts-counter text-light'>4000+</h4>
              <h5 className='facts-title text-light'>Zufriedene Kunden</h5>
            </div>
            <div className='col-sm-6 col-md-3 text-center mb-4'>
              <div className='mb-2 facts-icon'>
                <i className='fas fa-graduation-cap' />
              </div>
              <h4 className='facts-counter text-light'>3</h4>
              <h5 className='facts-title text-light'>Zertifizierungen</h5>
            </div>
            <div className='col-sm-6 col-md-3 text-center mb-4'>
              <div className='mb-2 facts-icon'>
                <i className='fas fa-users' />
              </div>
              <h4 className='facts-counter text-light'>14</h4>
              <h5 className='facts-title text-light'>Angestellte</h5>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Facts;
