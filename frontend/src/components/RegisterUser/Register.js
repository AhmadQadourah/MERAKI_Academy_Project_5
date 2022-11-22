import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import "./Register.css"

const RegisterUser = () => {
  const [fullName, setFullName] = useState("");
  const [gender, setGender] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("");
  const [citizenships, setCitizenships] = useState("");
  const [whereDoYouLive, setWhereDoYouLive] = useState("");
  const [residencyStatus, setResidencyStatus] = useState("");
  const [yearsOfExperience, setYearsOfExperience] = useState("");
  const [recentJobTitle, setRecentJobTitle] = useState("");
  const [recentJobFunction, setRecentJobFunction] = useState("");
  const [industryOfRecentJob, setIndustryOfRecentJob] = useState("");
  const [languages, setLanguages] = useState("");
  const [skills, setSkills] = useState("");
  const [educationLevel, setEducationLevel] = useState("");
  const [major, setMajor] = useState("");
  const [educationalInstituteName, setEducationalInstituteName] = useState("");
  const [cv, setCv] = useState("");

  const navigate = useNavigate();

  const SendMail = () => {
    const params = {
      to_name: body.fullName,
      recieverEmail: body.email,
    };
    emailjs
      .send("service_kv6rdi9", "template_pe0lu7b", params, "TF1iRzpMsPVOJG-cK")
      .then(function (res) {
        console.log(res);
      });
  };

  const [role, setRole] = useState("");

  const [registeredSucssfully, setRegisteredSucssfully] = useState(false);

  const body = { fullName, dateOfBirth, email, password, gender, phoneNumber };

  const handleRegister = () => {
    axios
      .post("http://localhost:5000/register/users", body)
      .then((response) => {
        console.log(response);

        setRegisteredSucssfully(true);
        setTimeout(() => {
          navigate("/users/user/login");
        }, 1000);
        SendMail();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="mainPageRegisterUser">
      <div className="navbar_container1">
          <p
            className="navbar_user_login_link1"
            onClick={() => {
              navigate("/users/user/login");
            }}
          >
            Job Seeker Account
          </p>
          <p className="or">or</p>
          <p
            className="navbar_company_login_link1"
            onClick={() => {
              navigate("/companies/companies/login");
            }}
          >
            Employer Account
          </p>
        </div>
    <div className="bigDivRegister1">
      <div className="infoContainerRegisteruser1">
      <h1 style={{textAlign:"left",marginBottom:"40px"}}> Job Seeker Account Register</h1>
        
        <input
          placeholder="Full Name"
          className="RegInput1"
          onChange={(e) => {
            setFullName(e.target.value);
          }}
        />

        <input
          placeholder="date Of Birth"
          type="date"
          className="RegInput1"
          onChange={(e) => {
            setDateOfBirth(e.target.value);
          }}
        />

<select
 className="RegSelect1"
                name="gender"
                id="gender"
                onClick={(e) => {
                  setGender(e.target.value);
                }}
              >
                <option selected disabled hidden>
                  Select Your Gender{" "}
                </option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>

        <input
          placeholder="phone Number"
          className="RegInput1"
          onChange={(e) => {
            setPhoneNumber(e.target.value);
          }}
        />

        <input
          placeholder="Email"
          className="RegInput1"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <input
          type={"password"}
          placeholder="Password"
          className="RegInput1"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        {registeredSucssfully && (
          <div className="popuptry1">
            <h1> Registerd In Sussfully</h1>
          </div>
        )}

        <button
          className="registerButton1"
          onClick={() => {
            handleRegister();
          }}
        >
          {" "}
          Register Now !
        </button>
      </div>
    </div>
    <div className="paragraphRegister1"> <span style={{ fontWeight: 600 }}>Job Seeker?</span>
              <p>
                {" "}
                Join Us and let employers find you easily and get hired now.
              </p>
              <span style={{ fontWeight: 600 }}>
                Build your profile 
              </span> </div>
    </div>
  );
};
export default RegisterUser;
