// import React from 'react';

// function Footer() {
//   return (
//     <footer className="footer-gradient text-dark  pt-4 mt-5" style={{background: "linear-gradient(to right,#48A125, #7DDA58  )"}}>
//       <div className="container">
//         <div className="row justify-content-between">
        
//           <div className="col-md-3">
//             <h5>About Us</h5>
//             <p className='mt-3'>
//             Welcome to eStore, your ultimate destination for shopping convenience <br />and innovation. We are passionate about bringing high-quality products to your doorstep while delivering an exceptional online shopping experience.
//             </p>
//           </div>

         
//           <div className="col-md-3">
//             <h5 className='ms-4'>Quick Links</h5>
//             <ul className="list-unstyled mt-3 ms-4">
//               <li>
//                 <a href="#!" className="text-white text-decoration-none">
//                   Home
//                 </a>
//               </li>
//               <li>
//                 <a href="#!" className="text-white text-decoration-none">
//                   Products
//                 </a>
//               </li>
//               <li>
//                 <a href="#!" className="text-white text-decoration-none">
//                   Support
//                 </a>
//               </li>
//               <li>
//                 <a href="#!" className="text-white text-decoration-none">
//                   Contact Us
//                 </a>
//               </li>
//             </ul>
//           </div>

          
//           <div className="col-md-3">
//             <h5>Contact Us</h5>
//             <p>Email: musthu@gmail.com</p>
//             <p>Phone: 9876543210</p>
//             <p>Address: calicut, India</p>
//             <div>
//             <i className="fab fa-facebook-f me-3"></i>
//             <i className="fab fa-twitter me-3"></i>
//             <i className="fab fa-instagram me-3"></i>
//             <i className="fab fa-linkedin-in me-3"></i>

//             </div>
//           </div>
         
         
//           <div className="col-md-3 mt-5">
//             <h5>Follow Us</h5>
//             <ul className="list-unstyled d-flex">
//               <li className="me-3">
//                 <a href="#!" className="text-white text-decoration-none">
//                   <i className="fab fa-facebook-f"></i>
//                 </a>
//               </li>
//               <li className="me-3">
//                 <a href="#!" className="text-white text-decoration-none">
//                   <i className="fab fa-twitter"></i>
//                 </a>
//               </li>
//               <li className="me-3">
//                 <a href="#!" className="text-white text-decoration-none">
//                   <i className="fab fa-instagram"></i>
//                 </a>
//               </li>
//               <li>
//                 <a href="#!" className="text-white text-decoration-none">
//                   <i className="fab fa-linkedin-in"></i>
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>

//         <div className="text-center mt-4">
//           <p className="mb-0">
//             &copy; {new Date().getFullYear()} Estore. All Rights Reserved.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// }

// export default Footer;


import React from 'react';

function Footer() {
  return (
    <footer
      className="text-white pt-5 pb-3 mt-5"
      style={{ background: "linear-gradient(to right,#48A125, #7DDA58  )" }}
    >
      <div className="container">
        <div className="row text-center text-md-start">

          {/* About */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold">About Us</h5>
            <p className="mt-3 small">
              Welcome to <strong>eStore</strong>, your ultimate destination for shopping convenience and innovation. We're passionate about delivering high-quality products to your doorstep with an exceptional online shopping experience.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold">Quick Links</h5>
            <ul className="list-unstyled mt-3">
              <li><a href="#!" className="text-white text-decoration-none d-block py-1">Home</a></li>
              <li><a href="#!" className="text-white text-decoration-none d-block py-1">Products</a></li>
              <li><a href="#!" className="text-white text-decoration-none d-block py-1">Support</a></li>
              <li><a href="#!" className="text-white text-decoration-none d-block py-1">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold">Contact Us</h5>
            <ul className="list-unstyled mt-3 small">
              <li>Email: <a href="mailto:musthu@gmail.com" className="text-white text-decoration-none">musthu@gmail.com</a></li>
              <li>Phone: <a href="tel:9876543210" className="text-white text-decoration-none">9876543210</a></li>
              <li>Address: Calicut, India</li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold">Follow Us</h5>
            <div className="d-flex justify-content-md-start justify-content-center mt-3">
              <a href="#!" className="text-white fs-5 me-3"><i className="fab fa-facebook-f"></i></a>
              <a href="#!" className="text-white fs-5 me-3"><i className="fab fa-twitter"></i></a>
              <a href="#!" className="text-white fs-5 me-3"><i className="fab fa-instagram"></i></a>
              <a href="#!" className="text-white fs-5"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="text-center mt-4 border-top pt-3 small">
          <p className="mb-0">
            &copy; {new Date().getFullYear()} <strong>eStore</strong>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
