// import "./productList.css";
// import Product from "../product/Product";
// import { products } from "../../data";

// const ProductList = () => {
//   return (
//     <div className="pl">
//       <div className="pl-texts">
//         <h1 className="pl-title">Create & inspire. It's Lama</h1>
//         <p className="pl-desc">
//           Lama is a creative portfolio that your work has been waiting for.
//           Beautiful homes, stunning portfolio styles & a whole lot more awaits
//           inside.
//         </p>
//       </div>
//       <div className="pl-list">
//         {products.map((item) => (
//           <Product key={item.id} img={item.img} link={item.link} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductList;
import React from 'react'
import './productList.css'
import Product from '../product/Product'
import {products} from '../../data'

const ProductList = () => {
  return (
    <div className='p1'>
      <div className="p1-texts">
          <h1 className="p1-title">Create & inspire. It's Abhi</h1>
          <p className="p1-desc">This is a creative portfolio that work has been waiting Beautiful homes
          ,stuning portfolio styles and a whole lot more</p>
      </div>
      <div className="p1-list">
        {products.map(item=>(
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
          
          
          
      </div>
    </div>
  );
};

export default ProductList
