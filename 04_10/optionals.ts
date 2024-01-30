type Restaurant = {
  name: string;
  location: string;
  priceRange: "low" | "normal" | "high";
  comment?: string
};

export function Demo() {
  const thaiRestaurant: Restaurant = {
    name:"Thai Mo",
    location:"Pluto",
    priceRange:"normal",
    comment:"Soja",
  };

  const germanRestaurant: Partial<Restaurant> = {
    name:"die Fritte",
    priceRange:"low",
    //foo:"bar"
  };
}
