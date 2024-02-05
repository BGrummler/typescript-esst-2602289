export function Demo() {
  type Product<Details = Record<string, string | number>>  = {
    name: string;
    details: Details;
  };

  type FoodProducs = Product<{
    weight: number;
    origin: string;
  }>

  const f: FoodProducs = {
    name: 'Banana',
    details: {
      weight: 200,
      origin:"columbia"
    },
  };

  const p: Product = {
    name: "Babyphone",
    details: {
      id: "EFCDF1324",
      weight: 500,
    },
  };
}
