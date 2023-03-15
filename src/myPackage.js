export function init(config) {
  return true;
}
export function exit(code) {
  return code + 1;
}

// 누군가가 깃허브와 npm에 푸시해 둔 것이고, 우리가 이걸 설치했다고 가정
// node_module인 것처럼 가정
