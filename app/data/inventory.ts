// TODO: replace with live inventory feed — this is believable placeholder
// data for the demo/pitch deck, not the dealer's actual stock.
export type InventoryItem = {
  id: string;
  tag: string; // body style, shown as the card's eyebrow badge
  make: string;
  model: string;
  trim?: string;
  year: number;
  km: number;
  doors: number;
  price: number;
  seed: string;
};

export const inventory: InventoryItem[] = [
  { id: "v1", tag: "Sedan", make: "Honda", model: "Accord", trim: "Sport", year: 2021, km: 61470, doors: 4, price: 22450, seed: "lot-honda-accord-sport-2021" },
  { id: "v2", tag: "SUV", make: "Toyota", model: "RAV4", trim: "XLE", year: 2022, km: 48050, doors: 4, price: 27900, seed: "lot-toyota-rav4-xle-2022" },
  { id: "v3", tag: "Truck", make: "Ford", model: "F-150", trim: "XLT", year: 2020, km: 82560, doors: 4, price: 31200, seed: "lot-ford-f150-xlt-2020" },
  { id: "v4", tag: "Sedan", make: "Toyota", model: "Camry", trim: "LE", year: 2020, km: 71780, doors: 4, price: 19850, seed: "lot-toyota-camry-le-2020" },
  { id: "v5", tag: "SUV", make: "Honda", model: "CR-V", trim: "EX-L", year: 2021, km: 53270, doors: 4, price: 26700, seed: "lot-honda-crv-exl-2021" },
  { id: "v6", tag: "Coupe", make: "BMW", model: "430i", year: 2019, km: 77100, doors: 2, price: 24300, seed: "lot-bmw-430i-2019" },
  { id: "v7", tag: "Hatchback", make: "Mazda", model: "Mazda3", trim: "Preferred", year: 2022, km: 34440, doors: 4, price: 20950, seed: "lot-mazda3-preferred-2022" },
  { id: "v8", tag: "SUV", make: "Jeep", model: "Grand Cherokee", trim: "Limited", year: 2019, km: 94480, doors: 4, price: 22100, seed: "lot-jeep-grand-cherokee-limited-2019" },
  { id: "v9", tag: "Sedan", make: "Hyundai", model: "Elantra", trim: "SEL", year: 2023, km: 22850, doors: 4, price: 19400, seed: "lot-hyundai-elantra-sel-2023" },
  { id: "v10", tag: "Minivan", make: "Chrysler", model: "Pacifica", trim: "Touring L", year: 2021, km: 59300, doors: 4, price: 25600, seed: "lot-chrysler-pacifica-touring-l-2021" },
  { id: "v11", tag: "Truck", make: "Chevrolet", model: "Silverado 1500", trim: "LT", year: 2018, km: 110080, doors: 4, price: 24900, seed: "lot-chevrolet-silverado-1500-lt-2018" },
  { id: "v12", tag: "Wagon", make: "Subaru", model: "Outback", trim: "Premium", year: 2020, km: 66470, doors: 4, price: 23650, seed: "lot-subaru-outback-premium-2020" },
];
