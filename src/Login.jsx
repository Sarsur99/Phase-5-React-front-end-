import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
    const [username, setUsername] =useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState('')
    const navigate = useNavigate();
    const [login, setLogin] = useState({
        name: "",
        password: "",
    });

    const handleOnChange = (event) => {
        setLogin({
            ...login,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const user = {
            name: login.name,
            password: login.password
        }

        fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(r => {
            if(r.ok) {
                return r.json()
            }
            else{
                throw new Error("invalid username or password")
            }
        })
        .then(data=> window.sessionStorage.setItem("user_id", data.id))
        .then(() => {
            props.onLogin();
            navigate("/restaurants");
        })
        .catch(err => setErrors(err.message))
    };


    return (
        <div className="relative bg-gradient-to-r from-pink-500 to-red-500 h-screen">
          <br></br>
        <div className="max-w-sm mx-auto bg-white rounded-lg shadow-lg px-8 pt-6 pb-8 mb-4">
          <h1 className="text-4xl font-bold text-red-600">Fast Foodies</h1>
          <p className="text-2xl font-bold">Fast food reviews by you!</p>
          <div className="flex flex-col mt-8">
            <label className="text-lg font-semibold text-black">Username:</label>
            <input
              className="w-full p-2 rounded-lg border-red-500 border-2 bg-white"
              type="text"
              name="name"
              value={login.name}
              onChange={handleOnChange}
            />
          </div>
          <div className="flex flex-col mt-8">
            <label className="text-lg font-semibold text-black">Password:</label>
            <input
              className="w-full p-2 rounded-lg border-red-500 border-2 bg-white"
              type="password"
              name="password"
              value={login.password}
              onChange={handleOnChange}
            />
          </div>
          <input
            className="w-full px-4 py-2 bg-red-500 rounded-lg text-white font-bold mt-8"
            type="submit"
            value="Login"
            onClick={handleSubmit}
            onMouseEnter={() => setLogin(login => ({ ...login, hovered: true }))}
            onMouseLeave={() => setLogin(login => ({ ...login, hovered: false }))}
            style={{
              transform: login.hovered ? "scale(1.1)" : "scale(1)",
              transition: "all .3s ease-in-out"
            }}
          />
        </div>
      </div>
    );
};

export default Login;