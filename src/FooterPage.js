import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebook, faLinkedin, faGoogle, faInstagram } from '@fortawesome/free-brands-svg-icons'




const FooterPage = () => {

    const navcolor = {
        backgroundColor: 'black',
        color: "white",
        textDecoration: 'none'
      
      };
      
    const itemscolor = {
        color: "white",
        textDecoration: 'none'
      
      };

  return (

   <div className="page-footer font-small unique-color-dark">
             <div style={navcolor} className="text-center text-white "  >           
                    
                    <div className=" bg-danger">
                            <div className="container ">      
                                <div className=" container py-2 d-flex align-items-center">
                                    <div className="col-md-6 col-lg-5 text-center  mb-4 mb-md-0">
                                        <h6 className="mb-0">Get connected with us on social networks!</h6>
                                    </div>
                                    <div className="col-md-6 col-lg-7 text-center text-md-right" style={itemscolor}>
                                                                                                               
                                        <a href=""><FontAwesomeIcon icon={faTwitter} className="fab fa-twitter mr-5" style={itemscolor} size="2x"/> </a>
                                        <a href=""> <FontAwesomeIcon icon={faFacebook} className="fab fa-facebook-f  mr-5" style={itemscolor} size="2x"/></a>
                                        <a href=""><FontAwesomeIcon icon={faLinkedin} className="fab fa-linkedin-in  mr-5" style={itemscolor} size="2x" /></a>
                                        <a href=""> <FontAwesomeIcon icon={faInstagram} className="fab fa-instagram  mr-5" style={itemscolor} size="2x"/></a>
                                        <a href=""><FontAwesomeIcon icon={faGoogle} className="fab fa-google-plus-g  mr-5"  style={itemscolor} size="2x" /></a>
                                       
                                      
                                        
                                    </div>       
                                </div>
                            </div>
                         </div>
                 
                
                    <div className=" text-center text-md-left mt-5">
                    <div className="row mt-3">
                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            <h6 className="text-uppercase font-weight-bold">Canada Welcome Centre</h6>
                            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" ></hr>
                            <p>We are here to help all newcomers…</p>
                        </div>
                    
                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase font-weight-bold">OUR PARTNERS</h6>
                            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" ></hr>
                            <p><a href="https://anatolian.ca/" target="_blank"><img src="https://anatolian.ca/wp-content/uploads/2018/10/anatolian-cultural-centre.jpg" width="130" height="40" ></img></a></p>
                            <p><a href="http://muslimsforwhiteribbon.com/" target="_blank"><img src="https://northernlightsrelief.ca/wp-content/uploads/2015/07/Muslims_for_White_Ribbon_White_Logo-small.jpg" width="130" height="40"></img></a></p>
                            <p><a href="https://www.embracerelief.org/" target="_blank"><img src="https://www.embracerelief.org/wp-content/uploads/2017/12/logo.png" width="130" height="40"></img></a></p>
                            <p><a href="https://anatolianheritage.ca/" target="_blank"><img src="https://anatolianheritage.ca/wp-content/uploads/2018/11/AHFLogo2.png" width="130" height="40" ></img></a></p>               
                        </div>

                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                        <h6 className="text-uppercase font-weight-bold">Useful links</h6>
                        <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" ></hr>
                        <p><a href="#!">Ask questions</a></p>
                        <p><a href="#!">Help</a></p>
                        </div>

                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                        <h6 className="text-uppercase font-weight-bold">Contact us</h6>
                        <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" ></hr>
                        <p><i className="fas fa-home mr-3"></i> 30 Rayette Rd Concord, ON L4K 2G3</p>
                        <p><i className="fas fa-envelope mr-3"></i> info@northernlightsrelief.ca</p>
                        <p><i className="fas fa-phone mr-3"></i> +1 (416) 882-6454</p>
                        </div>
                    </div>
          </div>
      </div>
      </div>
  );
}

export default FooterPage;