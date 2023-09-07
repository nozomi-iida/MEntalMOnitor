export const point2emoji = (point: number) => {
  switch (point) {
    case 100:
      return "😆";
    case 75:
      return "😁";
    case 50:
      return "😐";
    case 25:
      return "🥲";
    case 0:
      return "😭";
    default:
      return "";
  }
};
