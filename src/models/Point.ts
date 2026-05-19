export interface Point {
  x: number;
  y: number;
}

export const add = (a: Point, b: Point): Point => ({
  x: a.x + b.x,
  y: a.y + b.y,
});

export const multiply = (a: Point, c: number): Point => ({
  x: a.x * c,
  y: a.y * c,
});
