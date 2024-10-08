export const weakMap = new WeakMap();
let cnt = 1;

export function queryAPI(endPoint) {
  weakMap.set(endPoint, cnt);
  cnt += 1;
  const queryCount = weakMap.get(endPoint);
  if (queryCount >= 5) {
    throw new Error('Endpoint load is high');
  }
}
