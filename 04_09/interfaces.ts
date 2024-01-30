interface IBasePerson {
  name: string
}

interface IPerson extends IBasePerson{
  //private id: string;
  //protected banana: number;
  sayHello: () => void;
}

interface IAge {
  age: number;
}

class Person implements IPerson, IAge {
  constructor(public name: string, 
    private id: string, 
    public age: number) 
    {}
  sayHello() {
    console.log("Hello Jonny")
  }
}

export function Demo() {
  const person = new Person("Jonny, Jonny Cage", "A001", 1);
}