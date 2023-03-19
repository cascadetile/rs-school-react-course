import React from 'react';
import { NavMenu } from '../../components/NavMenu';
import './style.css';

export class AboutUs extends React.Component {
  render(): React.ReactNode {
    return (
      <div className="about-us">
        <NavMenu />
        <p className="about-us__p">
          Welcome to our website! We are a team of passionate 
          individuals dedicated to providing you with the best user experience possible. 
          Our site features a simple yet intuitive design, with a text input and three cards 
          that allow you to easily navigate and find what you&apos;re looking for.
        </p>
        <p className="about-us__p">
          Whether you&apos;re here to browse, search, or connect with others, we strive 
          to make your visit as enjoyable and effortless as possible. Our team is always 
          working to improve and enhance your experience, so feel free to send us your 
          feedback or suggestions anytime.
        </p>
        <p className="about-us__p">Thank you for choosing our site, and we hope you enjoy your stay!</p>
      </div>
    );
  }
}

export default AboutUs;