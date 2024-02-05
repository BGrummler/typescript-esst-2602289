const ComplexFunction = () => {
  return () => {
    return [2, { courseName: "TypeScript" }];
  };
};

export function Challenge() {
  type ComplexFunctionType = typeof ComplexFunction;
  type InnerFunction = ReturnType<ComplexFunctionType>;
  type ReturnObject = ReturnType<InnerFunction>;
  type Objectindex = ReturnObject[number];
  type ReturnedObjectType = Exclude<Objectindex, number>;
  const result: ReturnedObjectType = {
      courseName: "TypeScript"
    };
}