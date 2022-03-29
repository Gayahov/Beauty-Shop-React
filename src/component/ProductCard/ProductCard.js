import "./ProductCard.css";
import Button from "../../component/UI/Button/Button";
import { storeInfo } from "../../constants/store.constant";
import Counter from "../UI/Counter/Counter";

export default function ProductCard({ img, header, price }) {
  return (
    <div key={storeInfo.id}>
      <div  className="myDIV">
        <img src={require(`../../assets/${img}`)} alt={header} />
        <div className="quick-view">
         Quick view!
        </div>
        <div>
        <h4 className="store-header">{header}</h4>
        <p className="store-header">{price}</p>
      </div>
      </div>
     
    </div>
  );
}
