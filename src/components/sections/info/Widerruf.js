import React, { Component } from "react";
import axios from "axios";

import Section from '../../../HOC/Section';


class Widerruf extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      message: "",
      status: "Absenden"
    };   
  } 
  render() {
    let buttonText = this.state.status;
    return (   
    <Section id='Widerruf'>
      <div className='container pt-2 pb-5'>
        <div className='section-header pt-5 pb-5 text-center'>
          <h3 className='section-title'>
           <p style={{height: "80px"}}></p>
            <span>Widerrufen </span>Sie ihren Einkauf
          </h3>
          <h4 className='section-subtitle mr-auto ml-auto'>
            <br></br>
           
            Wenn sie mit ihrem Artikel unzufrieden sind, können Sie ihren Kauf hier Widerrufen. Gerne können sie uns davor auch persönlich Kontaktieren,
            wir finden sicher eine lösung. 

          </h4>
        </div>
        <div className='section-content'>
          <div className='row'>
            <div className='col-md-9 col-lg-7 mr-auto ml-auto'>
              
              <form onSubmit={this.handleSubmit.bind(this)} method="POST">
                <div className='form-group-widerruf'>
                  <label>
                   Vorname: *
                   <br></br>
                  <input
                    type='text'
                    id="vorname"
                    value={this.state.vorname}
                    onChange={this.handleChange.bind(this)}
                    required
                    className='form-control-widerruf rounded-0'
                    aria-describedby='vorname'
                  />
                  </label>
                </div>
        

                <div className='form-group-widerruf'>
                <label>
                   Nachname: *
                   <br></br>
                  <input
                    type='text'
                    id="nachname"
                    value={this.state.nachname}
                    onChange={this.handleChange.bind(this)}
                    required
                    className='form-control-widerruf rounded-0'
                    aria-describedby='nachname'
                  />
                  </label>
                </div>

                <div className='form-group-widerruf'>
                <label>
                   Adresse: *
                   <br></br>
                  <input
                    type='text'
                    id="adresse"
                    value={this.state.adresse}
                    onChange={this.handleChange.bind(this)}
                    required
                    className='form-control-widerruf rounded-0'
                    aria-describedby='adresse'
                  />
                  </label>
                </div>

                <div className='form-group-widerruf'>
                <label>
                   e-mail Adresse: *
                   <br></br>
                  <input
                    type='text'
                    id="email"
                    value={this.state.email}
                    onChange={this.handleChange.bind(this)}
                    required
                    className='form-control-widerruf rounded-0'
                    aria-describedby='email'
                  />
                  </label>
                </div>

                <div className='form-group-widerruf'>
                <label>
                   Telefonnummer: *
                   <br></br>
                  <input
                    type='text'
                    id="telefon"
                    value={this.state.telefon}
                    onChange={this.handleChange.bind(this)}
                    required
                    className='form-control-widerruf rounded-0'
                    aria-describedby='telefon'
                  />
                  </label>
                </div>

                <div className='form-group-widerruf'>
                <label>
                   Bestellt am: *
                   <br></br>
                  <input
                    type='text'
                    id="bestellt"
                    value={this.state.bestellt}
                    onChange={this.handleChange.bind(this)}
                    required
                    className='form-control-widerruf rounded-0'
                    aria-describedby='bestellt'
                  />
                  </label>
                </div>

                <div className='form-group-widerruf'>
                <label>
                   Erhalten am: *
                   <br></br>
                  <input
                    type='text'
                    id="erhalten"
                    value={this.state.erhalten}
                    onChange={this.handleChange.bind(this)}
                    required
                    className='form-control-widerruf rounded-0'
                    aria-describedby='erhalten'
                  />
                  </label>
                </div>

                <div className='form-group-widerruf'>
                <label>
                   Datum: *
                   <br></br>
                  <input
                    type='text'
                    id="datum"
                    value={this.state.datum}
                    onChange={this.handleChange.bind(this)}
                    required
                    className='form-control-widerruf rounded-0'
                    aria-describedby='datum'
                  />
                  </label>
                </div>

                <div className='form-group-widerruf'>
                <label>
                   Artikelbezeichnung: *
                   <br></br>
                  <input
                    type='text'
                    id="bezeichnung"
                    value={this.state.bezeichnung}
                    onChange={this.handleChange.bind(this)}
                    required
                    className='form-control-widerruf rounded-0'
                    aria-describedby='bezeichnung'
                  />
                  </label>
                </div>

                <div className='form-group-widerruf'>
                <label>
                Artikel- bzw. Rechnungsnummer: 
                <br></br>
                  <input
                    type='text'
                    id="nummer"
                    value={this.state.nummer}
                    onChange={this.handleChange.bind(this)}
                    className='form-control-widerruf rounded-0'
                    aria-describedby='nummer'
                  />
                  </label>
                </div>

                <div className='form-group-widerruf'>
                <label>
                Anmerkungen: 
                <br></br>
                  <textarea
                    id="anmerkungen"
                    value={this.state.anmerkungen}
                    onChange={this.handleChange.bind(this)}
                    className='form-control-widerruf rounded-0'
                    rows='3'
                  />
                </label>
                </div>

                <div className='form-group-widerruf text-center'>
                  <button className='form-control-widerruf btn btn-block rounded-0 mr-auto ml-auto' style={{background: 'var(--secondary)'}} type="submit">
                  {buttonText}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      
    </Section>
  );
};

handleChange(event) {
  const field = event.target.id;
  if (field === "name") {
    this.setState({ name: event.target.value });
  } else if (field === "email") {
    this.setState({ email: event.target.value });
  } else if (field === "message") {
    this.setState({ message: event.target.value });
  }
}
handleSubmit(event) {
  event.preventDefault();  
  this.setState({ status: "Sending" });  
  axios({
    method: "POST",
    url: "http://backend.nader-recycling.de:5000/contact",
    data: this.state,
  }).then((response) => {
    if (response.data.status === "sent") {
      alert("Message Sent");
      this.setState({ name: "", email: "", message: "", status: "Submit" });
    } else if (response.data.status === "failed") {
      alert("Message Failed");
    }
  });
}
}

export default Widerruf;

