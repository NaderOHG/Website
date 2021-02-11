import React from 'react';

import Section from '../../../HOC/Section';

const Service = () => {
  return (
    <Section id='services'>
      <div className='container pt-2 pb-5'>
        <div className='section-header pt-5 pb-5 text-center'>
          <h3 className='section-title'>
            <span>Unsere </span>Services
          </h3>
          <h6 className='section-subtitle mr-auto ml-auto'>
          rund um Recycling und Entsorgung in Kumreut.
          </h6>
        </div>
        <div className='section-content'>
          <div className='row'>
            <div className='col-md-6 col-lg-4 mb-3'>
              <div className='service-box d-flex'>
                <div className='service-icon mr-4'>
                  <i className='fas fa-code' />
                </div>
                <div className='service-body'>
                  <h5 className='service-title'>Entsorgung von Kfz</h5>
                  <p className='service-description'>
                  Egal, ob Sie eine Privatperson, ein Fuhrparkbetreiber, 
                  eine Werkstatt oder ein Unternehmen sind, unsere Dienstleistungen decken Ihre 
                  Bedürfnisse ab. Bei der Abholung Ihres Fahrzeugs können Sie den Service so 
                  auswählen und gestalten, dass er Ihren spezifischen Geschäftsanforderungen und 
                  Ihrem Budget entspricht.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-md-6 col-lg-4 mb-3'>
              <div className='service-box d-flex'>
                <div className='service-icon mr-4'>
                  <i className='fas fa-link' />
                </div>
                <div className='service-body'>
                  <h5 className='service-title'>Altmetall</h5>
                  <p className='service-description'>
                  Wir sind stolz darauf, unsere Dienstleistungen im Bau-, Handels- und Haushaltsbereich anbieten zu können. 
                  Mit über 60 Jahren Erfahrung als professioneller Altmetall-Recycler verfügen wir über ein umfassendes Leistungsspektrum für alle unsere Kunden, egal, ob es sich um ein Anliegen in einem Privathaushalt, Gewerbe oder Industrie handelt.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-md-6 col-lg-4 mb-3'>
              <div className='service-box d-flex'>
                <div className='service-icon mr-4'>
                  <i className='fas fa-comments' />
                </div>
                <div className='service-body'>
                  <h5 className='service-title'>Schrotthandel</h5>
                  <p className='service-description'>
                  Da wir seit über 60 Jahren Schrott für Eigenheimbesitzer und Unternehmen recyceln, können wir 
                  diesen auf die sicherste und effizienteste Art zurückzugewinnen und recyceln. 
                  Wir können Kunden mit hohem Schrottaufkommen in ihren Räumlichkeiten im Rahmen unseres 
                  Services ein übersichtliches und transparentes Angebot zum Wert des Schrotts erstellen.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-md-6 col-lg-4 mb-3'>
              <div className='service-box d-flex'>
                <div className='service-icon mr-4'>
                  <i className='fas fa-desktop' />
                </div>
                <div className='service-body'>
                  <h5 className='service-title'>Containerdienst</h5>
                  <p className='service-description'>
                    Wir bieten von WordPress, bis zu eigenständig Programmierten 
                    lösungen alles an.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-md-6 col-lg-4 mb-3'>
              <div className='service-box d-flex'>
                <div className='service-icon mr-4'>
                  <i className='fas fa-project-diagram' />
                </div>
                <div className='service-body'>
                  <h5 className='service-title'>Elektroschrott</h5>
                  <p className='service-description'>
                    Wir unterstützen Open Source lösungen, und partizipieren
                    auch an solchen.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-md-6 col-lg-4 mb-3'>
              <div className='service-box d-flex'>
                <div className='service-icon mr-4'>
                  <i className='fas fa-server' />
                </div>
                <div className='service-body'>
                  <h5 className='service-title'>Autorecycling</h5>
                  <p className='service-description'>
                    Wir bieten umfangreiche IT-Lösungen für Privat und Geschäftlich.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Service;
