// let a = 0;
const setValues = (id) => {
  document.getElementById("input1").innerHTML = document.getElementById(
    id
  ).innerHTML;
  console.log(document.getElementById(id).innerHTML);
  // a = id;
};
// const setValues2 = (id) => {
//   document.getElementById("input2").innerHTML = document.getElementById(
//     id
//   ).innerHTML;
//   console.log(document.getElementById(id).innerHTML);
//   // try {
//   //          fetch("https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/mdl.json")
//   //            .then((response) => response.json())
//   //            .then(
//   //              (commits) =>
//   //                ( document.getElementById("advice2").innerHTML ="usd:" + (1/commits.mdl.usd)) )
//   //                fetch("https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/mdl.json")
//   //            .then((response) => response.json())
//   //            .then(
//   //              (commits) =>
//   //                ( document.getElementById("advice2").innerHTML ="usd:" + (1/commits.mdl.eur)) )
//   //        } catch (err) {
//   //          document.getElementById("advice2").innerHTML = "Some error ";
//   //        }
// };
