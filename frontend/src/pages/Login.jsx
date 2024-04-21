import React,{useState,useContext} from "react";
import { Container,Row ,Col, Form ,FormGroup, Button } from "reactstrap";
import {Link, useNavigate} from "react-router-dom";
import '../styles/login.css'
import LoginImg from'../assets/images/login.png';
import userIcon from '../assets/images/user.png'; 
import Newsletter from "../shared/Newsletter";
import { AuthContext } from "./../context/AuthContext";
import { BASE_URL } from "./../Utils/config";
// import { AuthContext } from "./../../context/AuthContext";
// import {useNavigate} from "react-router-dom";
// import {GoogleLogin} from "react-google-login";
// import Icon from "../components/Auth/Icon";
// import { FaSuitcase } from "react-icons/fa6";
// import { FaUser } from "react-icons/fa";;




const Login = () => {
    const {dispatch}=useContext(AuthContext);
    const navigate=useNavigate();
    // const logout=()=>{
    //     dispatch({type:"LOGOUT"});
    //     navigate('/home');
    // }   
    // const history= useHistory();
    const [credentials,setCredentials]=useState({
        email:undefined,
        password:undefined
      })

    

    const handleChange=e=>{
        setCredentials(prev=>({
          ...prev,
          [e.target.id]:e.target.value
        }))
      }
    const handleClick= async e=>{
        e.preventDefault();
        // console.log(credentials)
        dispatch({type:"LOGIN_START"})  
        try{
            const res= await fetch(`${BASE_URL}/auth/login`,{
                method:"post",
                headers:{
                    "content-type":"application/json"
                },
                credentials:"include",
                body:JSON.stringify(credentials)
            })
            const result=await res.json();
            if(res.ok){
                // console.log(result.data)
                localStorage.setItem("user", JSON.stringify(result.data))
                localStorage.setItem("booking", [])
                dispatch({type:"LOGIN_SUCCESS",payload:result.data})
                // console.log(result.data)
                navigate('/home')
            }else{
                alert(result.message)
            }
            

        }catch(error){
            dispatch({type:"LOGIN_FAILURE",payload:error.message})

        }

    }

    const handleGoogleLogin = () => {
        window.open(`${BASE_URL}/users/google`,"_self")
    }



    // const googleSuccess=async(res)=>{
    //     const result = res?.profileObj;
    //     const token = res?.tokenId;

    //     try {
    //     dispatch({ type:"LOGIN_SUCCESS", data: { result, token } });

    //     navigate.push('/');
    //     } catch (error) {
    //     console.log(error);
    //     }

    // }
    // const GoogleFailure=()=>{
    //     alert('Google Sign In was unsuccessful. Try again later')

    // }
    return <>
    <section>
        <Container>
            <Row>
                <Col lg='8' className="m-auto">
                    <div className="login__container d-flex justify-content-between">
                        <div className="login__img">
                            <img src={LoginImg} alt="" />
                        </div>
                        <div className="login__form">
                            <div className="user">
                                <img src={userIcon} alt=""/>
                            </div>
                            <h2>Login</h2>
                            <Form onSubmit={handleClick}>
                                <FormGroup>
                                    <input type="email" placeholder="Email" required id="email"  onChange={handleChange}/>
                                </FormGroup>
                                <FormGroup>
                                    <input type="password" placeholder="password" required id="password"  onChange={handleChange}/>
                                </FormGroup>
                                {/* <GoogleLogin
                                    clientId="226015114355-qrfv89ov8jisvusuraftojo9i2bfg9li.apps.googleusercontent.com"
                                    render={(renderProps)=>(
                                        <Button 
                                        className="btn secondary__btn auth__btn"
                                        color="primary" fullWidth 
                                        onclick={renderProps.onClick} 
                                        disabled={renderProps.disabled} 
                                        startIcon={<Icon/>} 
                                        variant="contained"
                                        >
                                            Sign In with Google
                                        </Button>
                                    )}
                                    onSuccess={googleSuccess}
                                    onFailure={GoogleFailure}
                                    cookiePolicy="single_host_origin"
                                /> */}
                                
                            
                                <Button className="btn secondary__btn auth__btn" onClick={handleGoogleLogin}> Sign In with Google</Button><br/>
                                <Button className="btn secondary__btn auth__btn" onClick={handleClick}>Login</Button>
                            </Form>
                            <p>Don't have an account? <Link to="/Register"> Create account</Link></p>
                        </div>
                    </div>

                </Col>
            </Row>
        </Container>
    </section>
    <Newsletter/>
    </>
}

export default Login;