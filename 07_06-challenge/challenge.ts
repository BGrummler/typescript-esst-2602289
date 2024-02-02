const ComplexFunction = () => {
  return () => {
    return [2, { courseName: "TypeScript" }];
  };
};

export function Challenge() {
  type ComplexFunctionType = typeof ComplexFunction;
  type InnerFunction = ReturnType<ComplexFunctionType>;
  type ReturnObject = ReturnType<InnerFunction>;
  type Objectindex = ReturnObject[1];
  type ReturnedObjectType = Objectindex;
  const result: ReturnedObjectType = {
      courseName: "TypeScript"
    };
}