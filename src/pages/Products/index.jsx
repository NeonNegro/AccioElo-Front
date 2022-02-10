import { useState } from "react";
import Screen from "../../components/Screen.jsx";
import { health } from "../../utils/utils.js";

function Products(){

  const [msg, setMsg] = useState('Olá Mundão!');

    return(
        <Screen>
            <button onClick={() =>health().then((r)=>{ setMsg(r)})}>{msg}</button>
        </Screen>
    )
}

export default Products;