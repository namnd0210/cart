import React, { useEffect } from "react";
// @material-ui/core admin/components
import { makeStyles } from "@material-ui/core/styles";
// core admin/components
import GridItem from "admin/components/Grid/GridItem.js";
import GridContainer from "admin/components/Grid/GridContainer.js";
import Table from "admin/components/Table/Table.js";
import Card from "admin/components/Card/Card.js";
import CardHeader from "admin/components/Card/CardHeader.js";
import CardBody from "admin/components/Card/CardBody.js";
import Button from "admin/components/CustomButtons/Button.js";
import Modal from "admin/components/Modal/Modal.js";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "redux/product/product.action";
import { Link } from "react-router-dom";

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0",
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF",
    },
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1",
    },
  },
  imageView: {
    width: "100px",
    height: "100px",
    objectFit: "contain",
  },
};

const useStyles = makeStyles(styles);

export default function TableList() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [currentProduct, setCurrentProduct] = React.useState(false);

  const { data: products } = useSelector(({ products: { data } }) => data);

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  return (
    <GridContainer>
      {open && (
        <Modal currentProduct={currentProduct} toggle={() => setOpen(false)} />
      )}

      {products?.length > 0 && (
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader
              color="primary"
              className="d-flex justify-content-between"
            >
              <div>
                <h4 className={classes.cardTitleWhite}>Products</h4>
                <p className={classes.cardCategoryWhite}>
                  Here is table of Products
                </p>
              </div>
              <Button onClick={() => setOpen(true)} color="white">
                Add
              </Button>
            </CardHeader>
            <CardBody>
              <Table
                tableHeaderColor="primary"
                tableHead={[
                  "",
                  "Product Name",
                  "Author",
                  "Price",
                  "Amount",
                  "",
                ]}
                tableData={products.map((item) => [
                  <img className={classes.imageView} src={item.images[0]} />,
                  item.name,
                  item.authors[0],
                  `$${item.price}`,
                  item.inStock,
                  <Link to={`/admin/item/${item.id}`}>
                    <Button
                      onClick={() => {
                        setCurrentProduct(
                          products.find((e) => e.id === item.id)
                        );
                      }}
                    >
                      Detail
                    </Button>
                  </Link>,
                ])}
              />
            </CardBody>
          </Card>
        </GridItem>
      )}

      <GridItem xs={12} sm={12} md={12}>
        <Card plain>
          <CardHeader plain color="primary">
            <h4 className={classes.cardTitleWhite}>
              Table on Plain Background
            </h4>
            <p className={classes.cardCategoryWhite}>
              Here is a subtitle for this table
            </p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["ID", "Name", "Country", "City", "Salary"]}
              tableData={[
                ["1", "Dakota Rice", "$36,738", "Niger", "Oud-Turnhout"],
                ["2", "Minerva Hooper", "$23,789", "Curaçao", "Sinaai-Waas"],
                ["3", "Sage Rodriguez", "$56,142", "Netherlands", "Baileux"],
                [
                  "4",
                  "Philip Chaney",
                  "$38,735",
                  "Korea, South",
                  "Overland Park",
                ],
                [
                  "5",
                  "Doris Greene",
                  "$63,542",
                  "Malawi",
                  "Feldkirchen in Kärnten",
                ],
                ["6", "Mason Porter", "$78,615", "Chile", "Gloucester"],
              ]}
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
