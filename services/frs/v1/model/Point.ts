

export class Point {
    public x: number;
    public y: number;
    public constructor(x?: any, y?: any) { 
        this['x'] = x;
        this['y'] = y;
    }
    public withX(x: number): Point {
        this['x'] = x;
        return this;
    }
    public withY(y: number): Point {
        this['y'] = y;
        return this;
    }
}