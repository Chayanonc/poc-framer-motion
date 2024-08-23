export const floor = Array.from("1234567891234568")
  .fill("")
  .map((item, index) => {
    return {
      name: `${index + 1}th floor`,
      number: index + 1,
      image: `https://space.3dojmedia.com/escent-rayong2/plans/floors/${15}.png`,
    };
  });
