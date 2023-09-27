import React, { useEffect, useState } from "react";
import "./Empdata.css";

const Empdata = () => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/Empdata")
      .then((val) => {
        return val.json();
      })
      .then((resp) => {
        setdata(resp);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <table className=" table table-bordered td td-dark td-striped text-light bg-black text-center">
        <th>Id</th>
        <th>FirstName</th>
        <th>email</th>
        <th>gender</th>
        <th>age</th>
        {data.map((res) => {
          return (
            <>
              <tbody>
                <tr key={res.id} className="text-center">
                  <td className="bg-primary">{res.id}</td>
                  <td className="bg-secondary">{res.firstName}</td>
                  <td className="bg-success">{res.email}</td>
                  <td className="bg-danger">{res.gender}</td>
                  <td className="bg-warning">{res.salary}</td>
                </tr>
              </tbody>
            </>
          );
        })}
      </table>
    </>
  );
};

export default Empdata;
