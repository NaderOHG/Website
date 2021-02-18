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
      status: "Submit"
    };   
  } 
  render() {
    let buttonText = this.state.status;
    return (   
    <Section id='Widerruf'>
      <div className='container pt-2 pb-5'>
        <div className='section-header pt-5 pb-5 text-center'>
          <h3 className='section-title'>
            <span>Widerrufen </span>Sie ihren Einkauf
          </h3>
          <h6 className='section-subtitle mr-auto ml-auto'>
            <br></br>
            Wenn sie mit ihrem Artikel unzufrieden sind, können Sie ihren Kauf hier Widerrufen. Gerne können sie uns davor auch persönlich Kontaktieren,
            wir finden sicher eine lösung.  
          </h6>
        </div>
        <div className='section-content'>
          <div className='row'>
            <div className='col-md-9 col-lg-7 mr-auto ml-auto'>
              
              <form onSubmit={this.handleSubmit.bind(this)} method="POST">
                <div className='form-group'>
                  <input
                    type='text'
                    id="name"
                    value={this.state.name}
                    onChange={this.handleChange.bind(this)}
                    required
                    className='form-control rounded-0'
                    aria-describedby='emailHelp'
                    placeholder='Enter Name...'
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='email'
                    id="email"
                    value={this.state.email}
                    onChange={this.handleChange.bind(this)}
                    required
                    className='form-control rounded-0'
                    aria-describedby='emailHelp'
                    placeholder='Enter email...'
                  />
                </div>

                <div className='form-group'>
                  <textarea
                    id="message"
                    value={this.state.message}
                    onChange={this.handleChange.bind(this)}
                    required
                    className='form-control rounded-0'
                    rows='5'
                    placeholder='Enter Message...'
                  />
                </div>

                <div className='form-group text-center'>
                  <button className='btn btn-block rounded-0 mr-auto ml-auto' style={{background: 'var(--secondary)'}} type="submit">
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

