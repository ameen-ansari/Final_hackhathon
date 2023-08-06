import React from 'react';
// import './CustomStyles.css'; // Import your custom CSS file
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
let navigate =   useNavigate()
  return (
    <div className="landing-page">
      <header style={{height:'60vh'}} className="d-flex flex-column justify-content-center header">
        <h1 className='text-center py-3'>Welcome to Your Ameen's Mart</h1>
        <p className="text-center py-2 tagline">Engaging Tagline Goes Here</p>
      </header>
      <section className="about-us">
        <div>
          <div className="row">
            <div style={{height:'30vh'}} className="col-lg-8 offset-lg-2">
              <h2 className='text-center py-3'>About Us</h2>
              <p className='text-center py-3'>
                Write a brief description of your product or service and what makes it unique. Keep it compelling and concise.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="features">
        <div className="container">
          <div>
            <div style={{height:'30vh'}} className="col-lg-8 offset-lg-2">
              <h2 className='text-center py-3'>Services</h2>
              <ul>
              <button className="m-auto d-block btn btn-primary"  onClick={()=>{
                navigate('/services')
              }}>Explore store</button>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="call-to-action">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center">
              <h2>Call-to-Action</h2>
              <p>
                Use a strong call-to-action to encourage visitors to take the desired action, such as signing up, buying a product, etc.
              </p>
              <button className="btn btn-primary" onClick={()=>{
                navigate('/signup')
              }}>Sign Up Now</button>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <p>Contact us: ameen55668@gmail.com</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
