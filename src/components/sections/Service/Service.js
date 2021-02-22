import React from 'react';
import ReactDOM from 'react-dom';
import ReactModal from 'react-modal';
import Section from '../../../HOC/Section';

import Entsorgung from './ServiceContents/Entsorgung';
import Altmetall from './ServiceContents/Altmetall';
import Schrotthandel from './ServiceContents/Schrotthandel';
import Elektroschrott from './ServiceContents/Elektroschrott';
import Containerdienst from './ServiceContents/Containerdienst';
import Autorecycling from './ServiceContents/Autorecycling'; 

const customStyles = {
  content : {
    top              : '12vh',
    left             : '8vw',
    right            : '8vw',
    bottom           : '8vh',
    boxShadow        : '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
  }
};

class Service extends React.Component {
  constructor () {
    super();
    this.state = {
      showModal: false,
      showModalAltmetall: false,
      showModalSchrotthandel: false,
      showModalContainer: false,
      showModalElektro: false,
      showModalAuto: false,
    };
    
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);

    this.handleOpenModalAltmetall = this.handleOpenModalAltmetall.bind(this);
    this.handleCloseModalAltmetall = this.handleCloseModalAltmetall.bind(this);

    this.handleOpenModalSchrotthandel = this.handleOpenModalSchrotthandel.bind(this);
    this.handleCloseModalSchrotthandel = this.handleCloseModalSchrotthandel.bind(this);

    this.handleOpenModalContainer = this.handleOpenModalContainer.bind(this);
    this.handleCloseModalContainer = this.handleCloseModalContainer.bind(this);

    this.handleOpenModalElektro = this.handleOpenModalElektro.bind(this);
    this.handleCloseModalElektro = this.handleCloseModalElektro.bind(this);

    this.handleOpenModalAuto = this.handleOpenModalAuto.bind(this);
    this.handleCloseModalAuto = this.handleCloseModalAuto.bind(this);
  }

  componentWillMount() {
    ReactModal.setAppElement('body');
}
//KFZ Entsorgung  
  handleOpenModal () {
    this.setState({ showModal: true });
  }
  
  handleCloseModal () {
    this.setState({ showModal: false });
  }
//Altmetall
  handleOpenModalAltmetall () {
    this.setState({ showModalAltmetall: true });
  }
  
  handleCloseModalAltmetall () {
    this.setState({ showModalAltmetall: false });
  }
//Schrotthandel
  handleOpenModalSchrotthandel () {
    this.setState({ showModalSchrotthandel: true });
  }
  
  handleCloseModalSchrotthandel () {
    this.setState({ showModalSchrotthandel: false });
  }
//Containerdienst
  handleOpenModalContainer () {
    this.setState({ showModalContainer: true });
  }
  
  handleCloseModalContainer () {
    this.setState({ showModalContainer: false });
  }
//Elektro
  handleOpenModalElektro () {
    this.setState({ showModalElektro: true });
  }
  
  handleCloseModalElektro () {
    this.setState({ showModalElektro: false });
  }
//Auto
  handleOpenModalAuto () {
    this.setState({ showModalAuto: true });
  }
  
  handleCloseModalAuto () {
    this.setState({ showModalAuto: false });
  }

render() {  
  return (
    <Section id='services'>
       <ReactModal 
          style={customStyles}
          isOpen={this.state.showModal}
          contentLabel="Entsorgung"
          >
          <button className="modalClose" onClick={this.handleCloseModal}>&#x2716;</button>
          <Entsorgung />
       </ReactModal>
       <ReactModal 
          style={customStyles}
          isOpen={this.state.showModalAltmetall}
          contentLabel="Altmetall"
          >
          <button className="modalClose" onClick={this.handleCloseModalAltmetall}>&#x2716;</button>
          <Altmetall />
       </ReactModal>
       <ReactModal 
          style={customStyles}
          isOpen={this.state.showModalSchrotthandel}
          contentLabel="Schrotthandel"
          >
          <button className="modalClose" onClick={this.handleCloseModalSchrotthandel}>&#x2716;</button>
          <Schrotthandel/>
       </ReactModal>
       <ReactModal 
          style={customStyles}
          isOpen={this.state.showModalContainer}
          contentLabel="Container"
          >
          <button className="modalClose" onClick={this.handleCloseModalContainer}>&#x2716;</button>
          <Containerdienst />
       </ReactModal>
       <ReactModal 
          style={customStyles}
          isOpen={this.state.showModalElektro}
          contentLabel="Elektro"
          >
          <button className="modalClose" onClick={this.handleCloseModalElektro}>&#x2716;</button>
          <Elektroschrott />
       </ReactModal>
       <ReactModal 
          style={customStyles}
          isOpen={this.state.showModalAuto}
          contentLabel="Auto"
          >
          <button className="modalClose" onClick={this.handleCloseModalAuto}>&#x2716;</button>
          <Autorecycling />
       </ReactModal>
       
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
              <div  onClick={this.handleOpenModal} className='service-box d-flex'>

                <div className='service-icon mr-4'>
                  <i className='fas fa-car-side' />
                </div>

                <div className='service-body'>

                  <h5 className='service-title'>Entsorgung von Kfz</h5>
                  <p className='service-description'>
                  Egal, ob Sie eine Privatperson, ein Fuhrparkbetreiber, 
                  eine Werkstatt oder ein Unternehmen sind, unsere Dienstleistungen decken Ihre 
                  Bedürfnisse ab. [...]
                  </p>
                </div>
              </div>
            </div>
            <div className='col-md-6 col-lg-4 mb-3'>
              <div onClick={this.handleOpenModalAltmetall} className='service-box d-flex'>
                <div className='service-icon mr-4'>
                  <i className='fas fa-link' />
                </div>
                <div className='service-body'>
                  <h5 className='service-title'>Altmetall</h5>
                  <p className='service-description'>
                  Mit über 60 Jahren Erfahrung als professioneller Altmetall-Recycler verfügen wir über ein umfassendes Leistungsspektrum für alle unsere Kunden, [...]
                  </p>
                </div>
              </div>
            </div>
            <div className='col-md-6 col-lg-4 mb-3'>
              <div onClick={this.handleOpenModalSchrotthandel} className='service-box d-flex'>
                <div className='service-icon mr-4'>
                  <i className='fas fa-recycle' />
                </div>
                <div className='service-body'>
                  <h5 className='service-title'>Schrotthandel</h5>
                  <p className='service-description'> 
                  Wir können Kunden mit hohem Schrottaufkommen in ihren Räumlichkeiten im Rahmen unseres 
                  Services ein übersichtliches [...]
                  </p>
                </div>
              </div>
            </div>
            <div className='col-md-6 col-lg-4 mb-3'>
              <div onClick={this.handleOpenModalContainer} className='service-box d-flex'>
                <div className='service-icon mr-4'>
                  <i className='fas fa-dumpster' />
                </div>
                <div className='service-body'>
                  <h5 className='service-title'>Containerdienst</h5>
                  <p className='service-description'>
                  Wir wissen, dass nicht alle Unternehmen gleich sind und dass verschiedene 
                  Abfall- bewirtschaftungsprogramme unterschiedliche [...]
                  </p>
                </div>
              </div>
            </div>
            <div className='col-md-6 col-lg-4 mb-3'>
              <div onClick={this.handleOpenModalElektro} className='service-box d-flex'>
                <div className='service-icon mr-4'>
                  <i className='fas fa-bolt' />
                </div>
                <div className='service-body'>
                  <h5 className='service-title'>Elektroschrott</h5>
                  <p className='service-description'>
                  Unser Service ist darauf ausgerichtet, eine nachhaltige und umweltbewusste 
                  Lösung für Ihre E-Recycling-Anforderungen zu bieten. [...]
                  </p>
                </div>
              </div>
            </div>
            <div className='col-md-6 col-lg-4 mb-3'>
              <div onClick={this.handleOpenModalAuto} className='service-box d-flex'>
                <div className='service-icon mr-4'>
                  <i className='fas fa-car-crash' />
                </div>
                <div className='service-body'>
                  <h5 className='service-title'>Autorecycling</h5>
                  <p className='service-description'>
                  Wenn Sie Ihr Auto bei uns verschrotten lassen, können Sie sicher sein, 
                  dass wir Ihr Fahrzeug auf umweltfreundliche Weise entsorgen [...]
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
}
const props = {};

ReactDOM.render(<Service {...props} />, 
document.getElementById('root'))

export default Service;
