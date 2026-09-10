

export class ResourceUsage {
    public value?: number;
    public total?: number;
    public contrast?: number;
    public unit?: string;
    public constructor() { 
    }
    public withValue(value: number): ResourceUsage {
        this['value'] = value;
        return this;
    }
    public withTotal(total: number): ResourceUsage {
        this['total'] = total;
        return this;
    }
    public withContrast(contrast: number): ResourceUsage {
        this['contrast'] = contrast;
        return this;
    }
    public withUnit(unit: string): ResourceUsage {
        this['unit'] = unit;
        return this;
    }
}