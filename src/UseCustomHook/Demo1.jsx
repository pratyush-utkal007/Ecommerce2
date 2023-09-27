import React, { useEffect, useState } from 'react';
const Demo1 = () => {
  const [count, setCount] = useState(0);
  const flag = true;
  useEffect(() => {
    document.title = flag ? `Demo1 ➡️ ${count}` : 'React App';
  });

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

export default Demo1;
