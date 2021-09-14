import React, { Component } from "react";
import FooterDate from '../../atoms/date'
import axios from "axios";
import Section from '../../../HOC/Section';
import Link from '../Link/Link';
//import Datenschutz from "../../sections/info/datenschutz";

import {showMap, hideMap} from '../../handler'


class Footer extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      map: false
    };   
  } 

toggleMapClose = () => {
    hideMap()
    this.setState({ map: false })
}
toggleMapOpen = () => {
  showMap()
  this.setState({map: true})
}

toggleMap = () => {
    this.state.map ? this.toggleMapClose() : this.toggleMapOpen();
}

  render() {

    return (   
      <footer className=''>
      <Section id='map'>
      <div className="MapMaker">
        <iframe
          title='mapMarker'
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5259.287594939124!2d13.50777364783047!3d48.76959825723895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4774ee54f83e1787%3A0x9156c98686567afe!2sGewerbegebiet%20Kumreut-S%C3%BCd%2C%20%C3%96dholz%201%2C%2094133%20R%C3%B6hrnbach!5e0!3m2!1sen!2sde!4v1613393526760!5m2!1sen!2sde'
          width='100%'
          height='450'
          frameBorder='0'
          style={{ border: 0, marginBottom: '-7px'}}
          allowFullScreen
        />
      </div>
    </Section>
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
                <small href="tel:+4985514844">Telefon : +49 (0) 8551 4844</small>
              </p>
              <p className='text-muted'>
                <small>E-mail : info@nader-recycling.de</small>
              </p>
              <div className='social-media mt-4'>
              
                <a href='https://www.facebook.com/Helmut-Nader-Recycling-OHG-563285730423187/' className='text-light'>
                  <i className='fab fa-facebook mr-4' />
                </a>
                <a href='https://www.ebay.de/str/teilezirkus' className='text-light'>
                  <i className='fab fa-ebay mr-4' />
                </a>
                <i className='fas fa-map-marked-alt' style={{cursor: "pointer"}} onClick={this.toggleMap} />
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
                <small className='text-muted'>
                
                <form onSubmit={this.handleSubmit.bind(this)} method="POST">
               
                <input
                    type='email'
                    id="email"
                    value={this.state.email}
                    onChange={this.handleChange.bind(this)}
                    required
                    className='form-control rounded-5'
                    aria-describedby='emailHelp'
                    placeholder='email eintragen'
                    style={{width: 160, height: 25, marginBottom: 15 }}
                  />
                 
                  <p>
              <button className='btn rounded-5 btn-sm' style={{width: 150, background: 'var(--secondary)'}} type="submit">
                    Abonnieren
                  </button>
              </p>
                  </form>
                  
                </small>
            </div>
          </div>
          


          <div className='col-sm-6 col-md-6 col-lg-4 mb-5'>
            <div className='footer-title'>
              <h6>Info</h6>
            </div>
            <div className='footer-content'>
              <span>
            
                <div className='footer-content'>
                  <ul className='list-group quick-links'>
                  <li>
                    <Link target='home' offset={-120}>
                      AGB
                  </Link>
                  </li>
                    <li>
                      <Link to='/Datenschutz'>
                        Datenschutz
                  </Link>
                    </li>
                    <li>
                      <Link target='home'>
                        Impressum
                  </Link>
                    </li>
                    <li>
                    <Link target='Widerruf'>
                      Widerruf
                    </Link>
                    </li>
                  </ul>
                  </div>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className='bottom-footer pt-3 pb-3 text-center'>
        <small><FooterDate /></small>
      </div>
    </footer>
  );
}

handleChange(event) {
  const field = event.target.id;
  if (field === "email") {
    this.setState({ email: event.target.value });
  } 
}
handleSubmit(event) {
  event.preventDefault();   
  axios({
    method: "POST",
    url: "http://localhost:5000/newsletter",
    data: this.state,
  }).then((response) => {
    if (response.data.status === "sent") {
      alert("Message Sent");
      this.setState({ email: ""});
    } else if (response.data.status === "failed") {
      alert("Message Failed");
    }
  });
}
}

export default Footer;

