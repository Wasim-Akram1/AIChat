export const calculateExpression = (expression) => {
  try {
    const result = Function(`'use strict'; return (${expression})`)();
    return `🧮 Result: ${result}`;
  } catch {
    return "❌ Invalid expression!";
  }
};
