// import React from 'react'
// import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';
// import '../styles/Profile.css';


// const Profile = () => {
//   const [user, setUser] = useState({
//       username: 'JohnDoe',
//       email: 'johndoe@example.com',
//       phone: '123-456-7890',
//       city: 'New York'
//   });

//   // This useEffect is just illustrative. In a real app, you might fetch this data from an API.
//   useEffect(() => {
//       // Fetch user data from an API or other source
//       const fetchUserData = async () => {
//           // Simulating an API call
//           const userData = {
//               username: 'JohnDoe',
//               email: 'johndoe@example.com',
//               phone: '123-456-7890',
//               city: 'New York'
//           };
//           setUser(userData);
//       };

//       fetchUserData();
//   }, []);



// export default function PersonalProfile() {
//   return (
//     <section className="vh-100" style={{ backgroundColor:"secondary-color" }}>
//       <MDBContainer className="py-5 h-100">
//         <MDBRow className="justify-content-center align-items-center h-100">
//           <MDBCol lg="6" className="mb-4 mb-lg-0">
//             <MDBCard className="mb-3" style={{ borderRadius: '.5rem' }}>
//               <MDBRow className="g-0">
//                 <MDBCol md="4" className="gradient-custom text-center text-white"
//                   style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' }}>
//                   <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
//                     alt="Avatar" className="my-5" style={{ width: '80px' }} fluid />
//                   <MDBTypography tag="h5">Marie Horwitz</MDBTypography>
//                   <MDBCardText>Web Designer</MDBCardText>
//                   <MDBIcon far icon="edit mb-5" />
//                 </MDBCol>
//                 <MDBCol md="8">
//                   <MDBCardBody className="p-4">
//                     <MDBTypography tag="h6">Information</MDBTypography>
//                     <hr className="mt-0 mb-4" />
//                     <MDBRow className="pt-1">
//                       <MDBCol size="6" className="mb-3">
//                         <MDBTypography tag="h6">Email</MDBTypography>
//                         <MDBCardText className="text-muted">info@example.com</MDBCardText>
//                       </MDBCol>
//                       <MDBCol size="6" className="mb-3">
//                         <MDBTypography tag="h6">Phone</MDBTypography>
//                         <MDBCardText className="text-muted">123 456 789</MDBCardText>
//                       </MDBCol>
//                     </MDBRow>

//                     <MDBTypography tag="h6">Information</MDBTypography>
//                     <hr className="mt-0 mb-4" />
//                     <MDBRow className="pt-1">
//                       <MDBCol size="6" className="mb-3">
//                         <MDBTypography tag="h6">City</MDBTypography>
//                         <MDBCardText className="text-muted">Hyderabad</MDBCardText>
//                       </MDBCol>
//                       <MDBCol size="6" className="mb-3">
//                         <MDBTypography tag="h6">Phone</MDBTypography>
//                         <MDBCardText className="text-muted">123 456 789</MDBCardText>
//                       </MDBCol>
//                     </MDBRow>

//                     <div className="d-flex justify-content-start">
//                       <a href="#!"><MDBIcon fab icon="facebook me-3" size="lg" /></a>
//                       <a href="#!"><MDBIcon fab icon="twitter me-3" size="lg" /></a>
//                       <a href="#!"><MDBIcon fab icon="instagram me-3" size="lg" /></a>
//                     </div>
//                   </MDBCardBody>
//                 </MDBCol>
//               </MDBRow>
//             </MDBCard>
//           </MDBCol>
//         </MDBRow>
//       </MDBContainer>
//     </section>
//   );
// }


// // import React, { useState, useEffect } from 'react';
// // import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardBody, MDBTypography, MDBCardText,MDBIcon,MDBCardImage } from 'mdb-react-ui-kit';

// // const Profile = () => {
// //     const [user, setUser] = useState({
// //         username: 'JohnDoe',
// //         email: 'johndoe@example.com',
// //         phone: '123-456-7890',
// //         city: 'New York'
// //     });

// //     // This useEffect is just illustrative. In a real app, you might fetch this data from an API.
// //     useEffect(() => {
// //         // Fetch user data from an API or other source
// //         const fetchUserData = async () => {
// //             // Simulating an API call
// //             const userData = {
// //                 username: 'JohnDoe',
// //                 email: 'johndoe@example.com',
// //                 phone: '123-456-7890',
// //                 city: 'New York'
// //             };
// //             setUser(userData);
// //         };

// //         fetchUserData();
// //     }, []);

// //     return (
// //         <section className="vh-100" style={{ backgroundColor: "#eee" }}>
// //             <MDBContainer className="py-5 h-100">
// //                 <MDBRow className="justify-content-center align-items-center h-100">
// //                     <MDBCol lg="6" className="mb-4 mb-l g-0">
// //                         <MDBCard style={{ borderRadius: '.5rem' }}>
                          
// //                             <MDBCardBody className="p-4">
// //                                 <hr className="mt-0 mb-4" />
// //                                 <MDBRow className=" g-0">
//                     //                 <MDBCol md="4" className="gradient-custom text-center text-white"
//                     //                     style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' }}>
//                     //                     <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
//                     // alt="Avatar" className="my-5" style={{ width: '80px' }} fluid />
//                     //                     <MDBTypography tag="h5">{user.username}</MDBTypography>
//                     //                     <MDBCardText>Web Designer</MDBCardText>
//                     //                     <MDBIcon far icon="edit mb-5" />
//                     //                 </MDBCol>
// //                                     <MDBRow className='pt-1'>
// //                                         <MDBCol size="6" className="mb-3">
// //                                             <MDBTypography tag="h6">Email</MDBTypography>
// //                                             <MDBCardText className="text-muted">{user.email}</MDBCardText>
// //                                         </MDBCol>
// //                                         <MDBCol size="6" className="mb-3">
// //                                             <MDBTypography tag="h6">Phone</MDBTypography>
// //                                             <MDBCardText className="text-muted">{user.phone}</MDBCardText>
// //                                         </MDBCol>
// //                                     </MDBRow>
// //                                 </MDBRow>
// //                                 <MDBRow className='g-0 pt-4 pl-3'>
// //                                     <MDBCol size="6" className="mb-3">
// //                                         <MDBTypography tag="h6">City</MDBTypography>
// //                                         <MDBCardText className="text-muted">{user.city}</MDBCardText>
// //                                     </MDBCol>
// //                                 </MDBRow>
// //                                 <div className="d-flex justify-content-start">
// //                                   <a href="#!"><MDBIcon fab icon="facebook me-3" size="lg" /></a>
// //                                   <a href="#!"><MDBIcon fab icon="twitter me-3" size="lg" /></a>
// //                                   <a href="#!"><MDBIcon fab icon="instagram me-3" size="lg" /></a>
// //                                 </div>
// //                             </MDBCardBody>
// //                         </MDBCard>
// //                     </MDBCol>
// //                 </MDBRow>
// //             </MDBContainer>
// //         </section>
// //     );
// // }

// // export default Profile;

// // import React, { useState, useEffect } from 'react';
// // import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardBody, MDBTypography, MDBCardText, MDBIcon,MDBCardImage } from 'mdb-react-ui-kit';
// // import '../styles/Profile.css';

// const Profile = () => {
//     const [user, setUser] = useState({
//         username: 'JohnDoe',
//         email: 'johndoe@example.com',
//         phone: '123-456-7890',
//         city: 'New York'
//     });

//     // This useEffect is just illustrative. In a real app, you might fetch this data from an API.
//     useEffect(() => {
//         // Fetch user data from an API or other source
//         const fetchUserData = async () => {
//             // Simulating an API call
//             const userData = {
//                 username: 'JohnDoe',
//                 email: 'johndoe@example.com',
//                 phone: '123-456-7890',
//                 city: 'New York'
//             };
//             setUser(userData);
//         };

//         fetchUserData();
//     }, []);

// //     return (
// //         <section className="vh-100" style={{ backgroundColor: "#eee" }}>
// //             <MDBContainer className="py-5 h-100 container">
// //                 <MDBRow className="justify-content-center align-items-center h-100">
// //                     <MDBCol lg="6" className="mb-4 mb-lg-0">
// //                         <MDBCard style={{ borderRadius: '.5rem' }}>
                            
// //                             <MDBCardBody className="p-4">
// //                                 {/* <MDBTypography tag="h5">{user.username}</MDBTypography> */}
// //                                 <hr className="mt-0 mb-4" />
// //                                 <MDBCol md="4" className="gradient-custom text-center text-white "
// //                                         style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem'  }}>
// //                                         <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
// //                     alt="Avatar" className="my-5" style={{ width: '80px' }} fluid />
// //                                         <MDBTypography tag="h5">{user.username}</MDBTypography>
// //                                         <MDBCardText>Web Designer</MDBCardText>
// //                                         <MDBIcon far icon="edit mb-5" />
// //                                 </MDBCol>
// //                                 <MDBRow className="pt-2">
// //                                     <MDBCol size="6" className="mb-3">
// //                                         <MDBTypography className='heading' tag="h6">Email</MDBTypography>
// //                                         <MDBCardText className="text-muted data">{user.email}</MDBCardText>
// //                                     </MDBCol>
// //                                     <MDBCol size="6" className="mb-3">
// //                                         <MDBTypography tag="h6" className='heading'>Phone</MDBTypography>
// //                                         <MDBCardText className="text-muted data">{user.phone}</MDBCardText>
// //                                     </MDBCol>
// //                                 </MDBRow>
// //                                 <MDBRow className='pt-2'>
// //                                     <MDBCol size="6" className="mb-3">
// //                                         <MDBTypography tag="h6" className='heading'>City</MDBTypography>
// //                                         <MDBCardText className="text-muted data">{user.city}</MDBCardText>
// //                                     </MDBCol>
// //                                 </MDBRow>
// //                             </MDBCardBody>
// //                         </MDBCard>
// //                     </MDBCol>
// //                 </MDBRow>
// //             </MDBContainer>
// //         </section>
// //     );
// // }

// export default Profile;


import React , { useState, useEffect } from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';
import '../styles/Profile.css';
import Newsletter from '../shared/Newsletter';




  const Profile = () => {
    const [user, setUser] = useState({
        username: 'JohnDoe',
        email: 'johndoe@example.com',
        phone: '123-456-7890',
        city: 'New York'
    });

    // This useEffect is just illustrative. In a real app, you might fetch this data from an API.
    useEffect(() => {
        // Fetch user data from an API or other source
        const fetchUserData = async () => {
            // Simulating an API call
            const userData = {
                username: 'John Doe',
                email: 'johndoe@example.com',
                phone: '123-456-7890',
                city: 'New York'
            };
            setUser(userData);
        };

        fetchUserData();
    }, []);
   return (
    <>
    <section className="vh-50" style={{ backgroundColor: '#f4f5f7' }}>
      <MDBContainer className=" px-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol lg="6" className="mb-4 mb-lg-0">
            <MDBCard className="mb-3" style={{ borderRadius: '.5rem' }}>
              <MDBRow className="g-0">
                <MDBCol md="4" className="gradient-custom text-center text-white"
                  style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' }}>
                  <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                    alt="Avatar" className="my-5" style={{ width: '80px' }} fluid />
                  <MDBTypography tag="h5">{user.username}</MDBTypography>
                  <MDBCardText>Web Designer</MDBCardText>
                  <MDBIcon far icon="edit mb-5" />
                </MDBCol>
                <MDBCol md="8">
                  <MDBCardBody className="p-4">
                    <MDBTypography tag="h6">Information</MDBTypography>
                    <hr className="mt-0 mb-4" />
                    <MDBRow className="pt-1">
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Email</MDBTypography>
                        <MDBCardText className="text-muted" type="email">{user.email}</MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <MDBRow className="pt-1">
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Phone</MDBTypography>
                        <MDBCardText className="text-muted" type="number">{user.phone}</MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    {/* <MDBTypography tag="h6">Information</MDBTypography>
                    <hr className="mt-0 mb-4" /> */}
                    <MDBRow className="pt-1">
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">City</MDBTypography>
                        <MDBCardText className="text-muted" type="text">{user.city}</MDBCardText>
                      </MDBCol>
                      
                    </MDBRow>

                    <div className="d-flex justify-content-center">
                      <a href="#!"><MDBIcon fab icon="facebook" size="lg" className="me-3" /></a>
                      <a href="#!"><MDBIcon fab icon="twitter" size="lg" className="me-3" /></a>
                      <a href="#!"><MDBIcon fab icon="instagram" size="lg" className="me-3" /></a>
                    </div>

                  </MDBCardBody>
                </MDBCol>
              </MDBRow>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      
    </section>
    <Newsletter/>
    </>
    

  );
}
export default Profile;

