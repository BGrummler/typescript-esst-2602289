interface IPerson {
  name:string;
}

class Person implements IPerson{
  constructor(public name:string){}
}

export function Demo() {
  const person = new Person();
}