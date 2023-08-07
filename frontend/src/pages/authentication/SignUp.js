import { useNavigate } from "react-router-dom";
import logincss from "./Login.module.css";
import { useState } from "react";
import axios from "axios";

export default function SignUp() {
    const navigate = useNavigate()
    const defaultValue = {
        password: "123",
        email: "",
        userName: "",
        confirmPassword: "123",
    }
    const submitH = async (e) => {
        e.preventDefault()
        if (values.confirmPassword === values.password) {
            let res = await axios.post('http://localhost:800/signup', {
                password: values.password,
                email: values.email,
                userName: values.userName,
            })
            alert(res.data.message)
            if (res.data.message === 'User Saved') {
                setvalues(defaultValue)
                navigate('/login')
            }
        } else {
            alert('Password Incorrect')
        }
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
                        Welcome to <span style={{ color: "#F46A06" }}>Ameen's Mart</span>
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
                                Password
                            </label>
                            <input
                                placeholder="Contact Number"
                                type="password"
                                onChange={valuesH}
                                className="form-control"
                                id="exampleInputEmail1"
                                name="confirmPassword"
                                aria-describedby="emailHelp"
                                value={values.confirmPassword}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">
                                Confirm Password
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