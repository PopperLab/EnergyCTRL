import React, {  useState } from "react";
import { ItemCount } from "../ItemCount";

const Contar = (props) => {

    const [contador, setContador] = useState(1)


    const onAdd = (stock) => {
        if (contador < stock) {
        setContador(contador+1);
    } else{
        console.log("sin stock");
    }
}

    const onResta = (stock) => {
        if (contador > 1 ) {
            setContador(contador-1);
        } else {
            console.log("compra 1, dale!")
    }
}

    return (
       <>
       <ItemCount stock={15} contador={contador} onAdd={onAdd} onResta={onResta} />
        </>
    )
    
}

export default Contar;