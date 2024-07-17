import { queryMockServerData } from "../services";

export function* syncGenerator(p1, p2, p3) {
  const a = yield 100;
  const b = yield 400;
  const str = yield "hello";
  return a + b + str + p1 + p2 + p3;
}

export function* asyncGenerator() {
  const res = yield queryMockServerData();
  return res;
}
