import React from 'react';

import Section from '../../../HOC/Section';
import aboutImage from '../../../assets/img/team.png';
import { Link } from 'react-scroll';

const about = () => {
  return (
    <Section id='about'>
      <div className='container pt-2 pb-5'>
        <div className='section-header pt-5 pb-5 text-center'>
          <h3 className='section-title'>
            <span>Unser </span>Unternehmen
          </h3>
          <h6 className='section-subtitle mr-auto ml-auto'>
          Erfahren Sie mehr über unser Unternehmen, unsere Geschichte und unsere Werte.
          Bei Fragen zu unserem Entsorgungsfachbetrieb helfen wir Ihnen gerne weiter.
          </h6>
        </div>
        <div className='section-content'>
          <div className='row'>
            <div className='col-md-12 col-lg-6 mb-3'>
              <div className='aboutImage'>
                <img src={aboutImage} alt='about company' />
              </div>
            </div>
            <div className='col-md-12 col-lg-6'>
              <h3 className='about-title'>Über uns</h3>
              <div className='about-description'>
                <p>
                Die Helmut Nader Recycling OHG wurde vor über 60 Jahren gegründet. 
                Heute leiten Carmen und Helmut Nader das Geschäft und auch ihre beiden Söhne 
                sind in vierter Generation im Unternehmen tätig. Mittlerweile zählt unser 
                familiengeführtes Unternehmen insgesamt 14 Mitarbeiter.
                </p>
                <p>
                Unser Unternehmen ist organisch ausgerichtet und durch strategische 
                Akquisitionen zu einem Metall- und Schrottrecyclingunternehmen in 
                Deutschland gewachsen. 
                </p>
                
                <Link target='/team' className='btn rounded-0' style={{background: 'var(--secondary)'}}> Unser Team</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default about;
