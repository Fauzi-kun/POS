import { create } from "zustand";

const useProductStore = create((set) => ({
  listProduct: [],
  setListProduct: (data) =>
    set((state) => ({
      listProduct: [data, ...state.listProduct],
    })),
  setUpdateListProduct: (data) =>
    set((state) => {
      const getIndex = state.listProduct.findIndex((e) => e.id === data.id);
      const result = [...state.listProduct];
      result[getIndex] = data;
      return {
        listProduct: result,
      };
    }),
}));

export default useProductStore;
