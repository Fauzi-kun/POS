import { useEffect, useState } from "react";
import { Modal, Input } from "antd";
import { v4 } from "uuid";

import useProductStore from "../../../../stores/productStore";

const initForm = {
  name: "",
  price: "",
};
const index = ({ typeForm, idProduct, ...props }) => {
  const { setListProduct, listProduct, setUpdateListProduct } =
    useProductStore();
  const [form, setForm] = useState(initForm);
  const isAdd = typeForm === "add";

  useEffect(() => {
    if (props.open && !isAdd) {
      const getIndex = listProduct.findIndex((e) => e.id === idProduct);

      console.log(listProduct[getIndex]);
      setForm({
        name: listProduct[getIndex].name,
        price: listProduct[getIndex].price,
      });
    }
  }, [props.open]);

  const setFormBody = (key, value) => {
    setForm({
      ...form,
      [key]: value,
    });
  };
  return (
    <Modal
      title={`${isAdd ? "Tambah" : "Edit"} Produk`}
      {...props}
      onCancel={() => {
        setForm(initForm);
        props.onCancel();
      }}
      onOk={() => {
        console.log({ id: v4(), ...form });
        if (isAdd) {
          setListProduct({ id: v4(), ...form });
        } else {
          setUpdateListProduct({
            id: idProduct,
            ...form,
          });
          console.log("edit");
        }
        console.log(form);
        props.onCancel();

        setForm(initForm);
      }}
    >
      <Input
        className="mb-4"
        placeholder="Nama"
        value={form.name}
        onChange={(e) => setFormBody("name", e.target.value)}
      />
      <Input
        type="Number"
        placeholder="Harga"
        value={form.price}
        onChange={(e) => setFormBody("price", Number(e.target.value))}
      />
    </Modal>
  );
};
export default index;
