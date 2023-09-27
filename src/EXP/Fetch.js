import React, { useEffect, useState } from "react";

const Fetch = () => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
      .then((val) => setdata(val));
  }, []);
  return (
    <>
      <div className="container table-bordered ">
        <tbody>
          {data.map((resp) => {
            return (
              <tr key={resp.id}>
                <td>{resp.userId}</td>
                <td>{resp.title}</td>
              </tr>
            );
          })}
        </tbody>
      </div>
    </>
  );
};

export default Fetch;
