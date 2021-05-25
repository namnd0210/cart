import React, { useEffect, useState } from "react";
// @material-ui/core admin/components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
// core admin/components
import GridItem from "admin/components/Grid/GridItem.js";
import GridContainer from "admin/components/Grid/GridContainer.js";
import CustomInput from "admin/components/CustomInput/CustomInput.js";
import Button from "admin/components/CustomButtons/Button.js";
import Card from "admin/components/Card/Card.js";
import CardHeader from "admin/components/Card/CardHeader.js";
import CardAvatar from "admin/components/Card/CardAvatar.js";
import CardBody from "admin/components/Card/CardBody.js";
import CardFooter from "admin/components/Card/CardFooter.js";

import avatar from "admin/assets/img/faces/marc.jpg";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteProduct,
  getProduct,
  updateProduct,
} from "redux/product/product.action";
import Swiper from "admin/components/Swiper/Swiper";
import { Input } from "reactstrap";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0",
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
  },
};

const useStyles = makeStyles(styles);

export default function Product() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const classes = useStyles();

  const [images, setImages] = useState("");
  const [authors, setAuthors] = useState("");
  const [name, setName] = useState("");
  const [inStock, setInStock] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  // const [categoryCode, setCategoryCode] = useState("");
  // const [numberOfPages, setNumberOfPages] = useState("");
  // const [publisher, setPublisher] = useState("");
  // const [subcategoryCode, setSubcategoryCode] = useState("");

  const { currentProduct } = useSelector(
    ({ products: currentProduct }) => currentProduct
  );

  const handleDeleteProduct = () => {
    dispatch(deleteProduct(currentProduct.id));
  };

  useEffect(() => {
    dispatch(getProduct(id));
  }, [id]);

  useEffect(() => {
    setAuthors(currentProduct.authors);
    setName(currentProduct.name);
    setInStock(currentProduct.inStock);
    setPrice(currentProduct.price);
    setDescription(currentProduct.description);
  }, [currentProduct]);

  const handleSubmit = () => {
    const values = {
      ...currentProduct,
      authors: Array.isArray(authors) ? authors : [authors],
      name,
      inStock,
      price,
      description,
    };
    dispatch(updateProduct(values));

    console.log(values);
  };

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Edit Profile</h4>
              <p className={classes.cardCategoryWhite}>Complete your profile</p>
            </CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Authors"
                    id="authors"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      value: authors,
                      onChange: (e) => setAuthors(e.target.value),
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Name product"
                    id="name"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      value: name,
                      onChange: (e) => setName(e.target.value),
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Amount"
                    id="amount"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      value: inStock,
                      onChange: (e) => setInStock(e.target.value),
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Price"
                    id="price"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      value: price,
                      onChange: (e) => setPrice(e.target.value),
                    }}
                  />
                </GridItem>
              </GridContainer>

              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <CustomInput
                    labelText="Description"
                    id="description"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      multiline: true,
                      rows: 5,
                      value: description,
                      onChange: (e) => setDescription(e.target.value),
                    }}
                  />
                </GridItem>
              </GridContainer>
            </CardBody>
            <CardFooter>
              <Button onClick={handleSubmit} color="primary">
                Update Product
              </Button>
            </CardFooter>
          </Card>
        </GridItem>

        <GridItem xs={12} sm={12} md={4}>
          {/* <Swiper /> */}
          <GridContainer>
            {currentProduct?.images?.length > 0 &&
              currentProduct?.images?.map((img) => (
                <GridItem xs={12} sm={12} md={4}>
                  <img
                    style={{
                      objectFit: "inherit",
                      width: "120px",
                      height: "120px",
                    }}
                    src={img}
                  />
                </GridItem>
              ))}

            <Input type="file" multiple />
          </GridContainer>
        </GridItem>
        <Button color="danger" onClick={handleDeleteProduct}>
          Delete
        </Button>
      </GridContainer>
    </div>
  );
}
