// utility types
type Product = {
  id: number;
  name: string;
  price: string;
  stock: number;
  color?: string;
};
// ম্যানুয়ালী আনার উপায়
// type ProductSummary = {
//   id: number;
//   name: string;
//   price: string;
// };
//১. dynamic ভাবে ***Pick****
type ProductSummary = Pick<Product, "id" | "name" | "price">;
//২. dynamic Omit ***Pick****
type ProductWithoutStock = Omit<Product, "stock" | "color">;
//3. utility type Required
type ProductRequired = Required<Product>;
const product1: ProductRequired = {
  id: 123,
  name: "Mouse",
  price: "500",
  stock: 100,
  color: "red",
};
///4. optional product ****Partial***
type OptionalProduct = Partial<Product>;
//5. read only type
type ProductReadOnly = Readonly<Product>;
// empty object normally
// const emptyObj: Object = {};

// best way to ডিকলার এমপটি অবজেক্ট
const emptyObjBestWay: Record<string, unknown> = {};
