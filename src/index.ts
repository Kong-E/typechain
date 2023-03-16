import { init, exit } from "./myPackage";

console.log(
  init({
    debug: true,
    url: "https://www.naver.com",
  })
);
