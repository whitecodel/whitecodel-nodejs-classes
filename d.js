console.log("start");

function longFunction() {
  setTimeout(() => {
    console.log("long function");
  }, 3000);
}

longFunction();

console.log("end");
