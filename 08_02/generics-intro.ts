export function Demo() {
  /*
  const ages: Record<string, number> = {
    Agatha: 40,
    Peter: 33,
  };
  const ageNumbers: Array<number> = Object.values(ages);

  type Errors =
    | "BACKEND_ERR1"
    | "BACKEND_ERR2"
    | "FRONTEND_ERROR";
  type ServerErrors = Exclude<Errors, "FRONTEND_ERROR">;
  */

  type PossibleTypes = "CAR" | "BUS";
  //type VehicleID = `ID_${PossibleTypes}_${number}`;

  type VehicleTypeGeneric<VehicleType extends PossibleTypes> = `ID_${VehicleType}_${number}`
  type VehicleBusID = VehicleTypeGeneric<`BUS`>;
  type VehicleCarID = VehicleTypeGeneric<`CAR`>;

  const busId : VehicleBusID = "ID_BUS_5";
  const carId : VehicleCarID = "ID_CAR_01";

  console.log(busId, carId)

}
