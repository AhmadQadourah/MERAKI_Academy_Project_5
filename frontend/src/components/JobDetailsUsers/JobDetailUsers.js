import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import UserNavbar from "../UserNavbar/UserNavbar";
import "../JobDetailsUsers/JobDetailsUsers.css";

function JobDetailsUsers() {
  const { jobDetails, userId } = useSelector((state) => {
    return {
      jobDetails: state.users.jobDetails,
      userId: state.usersAuth.userId,
    };
  });
  const jobApply = () => {
    axios
      .post(`http://localhost:5000/jobs/jobapply/${userId}`, {
        jobId: jobDetails.id,
      })
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleAddToFav = (jobId) => {
    axios
      .post(`http://localhost:5000/jobs/favjobs/${userId}`,{jobId})
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <UserNavbar />
      {console.log(jobDetails)}
      <div className="jobDetailsMainPage">
        <div id={jobDetails.id} key={jobDetails.id} className="jobCardDetails">
          <div className="generalInfo">
            <img
              className="companyLogoCardDetails"
              src={jobDetails.companylogo}
            ></img>
            <div>
              <p style={{ fontWeight: "600" }}>Company:</p>{" "}
              <p onClick={() => {}}>{jobDetails.companyname}</p>
            </div>

            <div>
              <p style={{ fontWeight: "600" }}>Industry:</p>
              <p>{jobDetails.industry}</p>{" "}
            </div>
            <div>
              <p style={{ fontWeight: "600" }}>Job Location:</p>
              <p>{jobDetails.joblocation}</p>
            </div>
            <div>
              {" "}
              <p style={{ fontWeight: "600" }}>Job Type:</p>{" "}
              <p>{jobDetails.jobtype}</p>
            </div>
            <div>
              {" "}
              <p style={{ fontWeight: "600" }}>Job Role:</p>
              <p>{jobDetails.jobrole}</p>
            </div>
            <div><p style={{ fontWeight: "600" }}>Career Level: </p><p>
              {jobDetails.careerlevel}
            </p></div>
            <div>
              <p style={{ fontWeight: "600" }}>Date Posted:</p>
              <p>{jobDetails.createdat.substring(0, 10)}</p>
            </div>
            <p style={{ fontWeight: "600" }}>Expiry Date: </p>
            <p>{jobDetails.expirydate.substring(0, 10)}</p>
          </div>
          <div className="jobDetailsInfo">
            
            <h2 className="jobTitleCardDetails" onClick={() => {}}>
              {jobDetails.jobtitle}   <button style={{marginLeft:"120px"}}className="applyButton"
            onClick={() => {
              jobApply();
            }}
          >
            Apply For This Job
          </button>
            </h2> <br></br>
            <p style={{ fontWeight: "600" }}>Job Description</p> <p className="jobDescriptionDetails">{jobDetails.jobdescription}</p><br></br>
            <p style={{ fontWeight: "600" }}>Job Requirements</p><p>{jobDetails.jobrequirements}</p><br></br>
            <div className="additionalInfo">
              <div>
            <p style={{ fontWeight: "600" }}>Years Of Experience</p><p>{jobDetails.yearsofexperience}</p></div>
            <div> <p style={{ fontWeight: "600" }}>Country Of Citizenship</p><p>{jobDetails.countryofcitizenship}</p></div>
            <div> <p style={{ fontWeight: "600" }}>Country Of Residence</p><p>{jobDetails.countryofresidence}</p></div>
            <div><p style={{ fontWeight: "600" }}>Languages</p><p>{jobDetails.language}</p></div>
            <div><p style={{ fontWeight: "600" }}>Company Number Of Hires</p><p>{jobDetails.numberofhires}</p></div>
            <div><p style={{ fontWeight: "600" }}>Salary</p><p>{jobDetails.salary}</p></div>
            
            </div>
            <button className="applyButton"
            onClick={() => {
              jobApply();
            }}
          >
            Apply For This Job
          </button>
          <button style={{marginLeft:"120px"}} className="addFavCard" 
                  onClick={(e) => {
                    handleAddToFav(jobDetails.id);
                  }}
                >
                  Add to Favorite
                </button>
            <p></p>{" "}
          </div>

        
        </div>
      </div>
    </>
  );
}

export default JobDetailsUsers;
