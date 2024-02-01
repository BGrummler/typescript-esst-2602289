export function Demo() {
  const myObject = { price: 300 };
  const typeOfTest = typeof myObject;

  type MyObjectType = typeof myObject;

  console.log(typeOfTest);

  let myString = 'Hello';
  type MyStringType = typeof myString;

  const myString2 = 'Hello';
  type MyStringType2 = typeof myString2;
}

Demo();
