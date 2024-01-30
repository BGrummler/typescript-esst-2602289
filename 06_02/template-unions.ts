export function Demo() {
  type VehicleType = 'CAR' | 'TRUCK' | 'BUS'
  type VehicleID = `T_${VehicleType}_${number}`;
  let serialNumberCar: VehicleID = "T_CAR_599";
  let serialNumberTruck: VehicleID = "T_TRUCK_2399";
  let serialNumberBus: VehicleID  = "T_BUS_35";
}
