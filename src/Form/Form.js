import React, { useState } from "react";
import "./Form.css";
const Form = () => {
  const [data, setdata] = useState({
    UserId: "",
    email: "",
    password: "",
    Name: "",
    Country: "",
    Language: "",
    Gender: "",
    Address: "",
  });
  const handleData = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setdata({ ...data, [name]: value });
  };

  const [record, setrecord] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newrecord = { ...data };
    // console.log(record);
    setrecord([...record, newrecord]);
    // console.log(record);
    document.querySelector("form").style.display = "none";
   
  };
  return (
    <>
      <h3 className="text-bg-primary mt-2 p-3">Registration Form</h3>
      <form action="" onSubmit={handleSubmit}>
        <ul>
          <li>
            User Id :
            <input
              type="text"
              placeholder="Enter Id "
              name="UserId"
              value={data.UserId}
              onChange={handleData}
            />
          </li>
          <li>
            E-mail :
            <input
              type="email"
              placeholder="Enter E-mail "
              name="email"
              value={data.email}
              onChange={handleData}
            />
          </li>
          <li>
            Password :
            <input
              type="password"
              placeholder="Enter Password "
              name="password"
              value={data.password}
              onChange={handleData}
            />
          </li>
          <li>
            Name :
            <input
              type="text"
              placeholder="Enter Your Name "
              name="Name"
              value={data.Name}
              onChange={handleData}
            />
          </li>
          <li>
            Country :
            <select
              name="Country"
              id=""
              value={data.Country}
              onChange={handleData}
            >
              <option value="">...Select....</option>
              <option value="Ind">Ind</option>
              <option value="Pak">Pak</option>
              <option value="China">China</option>
              <option value="Nepal">Nepal</option>
            </select>
          </li>
          <li>
            Language : Hindi
            <input
              type="checkbox"
              name="Language"
              value="Hindi"
              onChange={handleData}
            />
            Eng
            <input
              type="checkbox"
              name="Language"
              value="Eng"
              onChange={handleData}
            />
            Odia
            <input
              type="checkbox"
              name="Language"
              value="Odia"
              onChange={handleData}
            />
          </li>
          <li>
            Gender : Male
            <input
              type="radio"
              name="Gender"
              value="Male"
              onChange={handleData}
            />
            Female
            <input
              type="radio"
              name="Gender"
              value="Female"
              onChange={handleData}
            />
          </li>
          <li>
            Address:
            <textarea
              value={data.Address}
              name="Address"
              id=""
              cols="30"
              rows="3"
              placeholder="Enter Address "
              onChange={handleData}
            ></textarea>
          </li>
          <li>
            <input type="submit" id="submit" />
            <input type="reset" id="reset" />
          </li>
        </ul>
      </form>

      <div>
        {record.map((resp) => {
          return (
            <>
              <div  id="result">
                <ul className="list-group ms-5 col-sm-3" id="ul" >
                  <li className="list-group-item list-group-item-primary">
                    Id : {resp.UserId}
                  </li>
                  <li className="list-group-item list-group-item-secondary">
                    Email : {resp.email}
                  </li>
                  <li className="list-group-item list-group-item-success">
                    Passward : {resp.password}
                  </li>
                  <li className="list-group-item list-group-item-danger">
                    Name : {resp.Name}
                  </li>
                  <li className="list-group-item list-group-item-warning">
                    Country : {resp.Country}
                  </li>
                  <li className="list-group-item list-group-item-info">
                    Language : {resp.Language}
                  </li>
                  <li className="list-group-item list-group-item-light">
                    Gender : {resp.Gender}
                  </li>
                  <li className="list-group-item list-group-item-dark">
                    Address :{resp.Address}
                  </li>
                </ul>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Form;
