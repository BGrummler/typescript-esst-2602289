const myFunction = <Param extends {name: string}>(objectWithName: Param): Param => {
  return {
    ...objectWithName,
  };
};


export function Challenge() {
  const object = myFunction({
    name: "Martha",
    lastname: "Collins",
    age: 33,
  });

  const falsyObject = myFunction({
    noName: "Nope",
  });
}
