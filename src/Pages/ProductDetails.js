import React from "react";
import { useParams } from "react-router-dom";
import Header from "../Header/Header";
import Header2 from "../Header/Header2";
import classes from "./ProductDetails.module.css"
function ProductDetails() {
  const  params  = useParams();

  return (
    <div>
      <Header/>
      <Header2/>
      <h1 className={classes.title}>Product Details</h1>
      <h1>{params.productName}</h1>
      <div className={classes.details}>
      <img
        src="https://images.pexels.com/photos/1616403/pexels-photo-1616403.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt="img1"
        width="10%"
      />
      <br/>
      <img
        src="https://images.pexels.com/photos/1191710/pexels-photo-1191710.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt="img2"
        width="10%"
      />
      <div className={classes.reviews}>
        <h2>Review</h2>
        
      <p>Lorem ipsum carrots enhanced rebates. Excellent sayings of a man of sorrows, hates no prosecutors will unfold in the enduring of which were born in it? Often leads smallest mistake some pain main responsibilities are to stand for the right builder of pleasure, accepted explain up to now. , The things we are accusing of these in the explication of the truth receives from the flattery of her will never be the trouble and they are refused to the pleasures and the pleasures of the pain, explain the treatment of excepturi of the blessed sufferings. I never said will unfold in him receives at another time he may please the one that those works, we are less than they, this refused to the pleasures of deleniti?</p>
      </div>
    </div>
    </div>
  );
}

export default ProductDetails;
