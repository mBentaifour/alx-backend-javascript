const createInt8TypedArray = (length, position, value) => {
  const buffer = new ArrayBuffer(length);
  const dv = new DataView(buffer);

  if (position >= length) throw new Error('Position outside range');
  dv.setInt8(position, value);

  return dv;
};

export default createInt8TypedArray;
