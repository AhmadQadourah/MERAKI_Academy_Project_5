import axios from "axios";
import React from "react";
import {useEffect , useState } from "react"
import {  useNavigate ,useParams} from "react-router-dom";


const UserComplete = () => {

  
    const [maritalStatus, setMaritalStatus]= useState(null)
    const [citizenships, setCitizenships]= useState(null)
    const [whereDoYouLive, setWhereDoYouLive]= useState(null)
    const [residencyStatus, setResidencyStatus]= useState(null)
    const [yearsOfExperience, setYearsOfExperience]= useState(null)
    const [recentJobTitle, setRecentJobTitle]= useState(null)
    const [recentJobFunction, setRecentJobFunction]= useState(null)
    const [industryOfRecentJob, setIndustryOfRecentJob]= useState(null)
    const [languages, setLanguages]= useState(null)
    const [skills, setSkills]= useState(null)
    const [educationLevel, setEducationLevel]= useState(null)
    const [major, setMajor]= useState(null)
    const [educationalInstituteName, setEducationalInstituteName]= useState(null)
    const [cv, setCv]= useState(null)
    const [userId ,setUserId] = useState(localStorage.getItem("userId"))

    const navigate =useNavigate()

    

    const [role, setRole] = useState("")

    const [registeredSucssfully, setRegisteredSucssfully]= useState(false)
   
    
    const body = {
      
      maritalStatus,
      citizenships,
      whereDoYouLive,
      residencyStatus,
      yearsOfExperience,
      recentJobTitle,
      recentJobFunction,
      industryOfRecentJob,
      languages,
      skills,
      educationLevel,
      major,
      educationalInstituteName,
      cv,
    }
    
      const handleRegister = ()=>{
       

        axios.put(`http://localhost:5000/register/users/${userId}`, body)
        .then((response)=>{
            console.log (response)
    
          setRegisteredSucssfully(true)
          setTimeout(() => {
            navigate("/user/login") 
          }, 1000);
        })
        .catch((err)=>{
          console.log(err)
        })
      }
    
      return <div className="bigDivRegister">
    
        <div className="infoContainerRegister">
          <p> Register</p>
    
          <input placeholder="Marital Status" className="RegInput" onChange={(e)=>{setMaritalStatus(e.target.value)}}/>

          <input placeholder="citizenships" className="RegInput" onChange={(e)=>{setCitizenships(e.target.value)}}/>
          
          <input placeholder="Where DoYou Live" className="RegInput" onChange={(e)=>{setWhereDoYouLive(e.target.value)}}/>

          <input placeholder="Residency Status" className="RegInput" onChange={(e)=>{setResidencyStatus(e.target.value)}}/>

          <input placeholder="Years Of Experience" className="RegInput" onChange={(e)=>{setYearsOfExperience(e.target.value)}}/>

          <input placeholder="Recent Job Title" className="RegInput" onChange={(e)=>{setRecentJobTitle(e.target.value)}}/>

          <input placeholder="Recent Job Function" className="RegInput" onChange={(e)=>{setRecentJobFunction(e.target.value)}}/>

          <input placeholder="Industry Of RecentJob" className="RegInput" onChange={(e)=>{setIndustryOfRecentJob(e.target.value)}}/>

          <input placeholder="Languages" className="RegInput" onChange={(e)=>{setLanguages(e.target.value)}}/>
          
          <input placeholder="Skills" className="RegInput" onChange={(e)=>{setSkills(e.target.value)}}/>

          <input placeholder="Education Level" className="RegInput" onChange={(e)=>{setEducationLevel(e.target.value)}}/>

          <input placeholder="Major" className="RegInput" onChange={(e)=>{setMajor(e.target.value)}}/>

          <input placeholder="Educational Institute Name" className="RegInput" onChange={(e)=>{setEducationalInstituteName(e.target.value)}}/>
    
          
    {registeredSucssfully&& <div className="popuptry">
    
    <h1 >  Registerd In Sussfully</h1>
    </div>}
    
          <button className="registerButton" onClick={()=>{handleRegister()}} > Complete Information !</button>
    

        
        </div>
        </div>;
    };
    export default UserComplete;
    