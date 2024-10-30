import { useState } from "react";
import { Table, Button } from "antd";

import useProductStore from "../../stores/productStore";
import Form from "./components/form";

const index = () => {
  const listProduct = useProductStore((state) => state.listProduct);
  const [isOpen, setIsOpen] = useState(false);
  const [typeForm, setTypeForm] = useState("");
  const [idProduct, setIdProduct] = useState("");

  const columns = [
    {
      title: "Nama",
      dataIndex: "name",
    },
    {
      title: "Harga",
      dataIndex: "price",
    },
    {
      title: "Action",
      dataIndex: "id",
      render: (res) => (
        <Button
          onClick={() => {
            setTypeForm("edit");
            setIdProduct(res);
            setIsOpen(true);
          }}
        >
          Edit
        </Button>
      ),
    },
  ];

  return (
    <div>
      <Button
        className="mb-4"
        type="primary"
        onClick={() => {
          setTypeForm("add");
          setIsOpen(true);
        }}
      >
        Tambah
      </Button>
      <Table columns={columns} dataSource={listProduct} />
      <Form
        open={isOpen}
        typeForm={typeForm}
        idProduct={idProduct}
        onCancel={() => {
          setTypeForm("");
          setIsOpen(false);
          setIdProduct("");
        }}
      />
    </div>
  );
};
export default index;
