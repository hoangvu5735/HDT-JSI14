/*
Kiến thức buổi 2:
- Array: filter, map
- Ôn tập về Javascript:
*/


////// Chữa BTVN

// Exercise 1
const ex1 = () => {
    const arr1 = [1, 2, 4, 5, 6];
    const arr2 = [1, 6, 8, 9, 0];
  
    return arr1.filter((v) => arr2.includes(v));
  };
  
  // Exercise 2
  const ex2 = () => {
    const arr = [1, 54, 6, 7];
    return arr.map(v => v += 5);
  };
  
  // Exercise 3
  const ex3 = () => {
    const m = [1, 2, 4, 5, 6, 7];
    const n = [3, 5, 675, 8, 96];
  
    return m.concat(n).filter((v) => ![1, 8, 10, 96, 7].includes(v));
    //  (Đây là mảng mới).filter()
  };
  
  // Exercise 4
  const ex4 = (whichSolution = 1) => {
    const players = [
      { id: 11, name: "Messi", age: 33 },
      { id: 12, name: "Ronaldo", age: 34 },
      { id: 13, name: "Young", age: 35 },
      { id: 14, name: "Mane", age: 21 },
      { id: 15, name: "Salah", age: 24 },
    ];
  
    const playersModified = {};
  
    // Solution 1 (Object.assign() method)
    const sol1 = () =>
      players.map((v) => {
        Object.assign(playersModified, {
          [v.id]: v,
        });
      });
  
    // Solution 2 (Array.reduce() method)
    const sol2 = () =>
      players.reduce((accum, val) => {
        return Object.assign(accum, {
          [val.id]: val,
        });
      }, {});
  
    if (whichSolution == 1) sol1();
    else return sol2();
  
    return playersModified;
  };
  
  
  //// VD chạy hàm bài 1:
  console.log(
    ex1()
  );
  
  
  
  
  /////// Giải thích về hàm includes
  // const array1 = [1, 2, 3];
  
  // console.log(array1.includes(2));
  // // expected output: true
  
  // const pets = ['cat', 'dog', 'bat'];
  
  // console.log(pets.includes('cat'));
  // // expected output: true
  
  // console.log(pets.includes('at'));
  // expected output: false
  
  
  // console.log(
  //   [1, 2, 3].includes(3, 2)
  // );// => ?