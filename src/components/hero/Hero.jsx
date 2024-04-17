import './Hero.css';
import { Link } from 'react-router-dom';

function Hero() {
     // Function to handle mouse movement and update button position
     const handleMouseMove = (event) => {
          const button = document.getElementById('signin-button');
          const rect = button.getBoundingClientRect();
          const centerX = rect.left + rect.width / 2;
          const centerY = rect.top + rect.height / 2;
          const dx = event.clientX - centerX;
          const dy = event.clientY - centerY;
          const maxDist = 100; // Maximum distance from the center
          const distance = Math.sqrt(dx * dx + dy * dy);
          const ratio = Math.min(distance / maxDist, 1);
          const offsetX = dx * ratio;
          const offsetY = dy * ratio;
          button.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
     };

     // Function to reset button position when mouse leaves
     const handleMouseLeave = () => {
          const button = document.getElementById('signin-button');
          button.style.transform = 'translate(0px, 0px)';
     };

     return (
          <div className='hero-container'>
               <div className="container">
                    <div className="row align-items-center justify-content-center">
                         <div className="col-md-4">
                              <div className="text">
                                   <h4 className="display-5 animate-on-hover">Welcome to</h4>
                                   <h1 className='display-1 animate-on-hover'>SplitWise!</h1>
                                   <p className="lead animate-on-hover">Just Split it!!</p>
                                   <h4 className='my-3'>New around?</h4>
                                   <Link to="/signin">
                                        <button id="signin-button" type="button" className="btn btn-outline-primary btn-lg custom-btn" style={{ border: '20px 0px 0px 20px solid white' }} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>Sign In</button>
                                   </Link>
                              </div>
                         </div>
                         <div className="col-md-6">
                              <div className="image-container">
                                   <img src="https://www.nobroker.in/blog/wp-content/uploads/2019/01/become-friends.jpg" alt="hero-image" className="img-fluid" />
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
}

export default Hero;
