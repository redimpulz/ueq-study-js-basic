// ループ・配列・データ型の問題
export const func1 = (n) => {
  return Array.from({ length: n }, (_, index) => index + 1);
};

// 条件分岐・データ型の問題
export const func2 = (n) => {
    if (Number.isInteger(n) && n > 0) {
      if (n % 3 === 0 && n % 5 === 0) {
        return "FizzBuzz";
      } else if (n % 3 === 0) {
        return "Fizz";
      } else if (n % 5 === 0) {
        return "Buzz";
      } else {
        return n.toString();
      }
    } else {
      return "error";
    }
  };

const main = () => {
  // func1の実行例
  const result1 = func1(5);
  console.log(result1);
  // func2の実行例
  const result2 = func2(15);
  console.log(result2);
};

main();
