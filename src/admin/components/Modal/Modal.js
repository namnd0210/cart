import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { useDispatch } from "react-redux";
import { deleteProduct } from "redux/product/product.action";

export default function CustomModal({ toggle, currentProduct }) {
  const [authors, setAuthors] = useState("");
  const [categoryCode, setCategoryCode] = useState("");
  const [description, setDescription] = useState("");
  const [inStock, setInStock] = useState("");
  const [name, setName] = useState("");
  const [numberOfPages, setNumberOfPages] = useState("");
  const [price, setPrice] = useState("");
  const [publisher, setPublisher] = useState("");
  const [subcategoryCode, setSubcategoryCode] = useState("");
  const [images, setImages] = useState("");

  const dispatch = useDispatch();
  const handleDeleteProduct = () => {
    dispatch(deleteProduct(currentProduct.id));
    toggle();
  };

  const handleSubmit = () => {
    const values = {
      authors,
      categoryCode,
      description,
      images,
      inStock,
      name,
      numberOfPages,
      price,
      publisher,
      subcategoryCode,
    };

    console.log(values);
  };

  console.log(currentProduct);

  return (
    <div>
      <Modal isOpen toggle={toggle}>
        <ModalHeader toggle={toggle}>Product detail</ModalHeader>
        <ModalBody>
          <form id="form" onSubmit={handleSubmit}>
            <div className="row">
              <div className="form-field col-6">
                <input
                  required
                  className="form-control"
                  type="text"
                  name="authors"
                  placeholder="Authors"
                  values={authors}
                  onChange={(e) => setAuthors(e.target.value)}
                />
              </div>
              <div className="form-field col-6">
                <input
                  required
                  className="form-control"
                  name="categoryCode"
                  placeholder="CategoryCode.."
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="row">
              <div className="form-field col-6">
                <input
                  required
                  className="form-control"
                  type="text"
                  name="name"
                  placeholder="Name.."
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-field col-6">
                <input
                  required
                  className="form-control"
                  type="email"
                  name="email"
                  placeholder="Email.."
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="row">
              <div className="form-field col-6">
                <input
                  required
                  className="form-control"
                  type="text"
                  name="name"
                  placeholder="Name.."
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-field col-6">
                <input
                  required
                  className="form-control"
                  type="email"
                  name="email"
                  placeholder="Email.."
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="row">
              <div className="form-field col-6">
                <input
                  required
                  className="form-control"
                  type="text"
                  name="name"
                  placeholder="Name.."
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-field col-6">
                <input
                  required
                  className="form-control"
                  type="email"
                  name="email"
                  placeholder="Email.."
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="row">
              <div className="form-field col-6">
                <input
                  required
                  className="form-control"
                  type="text"
                  name="name"
                  placeholder="Name.."
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-field col-6">
                <input
                  required
                  className="form-control"
                  type="email"
                  name="email"
                  placeholder="Email.."
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Do Something
          </Button>{" "}
          <Button color="danger" onClick={handleDeleteProduct}>
            Delete
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
