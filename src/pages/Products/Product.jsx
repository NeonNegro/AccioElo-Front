import { AddIcon, ProductConteiner, ProductImg, ProductDescription } from "../../style/principalPageStyle.js";
import { BsFillPlusCircleFill } from 'react-icons/bs';
import { AiFillMinusCircle } from "react-icons/ai";
import { useContext, useEffect, useState } from "react";
import CartContext from "../../contexts/CartContext";

function Product ({product}) {
    const {
        image,
        name, 
        description, 
        price,
    } = product;

    const [unit, setUnit] = useState(product);
    const {shopCart, cartList} = useContext(CartContext);

    useEffect(() =>{
      if(cartList.find(c => c._id === unit._id)){
        unit.selected = !unit.selected;
        setUnit({...unit});
      }
    }, []);

    function toggleUnit(){
        unit.selected = !unit.selected;
        setUnit({...unit});
        if(unit.selected)
          shopCart.add(unit)
        else
          shopCart.remove(unit._id)
    }


    return (
      <ProductConteiner isSelected={unit.selected} onClick={() => {toggleUnit()}}>
          <AddIcon >
              {!unit.selected 
                ? <BsFillPlusCircleFill  color={'#D3A625'} size='20px'/>
                : <AiFillMinusCircle color={'#D3A625'} size='23px'/>
              }
          </AddIcon>
        <ProductImg>
          <img src={image} alt= ''/>
        </ProductImg>
        <ProductDescription>
            <h1>{name}</h1>
            <p>{description}</p>
            <h2>{Number(price).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</h2>
        </ProductDescription>        
      </ProductConteiner>
    );
}

export default Product;