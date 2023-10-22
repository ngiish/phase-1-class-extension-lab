// // Your code here
// class Polygon{
//     constructor(count, perimeter){
//         this.count = count;
//         this.perimeter = perimeter;
//     }
//     get countSides(){
//         return this.count
//     }

// }

// class Triangle extends Polygon{

// }

// class Square extends Polygon{

// }
class Polygon {
    constructor(sides) {
      this.sides = sides;
    }
  
    get countSides() {
      return this.sides.length;
    }
  
    get perimeter() {
      return this.sides.reduce((acc, side) => acc + side, 0);
    }
  }
  
  class Triangle extends Polygon {
    get isValid() {
      if (this.countSides === 3) {
        const [side1, side2, side3] = this.sides;
        return side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1;
      }
      return false;
    }
  }
  class Square extends Polygon {
    get isValid() {
      const [side1, side2, side3, side4] = this.sides;
      return side1 === side2 && side2 === side3 && side3 === side4;
    }
  
    get area() {
      const side = this.sides[0];
      return side * side;
    }
  }
  
//   // Example usage:
//   const triangle = new Triangle([3, 4, 5]);
//   console.log(triangle.countSides); // Output: 3
//   console.log(triangle.perimeter); // Output: 12
//   console.log(triangle.isValid); // Output: true
  