import { useEffect } from 'react'
const flag = true;

const UsemyHook = (count) => {
  useEffect(() => {
    document.title = flag ? `Demo2 👉 ${count}` : 'React App';
  },[count]);
}

export default UsemyHook