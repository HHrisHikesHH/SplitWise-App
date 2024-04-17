import './Hero.css'

import { Link } from 'react-router-dom';
function Hero() {
     return (
          <div className='hero row align-items-center justify-content-center py-5'>
               <div className="col-md-10">
                    <div className="row align-items-center">
                         <div className="col-md-6">
                              <div className="text">
                                   <h4 className="display-5 animate-on-hover">Welcome to</h4>
                                   <h1 className='display-1 animate-on-hover'>SplitWise!</h1>
                                   <p className="lead animate-on-hover">Just Split it!!</p>
                              </div>

                              <h4 className='my-3'>new around? </h4>
                              <Link to="/signin">
                                   <button type="button" className="btn btn-outline-primary btn-lg">SignIn</button>
                              </Link>
                         </div>
                         <div className="col-md-6">
                              <div className="image" style={{ width: '100%' }}>
                                   <img src="https://www.nobroker.in/blog/wp-content/uploads/2019/01/become-friends.jpg" alt="hero-image" className="img-fluid" />
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
}

export default Hero;
