

export class Substring {
    public start?: number;
    public length?: number;
    public constructor(start?: number, length?: number) { 
        this['start'] = start;
        this['length'] = length;
    }
    public withStart(start: number): Substring {
        this['start'] = start;
        return this;
    }
    public withLength(length: number): Substring {
        this['length'] = length;
        return this;
    }
}