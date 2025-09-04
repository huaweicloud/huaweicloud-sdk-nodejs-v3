

export class PointValidityingDTO {
    public min?: number;
    public max?: number;
    public constructor(min?: number, max?: number) { 
        this['min'] = min;
        this['max'] = max;
    }
    public withMin(min: number): PointValidityingDTO {
        this['min'] = min;
        return this;
    }
    public withMax(max: number): PointValidityingDTO {
        this['max'] = max;
        return this;
    }
}