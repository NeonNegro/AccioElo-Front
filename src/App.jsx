import { useState } from "react";
import { health } from "./utils/utils";


function App() {

  const [msg, setMsg] = useState('Olá Mundão!');

  return (
    <button onClick={() =>health().then((r)=>{ setMsg(r)})}>{msg}</button>
  )
}

export default App;
