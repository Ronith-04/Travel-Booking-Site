// import {
//   MDBBtn,
//   MDBCol,
//   MDBContainer,
//   MDBIcon,
//   MDBModal,
//   MDBModalBody,
//   MDBModalContent,
//   MDBModalDialog,
//   MDBModalFooter,
//   MDBModalHeader,
//   MDBRow,
//   MDBTypography,
// } from "mdb-react-ui-kit";
// import React, { useState } from "react";

// export default function Basic() {
//   const [basicModal, setBasicModal] = useState(false);

//   const toggleShow = () => setBasicModal(!basicModal);

//   return (
//     <>
//       <section className="vh-100" style={{ backgroundColor: "#35558a" }}>
//         <MDBContainer className="py-5 h-100">
//           <MDBRow className="justify-content-center align-items-center h-100 text-center">
//             <MDBCol>
//               <MDBBtn color="light" size="lg" onClick={toggleShow}>
//                 <MDBIcon fas icon="info me-2" /> Get information
//               </MDBBtn>
//               <MDBModal show={basicModal} setShow={setBasicModal} tabIndex="-1">
//                 <MDBModalDialog>
//                   <MDBModalContent>
//                     <MDBModalHeader className="border-bottom-0">
//                       <MDBBtn
//                         className="btn-close"
//                         color="none"
//                         onClick={toggleShow}
//                       ></MDBBtn>
//                     </MDBModalHeader>
//                     <MDBModalBody className="text-start text-black p-4">
//                       <MDBTypography
//                         tag="h5"
//                         className="modal-title text-uppercase mb-5"
//                         id="exampleModalLabel"
//                       >
//                         Johnatan Miller
//                       </MDBTypography>
//                       <MDBTypography
//                         tag="h4"
//                         className="mb-5"
//                         style={{ color: "#35558a" }}
//                       >
//                         Thanks for your order
//                       </MDBTypography>
//                       <p className="mb-0" style={{ color: "#35558a" }}>
//                         Payment summary
//                       </p>
//                       <hr
//                         className="mt-2 mb-4"
//                         style={{
//                           height: "0",
//                           backgroundColor: "transparent",
//                           opacity: ".75",
//                           borderTop: "2px dashed #9e9e9e",
//                         }}
//                       />

//                       <div className="d-flex justify-content-between">
//                         <p className="fw-bold mb-0">Ether Chair(Qty:1)</p>
//                         <p className="text-muted mb-0">$1750.00</p>
//                       </div>

//                       <div className="d-flex justify-content-between">
//                         <p className="small mb-0">Shipping</p>
//                         <p className="small mb-0">$175.00</p>
//                       </div>

//                       <div className="d-flex justify-content-between pb-1">
//                         <p className="small">Tax</p>
//                         <p className="small">$200.00</p>
//                       </div>

//                       <div className="d-flex justify-content-between">
//                         <p className="fw-bold">Total</p>
//                         <p className="fw-bold" style={{ color: "#35558a" }}>
//                           $2125.00
//                         </p>
//                       </div>
//                     </MDBModalBody>

//                     <MDBModalFooter className="d-flex justify-content-center border-top-0 py-4">
//                       <MDBBtn
//                         size="lg"
//                         style={{ backgroundColor: "#35558a" }}
//                         className="mb-1"
//                       >
//                         Track your order
//                       </MDBBtn>
//                     </MDBModalFooter>
//                   </MDBModalContent>
//                 </MDBModalDialog>
//               </MDBModal>
//             </MDBCol>
//           </MDBRow>
//         </MDBContainer>
//       </section>
//     </>
//   );
// }


// import React, { useState } from "react";
// import {
//   MDBBtn,
//   MDBCol,
//   MDBContainer,
//   MDBIcon,
//   MDBModal,
//   MDBModalBody,
//   MDBModalContent,
//   MDBModalDialog,
//   MDBModalHeader,
//   MDBRow
// } from "mdb-react-ui-kit";

// export default function OrderDetails4() {
//   const [basicModal, setBasicModal] = useState(false);

//   const toggleShow = () => setBasicModal(!basicModal);

//   return (
//     <>
//       <section className="vh-100" style={{ backgroundColor: "#eee" }}>
//         <MDBContainer className="py-5 h-100">
//           <MDBRow className="justify-content-center align-items-center h-100 text-center">
//             <MDBCol>
//               <MDBBtn size="lg" onClick={toggleShow}>
//                 Track your order
//               </MDBBtn>
//               <MDBModal show={basicModal} setShow={setBasicModal} tabIndex="-1">
//                 <MDBModalDialog size="lg">
//                   <MDBModalContent
//                     className="text-white"
//                     style={{ backgroundColor: "#6d5b98", borderRadius: "10px" }}
//                   >
//                     <MDBModalHeader className="border-bottom-0">
//                       <MDBBtn
//                         className="btn-close btn-close-white"
//                         color="none"
//                         onClick={toggleShow}
//                       ></MDBBtn>
//                     </MDBModalHeader>

//                     <MDBModalBody className="text-start px-4 pt-0 pb-4">
//                       <div className="text-center">
//                         <h5 className="mb-3">Order Status</h5>
//                         <h5 className="mb-5">AWB Number-5335T5S</h5>
//                       </div>

//                       <div className="d-flex justify-content-between mb-5">
//                         <div className="text-center">
//                           <i className="fas fa-circle"></i>
//                           <p>Order placed</p>
//                         </div>
//                         <div className="text-center">
//                           <i className="fas fa-circle"></i>
//                           <p>In Transit</p>
//                         </div>
//                         <div className="text-center">
//                           <i className="fas fa-circle"></i>
//                           <p className="lead fw-normal">Out of Delivery</p>
//                         </div>
//                         <div className="text-center">
//                           <i
//                             className="fas fa-circle"
//                             style={{ color: "#979595" }}
//                           ></i>
//                           <p style={{ color: "#979595" }}>Delivered</p>
//                         </div>
//                       </div>
//                       <MDBRow className="justify-content-center">
//                         <div className="col-md-4 text-center">
//                           <p className="lead fw-normal">Shipped with</p>
//                         </div>
//                         <div className="col-md-4 text-center">
//                           <p className="lead fw-normal">UPS Expedited</p>
//                         </div>
//                         <div className="col-md-2 text-center">
//                           <MDBIcon fas icon="phone" size="lg" />
//                         </div>
//                       </MDBRow>
//                       <MDBRow className="justify-content-center">
//                         <div className="col-md-4 text-center">
//                           <p className="lead fw-normal">Estimated Delivery</p>
//                         </div>
//                         <div className="col-md-4 text-center">
//                           <p className="lead fw-normal">02/12/2017</p>
//                         </div>
//                         <div className="col-md-2 text-center">
//                           <MDBIcon fas icon="envelope" size="lg" />
//                         </div>
//                       </MDBRow>
//                     </MDBModalBody>
//                   </MDBModalContent>
//                 </MDBModalDialog>
//               </MDBModal>
//             </MDBCol>
//           </MDBRow>
//         </MDBContainer>
//       </section>
//     </>
//   );
// }



import React ,{useState} from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBRow
} from "mdb-react-ui-kit";
// import data from "../../assets/data/tours"



export default function OrderDetails2() {
  
  const [tour,setTour] = useState([]);
  const {photo, title,description,price,city,distance,address,maxGroupSize}=tour;
  return (
    <>
      <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
        <MDBContainer className="py-5 h-100">
          <MDBRow className="justify-content-center align-items-center h-100">
            <MDBCol lg="8" xl="6">
              <MDBCard className="border-top border-bottom border-3 border-color-custom">
                <MDBCardBody className="p-5">
                  <p className="lead fw-bold mb-5" style={{ color: "#f37a27" }}>
                    Purchase Reciept
                  </p>

                  <MDBRow>
                    <MDBCol className="mb-3">
                      <p className="small text-muted mb-1">Date</p>
                      <p>10 April 2021</p>
                    </MDBCol>
                    <MDBCol className="mb-3">
                      <p className="small text-muted mb-1">Order No.</p>
                      <p>012j1gvs356c</p>
                    </MDBCol>
                  </MDBRow>

                  <div
                    className="mx-n5 px-5 py-4"
                    style={{ backgroundColor: "#f2f2f2" }}
                  >
                    <MDBRow>
                      <MDBCol md="8" lg="9">
                        <p>{title},{city}</p>
                      </MDBCol>
                      <MDBCol md="4" lg="3">
                        <p>{price}</p>
                      </MDBCol>
                    </MDBRow>
                    <MDBRow>
                      <MDBCol md="8" lg="9">
                        <p className="mb-0">No Of People :</p>
                      </MDBCol>
                      <MDBCol md="4" lg="3">
                        <p className="mb-0">{maxGroupSize}</p>
                      </MDBCol>
                    </MDBRow>
                    <MDBRow>
                      <MDBCol md="8" lg="9">
                        <p className="mb-0">Shipping</p>
                      </MDBCol>
                      <MDBCol md="4" lg="3">
                        <p className="mb-0"></p>
                      </MDBCol>
                    </MDBRow>
                  </div>
                  <MDBRow className="my-4 px-4">
                      <MDBCol md="8" lg="9">
                        <p className=" lead fw-bold mb-0">Total :</p>
                      </MDBCol>
                      <MDBCol md="4" lg="3" className="mb-0">
                        <p
                          className="lead fw-bold mb-0"
                          style={{ color: "#f37a27" }}
                        >
                          £262.99
                        </p>
                      </MDBCol>
                  </MDBRow>

                  <p
                    className="lead fw-bold mb-4 pb-2"
                    style={{ color: "#f37a27" }}
                  >
                    Tracking Order
                  </p>

                  <MDBRow>
                    <MDBCol lg="12">
                      <div className="horizontal-timeline">
                        <ul className="list-inline items d-flex justify-content-between">
                          <li className="list-inline-item items-list">
                            <p
                              className="py-1 px-2 rounded text-white"
                              style={{ backgroundColor: "#f37a27" }}
                            >
                              Ordered
                            </p>
                          </li>
                          <li className="list-inline-item items-list">
                            <p
                              className="py-1 px-2 rounded text-white"
                              style={{ backgroundColor: "#f37a27" }}
                            >
                              Shipped
                            </p>
                          </li>
                          <li className="list-inline-item items-list">
                            <p
                              className="py-1 px-2 rounded text-white"
                              style={{ backgroundColor: "#f37a27" }}
                            >
                              On the way
                            </p>
                          </li>
                          <li
                            className="list-inline-item items-list text-end"
                            style={{ marginRight: "-8px" }}
                          >
                            <p style={{ marginRight: "-8px" }}>Delivered</p>
                          </li>
                        </ul>
                      </div>
                    </MDBCol>
                  </MDBRow>
                  <p className="mt-4 pt-2 mb-0">
                    Want any help?{" "}
                    <a href="#!" style={{ color: "#f37a27" }}>
                      Please contact us
                    </a>
                  </p>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </>
  );
}