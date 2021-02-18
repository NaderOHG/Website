import React from 'react';
import Section from '../../../HOC/Section';

const MapMarker = () => {
  return (
    <Section id='map'>
      <div className="MapMaker">
        <iframe
          title='mapMarker'
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5259.287594939124!2d13.50777364783047!3d48.76959825723895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4774ee54f83e1787%3A0x9156c98686567afe!2sGewerbegebiet%20Kumreut-S%C3%BCd%2C%20%C3%96dholz%201%2C%2094133%20R%C3%B6hrnbach!5e0!3m2!1sen!2sde!4v1613393526760!5m2!1sen!2sde'
          width='100%'
          height='450'
          frameBorder='0'
          style={{ border: 0, marginBottom: '-7px' }}
          allowFullScreen
        />
      </div>
    </Section>
  );
};

export default MapMarker;
