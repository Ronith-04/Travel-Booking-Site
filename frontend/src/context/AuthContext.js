// import {createContext, useEffect, useReducer} from 'react';

// const initial_State = {
//     user:localStorage.getItem("user")?JSON.parse(localStorage.getItem("user")):null,
//     loading:false,
//     error:null
// }



// export const AuthContext=createContext(initial_State);
// const AuthReducer=(state,action)=>{
//     switch(action.type){
//         case "LOGIN_START":
//             return{
//                 user:null,
//                 loading:false,
//                 error:null
//             };
//             case "LOGIN_SUCCESS":
//                 return{
//                     user:action.payload,
//                     loading:false,
//                     error:null
//                 };
//             case "LOGIN_FAILURE":
//                     return{
//                         user:null,
//                         loading:false,
//                         error:action.payload
//                     };
//             case "REGISTER_SUCCESS":
//                         return{
//                             user:null,
//                             loading:false,
//                             error:null
//                         };
//             case "LOGOUT":
//                         return{
//                             user:null,
//                             loading:false,
//                             error:null
//                         };
//             default:
//                 return state;
//     }
// }
// export const AuthContextProvider=({children})=>{
//     const [state,dispatch]=useReducer(AuthReducer,initial_State);

//     useEffect(()=>{
//         localStorage.setItem("user",JSON.stringify(state.user))
//     },[state.user])
//     return <AuthContext.Provider value={{user:state.user,loading:state.loading,error:state.error,dispatch}}>
//         {children}
//     </AuthContext.Provider>
// }

import { createContext, useEffect, useReducer } from 'react';
import axios from 'axios';

const initialState = {
    user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null,
    booking: localStorage.getItem("booking") ? JSON.parse(localStorage.getItem("booking")) : null,
    loading: false,
    error: null
};

export const AuthContext = createContext(initialState);

const AuthReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN_START":
            return {
                ...state,
                loading: true,
                error: null
            };
        case "LOGIN_SUCCESS":
            return {
                ...state,
                user: action.payload,
                loading: false,
                error: null
            };
        case "LOGIN_FAILURE":
            return {
                ...state,
                user: null,
                loading: false,
                error: action.payload
            };
        case "LOGOUT":
            return {
                ...state,
                user: null,
                loading: false,
                error: null
            };
        default:
            return state;
    }
};

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, initialState);
    // console.log(state)
    useEffect(() => {
        // console.log(123456)
        const urlParams = new URLSearchParams(window.location.search);
        // console.log(window.location)
        const userId = urlParams.get('id');
        const bookingId = urlParams.get('bookingId');
        // console.log("hi")
        console.log(1,userId)
        console.log(2,bookingId)
        const fetchUser = async () => {
            if (userId) {
                dispatch({ type: "LOGIN_START" });
                try {
                    // console.log(234)
                    const response = await axios.get(`http://localhost:4000/api/v1/users/getUser/${userId}`);
                    // console.log(2345)
                    // console.log(response.data);
                    dispatch({ type: "LOGIN_SUCCESS", payload: response.data });
                    localStorage.setItem("user", JSON.stringify(response.data.data));
                    localStorage.setItem("booking",[])
                    // Call backend API to get booking by id
                    // const bookingResponse = await axios.get(`http://localhost:4000/api/v1/bookings/${userId}`); // Assuming the API endpoint for getting a booking by id is `/api/v1/bookings/:id`
                    // Update user object with booking details
                    // const User = { ...response.data }; // Assuming the booking data is stored in the `data` property of the response
                    // history.replaceState(null, '', window.location.pathname);  // Remove ID from URL
                } catch (error) {
                    dispatch({ type: "LOGIN_FAILURE", payload: error.response.data });
                }
            }
        };
        const fetchbooking = async () => {
            // console.log("Fetching booking for ID:", bookingId);

            if (bookingId){
                try{
                    // Call backend API to get booking by id
                    const bookingResponse = await axios.get(`http://localhost:4000/api/v1/booking/${bookingId}`); // Assuming the API endpoint for getting a booking by id is `/api/v1/bookings/:id`
                    // console.log(3,bookingResponse.data)
                    // Update user object with booking details
                    const updatedUser = { booking: bookingResponse.data }; 
                    localStorage.setItem("booking", JSON.stringify(bookingResponse.data));// Assuming the booking data is stored in the `data` property of the response
                    // console.log(updatedUser)
                }catch{
                    console.log("error")
                }

            }
        }

        fetchUser();
        fetchbooking();
        // Ensure user state sync with local storage
        localStorage.setItem("user", JSON.stringify(state.user));
        localStorage.setItem("booking", JSON.stringify(state.booking));
    }, []);

    return (
        <AuthContext.Provider value={{ ...state, dispatch }}>
            {children}
        </AuthContext.Provider>
    );
};
