
import React from 'react';

import Section from '../../../HOC/Section';
import bgImage from '../../../assets/img/tree.jpg';
import Link from '../../UI/Link/Link';

const home = () => {
  return (
    <Section id='home'>
      <div>
        <div
          className='home-content p-5'
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <div className='intro container text-center text-light'>
            <h1 className='title' style={{color: 'var(--secondary)'}}>Willkommen</h1>
            <h2 className='sub-title mb-4'>
            bei Ihren Recycling- und Schrotthandel-Spezialisten.
            </h2>
  
            <Link target='about' classes='btn btn-primary text-dark rounded-0 mr-2' >
              Über uns
            </Link>
            <Link target='contact' classes='btn btn-light text-dark rounded-0'>
              Kontakt
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default home;
