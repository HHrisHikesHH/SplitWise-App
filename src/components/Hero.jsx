

function Hero() {
     return (
          <div className='hero row align-items-center justify-content-center py-5'>
               <div className="col-md-10">
                    <div className="row align-items-center">
                         <div className="col-md-6">
                              <div className="text">
                                   <h2 className="display-3">Welcome to</h2>
                                   <h1 className='display-1'>SplitWise!</h1>
                                   <p className="lead">Just Split it!!</p>
                              </div>
                         </div>
                         <div className="col-md-6">
                              <div className="image">
                                   <img src="https://www.nobroker.in/blog/wp-content/uploads/2019/01/become-friends.jpg" alt="hero-image" className="img-fluid " />
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
}

export default Hero;
