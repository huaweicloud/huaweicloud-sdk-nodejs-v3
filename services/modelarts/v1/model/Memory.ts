

export class Memory {
    public size?: number;
    public unit?: string;
    public constructor() { 
    }
    public withSize(size: number): Memory {
        this['size'] = size;
        return this;
    }
    public withUnit(unit: string): Memory {
        this['unit'] = unit;
        return this;
    }
}