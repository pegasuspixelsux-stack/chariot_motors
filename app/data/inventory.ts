export type InventoryItem = {
  id: string;
  tag: string;
  name: string;
  year: number;
  hp: number;
  turbo: string;
  drivetrain: "AWD" | "RWD" | "FWD";
  price: number;
  seed: string;
};

export const inventory: InventoryItem[] = [
  { id: "v1", tag: "Sedan", name: "Meridian 340i", year: 2026, hp: 382, turbo: "Twin-Turbo I6", drivetrain: "RWD", price: 68450, seed: "chariot-meridian-340i" },
  { id: "v2", tag: "Coupe", name: "Apex GT", year: 2026, hp: 453, turbo: "Twin-Turbo V6", drivetrain: "AWD", price: 84900, seed: "chariot-apex-gt" },
  { id: "v3", tag: "Performance Sedan", name: "Vantage M8", year: 2025, hp: 617, turbo: "TwinForce Turbo V8", drivetrain: "AWD", price: 138200, seed: "chariot-vantage-m8" },
  { id: "v4", tag: "Convertible", name: "Solstice 430i", year: 2026, hp: 368, turbo: "Turbo I4", drivetrain: "RWD", price: 71300, seed: "chariot-solstice-430i" },
  { id: "v5", tag: "SUV", name: "Wraith X5", year: 2025, hp: 395, turbo: "Twin-Turbo I6", drivetrain: "AWD", price: 79650, seed: "chariot-wraith-x5" },
  { id: "v6", tag: "Sedan", name: "Meridian Hybrid", year: 2026, hp: 402, turbo: "Turbo I4 + eMotor", drivetrain: "AWD", price: 74100, seed: "chariot-meridian-hybrid" },
  { id: "v7", tag: "Coupe", name: "Apex GT Vantage", year: 2025, hp: 591, turbo: "TwinForce Turbo V8", drivetrain: "RWD", price: 121750, seed: "chariot-apex-gt-vantage" },
  { id: "v8", tag: "Electric Sedan", name: "Aurora i7", year: 2026, hp: 536, turbo: "Dual eMotor", drivetrain: "AWD", price: 96400, seed: "chariot-aurora-i7" },
  { id: "v9", tag: "Full-Size SUV", name: "Wraith X7", year: 2026, hp: 483, turbo: "Twin-Turbo V8", drivetrain: "AWD", price: 108900, seed: "chariot-wraith-x7" },
  { id: "v10", tag: "Convertible", name: "Solstice Vantage", year: 2025, hp: 548, turbo: "TwinForce Turbo V8", drivetrain: "RWD", price: 132600, seed: "chariot-solstice-vantage" },
  { id: "v11", tag: "Wagon", name: "Meridian Touring", year: 2026, hp: 382, turbo: "Twin-Turbo I6", drivetrain: "AWD", price: 72850, seed: "chariot-meridian-touring" },
  { id: "v12", tag: "Roadster", name: "Apex Roadster", year: 2025, hp: 429, turbo: "Twin-Turbo V6", drivetrain: "RWD", price: 88300, seed: "chariot-apex-roadster" },
];
