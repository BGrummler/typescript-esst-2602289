export function Demo() {
  type VoidingFunction = () => void;
  type NumberFunction = (a:string, b:number) => number;
  const myFunction: VoidingFunction = () => {
    console.log("myFunction called!");
  };

  const MyNumberFunction : NumberFunction = (a, b) => {
    return b;
  };

  const otherFunc = (zahl: number): string => {
    return 'string';
  }
  myFunction();
  console.log(MyNumberFunction("Banana", 43770))
}
