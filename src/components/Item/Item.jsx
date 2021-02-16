import Contar from "../Contar";
import { grilla, card } from "./Item.module.scss";

const Item = ({ product }) => {
  return (
    <div className={grilla}>

      <div className={card}>
      <h3>{product.name}</h3>
      <img src={`${product.url}`} width="200" />
      
      <p>Precio: {product.price}</p>
      <p>Descripcion: {product.description}</p>
      <Contar/>
      </div>
      
    </div>
  );
};

export default Item;
