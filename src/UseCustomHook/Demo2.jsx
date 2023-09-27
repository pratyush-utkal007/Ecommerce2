import React, { useState } from 'react';
import UsemyHook from './UsemyHook';
const Demo2 = () => {
  const [count, setCount] = useState(0);
   UsemyHook(count)
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3">{count}</div>
        <div className="col-md-3">
          <button onClick={() => setCount(count + 1)}>Click</button>
        </div>
      </div>
    </div>
  );
};

export default Demo2;
