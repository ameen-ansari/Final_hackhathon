import { useNavigate } from "react-router-dom";
import logincss from "./Login.module.css";
import { useState } from "react";
import axios from "axios";

export default function Login() {
    const submitH = async (e) => {
        e.preventDefault()
        // console.log(values);
        setvalues(defaultValue)
        let data = await axios.post('http://localhost:800/checkuser', values)
        localStorage.setItem('404Unbreakable', data.data)
        console.log(data.data);
    }
    const defaultValue = {
        password: "",
        email: "",
    }
    let [values, setvalues] = useState(defaultValue)
    function valuesH(e) {
        let inputs = { [e.target.name]: e.target.value }
        setvalues({ ...values, ...inputs })
    }

    const navigate = useNavigate()
    return (
        <div className={logincss.container}>
            <div className={logincss.login}>
                <div className={logincss.head}>
                    <p>
                        Welcome to <span style={{ color: "#F46A06" }}>Ameen's Mart</span>
                    </p>
                </div>
                <p>Sign In</p>
                <div className="w-100 mb-4">
                    <form className="w-100 mb-5">
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">
                                Enter Email address
                            </label>
                            <input
                                type="email"
                                placeholder="Enter Email address"
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
                                Password
                            </label>
                            <input
                                value={values.password}
                                type="password"
                                className="form-control"
                                id="exampleInputPassword1"
                                placeholder="Password"
                                name="password"
                                onChange={valuesH}
                            />
                            <div style={{ cursor: 'pointer' }} onClick={() => {
                                navigate('/signup')
                            }} id="emailHelp" className="form-text mt-1">
                                Don't have a Acount ? SignUP
                            </div>
                        </div>
                        <button onClick={
                            submitH
                        } className="btn btn-primary">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}