import React from 'react';
import FooterDate from '../../atoms/date'

import Link from '../Link/Link';

const footer = () => {
  return (
    <footer className=''>
      <div className='container text-light pt-5'>
        <div className='row'>
          
        <div className='col-sm-6 col-md-6 col-lg-3 mb-5'>
            <div className='footer-title'>
              <h6>Kontakt</h6>
            </div>
            <div className='footer-content'>
              <p className='text-muted'>
                <small>Adresse :<br /> Ödholz 1 <br></br> 94133 Röhrnbach, DE</small>
              </p>
              <p className='text-muted'>
                <small>Telefon : +49 (0) 8551 4844</small>
              </p>
              <p className='text-muted'>
                <small>E-mail : info@nader-recycling.de</small>
              </p>
              <div className='social-media mt-4'>
              
                <a href='https://www.facebook.com/Helmut-Nader-Recycling-OHG-563285730423187/' className='text-light'>
                  <i className='fab fa-facebook mr-4' />
                </a>
                <a href='https://www.ebay.de/str/teilezirkus' className='text-light'>
                  <i className='fab fa-ebay' />
                </a>
              </div>
            </div>
          </div>

          <div className='col-sm-6 col-md-6 col-lg-2 mb-5'>
            <div className='footer-title'>
              <h6>Kurzlinks</h6>
            </div>
            <div className='footer-content'>
              <ul className='list-group quick-links'>
                <li>
                  <Link target='home' offset={-120}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link target='about'>Über uns</Link>
                </li>
                <li>
                  <Link target='services'>Services</Link>
                </li>
                <li>
                  <Link target='contact'>Kontakt</Link>
                </li>
                <li>
                  <a href="https://www.ebay.de/str/teilezirkus">Shop</a>
                </li>
              </ul>
            </div>
          </div>
          <div className='col-sm-6 col-md-6 col-lg-3 mb-5'>
            <div className='footer-title'>
              <h6>Newsletter</h6>
            </div>
            <div className='footer-content'>
              <p>
                <small className='text-muted'>
                  Newsletter abonnieren:
                </small>
              </p>
              <p>
                <small className='text-muted'>
                <input
                    type='email'
                    className='form-control rounded-5'
                    aria-describedby='emailHelp'
                    placeholder='email eintragen'
                    style={{width: 160, height: 25 }}
                  />
                </small>
              </p>
              <p>
              <button className='btn rounded-5 btn-sm' style={{width: 150, background: 'var(--secondary)'}} >
                    Abbonieren
                  </button>
              </p>
            </div>
          </div>
          


          <div className='col-sm-6 col-md-6 col-lg-4 mb-5'>
            <div className='footer-title'>
              <h6>Info</h6>
            </div>
            <div className='footer-content'>
              <p>
            
                <div className='footer-content'>
              <ul className='list-group quick-links'>
                  <li>
                    <Link target='home' offset={-120}>
                      AGB
                  </Link>
                  </li>
                    <li>
                      <Link target='home'>
                        Datenschutz
                  </Link>
                    </li>
                    <li>
                      <Link target='home'>
                        Impressum
                  </Link>
                    </li>
                  </ul>
                  </div>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='bottom-footer pt-3 pb-3 text-center'>
        <small><FooterDate /></small>
      </div>
    </footer>
  );
};

export default footer;
