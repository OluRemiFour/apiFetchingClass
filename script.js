const div = document.querySelector("div");
const span = document.querySelector("span");

let display;
// async function apiFetch() {
//   try {
//     const result = fetch("https://jsonplaceholder.typicode.com/photos")
//       .then((response) => response.json())
//       .then((data) =>
//         data.forEach((users, i) => {
//           console.log(users.url);

//           const textNode = document.createTextNode(users.url);
//           //   const textNodeII = document.createTextNode(i);
//           div.appendChild(textNode);
//           //   span.appendChild(textNodeII);
//         })
//       );
//   } catch (error) {
//     console.log(error.message);
//     console.log("error occured while fetching");
//   }
// }

async function apiResult() {
  const res = await fetch("https://jsonplaceholder.typicode.com/comments");
  const data = await res.json();

  console.log(data);
}

apiResult();
