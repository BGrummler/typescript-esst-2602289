export function Challenge() {
  type MyType = string | false | (Array<string|number>);
  let foo: MyType = "Hello!";
  foo = false;
  foo = ["test", 100];
}
 