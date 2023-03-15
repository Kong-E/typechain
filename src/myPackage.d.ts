// myPackage라는 자바스크립트 파일의 type을 정해주는 파일

interface Config {
  url: string;
}

declare module "myPackage" {
  function init(config: Config): boolean;
  function exit(code: number): number;
}
