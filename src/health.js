export default function health(object) {
  return object.health > 50
    ? "healthy"
    : object.health >= 15
    ? "wounded"
    : object.health >= 0
    ? "critical"
    : "некорректное значение";
}
