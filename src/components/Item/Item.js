import Contar from "../Contar";
import { grilla, card } from "./Item.module.scss";

const Item = ({ product }) => {
  return (
    <div className={grilla}>

      <div className={card}>
      <h3>{product.name}</h3>
      <p>{product.url}</p>
      <p>Precio: {product.price}</p>
      <p>Stock: {product.stock}</p>
      <Contar/>
      </div>
      
    </div>
  );
};

export default Item;
