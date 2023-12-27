

export class Location {
    public x?: string;
    public y?: string;
    public constructor(x?: string, y?: string) { 
        this['x'] = x;
        this['y'] = y;
    }
    public withX(x: string): Location {
        this['x'] = x;
        return this;
    }
    public withY(y: string): Location {
        this['y'] = y;
        return this;
    }
}