import { add, multiply, type Point } from '@/models/Point';

export const generateLine = (
  startingPoint: Point,
  increment: Point,
  count: number,
  specialOffset?: Point,
  offsetIndexes?: number[],
): Point[] => {
  const isOffset = specialOffset !== undefined && offsetIndexes !== undefined;

  return [...Array(count)].map((_, index) => {
    const basePoint = add(startingPoint, multiply(increment, index));

    return isOffset && offsetIndexes.includes(index) ? add(basePoint, specialOffset) : basePoint;
  });
};

export const generateGrid = (
  startingPoint: Point,
  increment: Point,
  dimentions: number[],
): Point[] =>
  dimentions.flatMap((count, index) =>
    generateLine(
      add(startingPoint, multiply({ y: 0, x: increment.x }, index)),
      { x: 0, y: increment.y },
      count,
    ),
  );
