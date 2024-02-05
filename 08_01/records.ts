export function Demo() {
  type Product = {
    productName: string;
    price: number;
    details: Record<string, string | number>;
  };
  
  const p: Product = {
    productName: 'Schaukel',
    price: 122,
    details: {
      color: 'blue',
      high: 100
    }
  }
}
  