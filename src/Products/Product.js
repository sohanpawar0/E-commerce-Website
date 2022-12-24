import React from "react";
import ProductItem from "./ProductItems/ProductItem";
import classes from "./Product.module.css";

const productsArr = [
  {
    id: "1",

    title: "Colors",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",

    quantity: 1,
  },

  {
    id: "2",

    title: "Black and white Colors",

    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    quantity: 1,
  },

  {
    id: "3",

    title: "Yellow and Black Colors",

    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",

    quantity: 1,
  },

  {
    id: "4",

    title: "Blue Color",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    quantity: 1,
  },
];

const Product = () => {
  const productItem = productsArr.map((ele) => (
    <ProductItem
      key={ele.id}
      _id={ele._id}
      title={ele.title}
      price={ele.price}
      url={ele.imageUrl}
      id={ele.id}
      quantity={ele.quantity}
    />
  ));
  return (
    <section className={classes.section}>
      <div>
        <h1> Music </h1>
      </div>
      <ul className={classes.list}>{productItem}</ul>
    </section>
  );
};

export default Product;
