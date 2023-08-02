import health from "../health";

const mageList = [
  [60, { name: "Маг", health: 60 }, "healthy"],
  [50, { name: "Маг", health: 50 }, "wounded"],
  [10, { name: "Маг", health: 10 }, "critical"],
];
test.each(mageList)(
  "test health mage with %s health",
  (_, object, expected) => {
    const result = health(object);
    expect(result).toBe(expected);
  }
);
