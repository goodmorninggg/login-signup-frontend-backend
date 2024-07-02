import React, { useEffect, useState } from "react";
import "./Login.css";
// import user_icon from '../assets/person.png'
// import email_icon from '../assets/email.png'
// import password_icon from '../assets/password.png'
import user_icon from "../assets/person.png";
import password_icon from "../assets/password.png";
import email_icon from "../assets/email.png";
import { PostWithOutAuth } from "../../utils/api";
import toast from "react-hot-toast";

const Login = () => {
	const [action, setAction] = useState("Sign Up");
	const [data, setData] = useState({
		fname: "",
		lname: "",
		email: "",
		password: "",
	});
	const handleChange = (e) => {
		setData({ ...data, [e.target.name]: e.target.value });
	};
	const handleSubmit = async () => {
		try {
			if (action === "Sign Up") {
				const response = await PostWithOutAuth(
					`${process.env.REACT_APP_BASE_URL}/api/signup`,
					{ body: JSON.stringify(data) },
				);
				console.log(response);
				toast.success("SignUp Successfully!! Please Login!!");
			} else {
				const response = await PostWithOutAuth(
					`${process.env.REACT_APP_BASE_URL}/api/login`,
					{ body: JSON.stringify(data) },
				);
				toast.success("Login Successfully ");
				console.log(response);
			}
			setData({
				fname: "",
				lname: "",
				email: "",
				password: "",
			});
		} catch (error) {
			toast.error("An error occurred");
			console.log(error);
		}
	};
	useEffect(() => {
		console.log(data);
	}, [data]);

	return (
		<div className="container">
			<div className="header">
				<div className="text">{action}</div>
				<div className="underline"></div>
			</div>
			<form className="inputs">
				{action === "Login" ? (
					<div></div>
				) : (
					<div className="input">
						<img src="user_icon" alt="" />
						<input
							type="text"
							placeholder="First Name"
							name="fname"
							value={data.fname}
							onChange={handleChange}
						/>
						<input
							type="text"
							placeholder="Last Name"
							name="lname"
							value={data.lname}
							onChange={handleChange}
						/>
					</div>
				)}

				<div className="input">
					<img src="email_icon" alt="" />
					<input
						type="email"
						placeholder="email"
						name="email"
						value={data.email}
						onChange={handleChange}
					/>
				</div>

				<div className="input">
					<img src="password_icon" alt="" />
					<input
						type="password"
						placeholder="password"
						name="password"
						value={data.password}
						onChange={handleChange}
					/>
				</div>
			</form>
			{action === "Sign Up" ? (
				<div></div>
			) : (
				<div className="forget-password">
					Lost Password?<span>click here!</span>
				</div>
			)}
			<button
				style={{
					margin: "20px",
					paddingTop: "10px",
					paddingBottom: "10px",
					backgroundColor: "blue",
					color: "white",
					fontSize: "18px",
					borderRadius: "12px",
					cursor: "pointer",
				}}
				type="button"
				onClick={handleSubmit}
			>
				Submit
			</button>
			<div className="submit-container">
				<div
					className={action === "Login" ? "submit gray" : "submit"}
					onClick={() => {
						setAction("Sign Up");
					}}
				>
					Sign Up
				</div>
				<div
					className={action === "Sign Up" ? "submit gray" : "submit"}
					onClick={() => {
						setAction("Login");
					}}
				>
					Login
				</div>
			</div>
		</div>
	);
};

export default Login;
