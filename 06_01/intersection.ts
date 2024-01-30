interface Person {
  name: string;
}

type Age = {
  age: number;
};

export function Demo() {
  const foobar: number | string = "hallo";
  let unionObject: Age | Person = {
    age:123,
    name:"Peter",
  }
  let intersectionObject: Age & Person = {
    age: 123,
    name:"Bolle"
  }

  console.log(intersectionObject.name);
  console.log(intersectionObject.age);

  if ('age' in unionObject) {
    console.log(unionObject.age);
  }

  if ('name' in unionObject) {
    console.log(unionObject.name);
  }

}
