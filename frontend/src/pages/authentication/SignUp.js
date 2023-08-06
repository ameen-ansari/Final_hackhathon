import { useNavigate } from "react-router-dom";
import logincss from "./Login.module.css";
import { useState } from "react";
import axios from "axios";

export default function SignUp() {
    const navigate = useNavigate()
    const submitH = async (e) => {
        e.preventDefault()
        console.log(values);
        setvalues(defaultValue)
        await axios.post('http://localhost:800/saveuser', values)
    }
    const defaultValue = {
        password: "",
        email: "",
        userName: "",
        phoneNumber: "",
    }
    let [values, setvalues] = useState(defaultValue)
    function valuesH(e) {
        let inputs = { [e.target.name]: e.target.value }
        setvalues({ ...values, ...inputs })
    }
    return (
        <div className={logincss.container}>
            <div className={logincss.login}>
                <div className={logincss.head}>
                    <p>
                        Welcome to <span style={{ color: "#F46A06" }}>Islamia</span>
                    </p>
                </div>
                <p>Sign up</p>
                <div className="w-100">
                    <form className="w-100">
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">
                                Enter Email address
                            </label>
                            <input
                                type="email"
                                placeholder="Enter username or email address"
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                name="email"
                                value={values.email}
                                onChange={valuesH}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">
                                User Name
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="exampleInputPassword1"
                                placeholder="User Name"
                                onChange={valuesH}
                                name="userName"
                                value={values.userName}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">
                                Contact Number
                            </label>
                            <input
                                placeholder="Contact Number"
                                type="text"
                                onChange={valuesH}
                                className="form-control"
                                id="exampleInputEmail1"
                                name="phoneNumber"
                                aria-describedby="emailHelp"
                                value={values.phoneNumber}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">
                                Password
                            </label>
                            <input
                                placeholder="Password"
                                name="password"
                                type="password"
                                className="form-control"
                                id="exampleInputPassword1"
                                onChange={valuesH}
                                value={values.password}
                            />
                            <div style={{ cursor: 'pointer' }} onClick={() => {
                                navigate('/login')
                            }} id="emailHelp" className="form-text">
                                Have a acount ? SignIn
                            </div>
                        </div>
                        <button onClick={submitH} type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}