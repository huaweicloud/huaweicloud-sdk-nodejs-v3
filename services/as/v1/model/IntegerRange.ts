

export class IntegerRange {
    public max?: number;
    public min?: number;
    public desire?: number;
    public constructor() { 
    }
    public withMax(max: number): IntegerRange {
        this['max'] = max;
        return this;
    }
    public withMin(min: number): IntegerRange {
        this['min'] = min;
        return this;
    }
    public withDesire(desire: number): IntegerRange {
        this['desire'] = desire;
        return this;
    }
}