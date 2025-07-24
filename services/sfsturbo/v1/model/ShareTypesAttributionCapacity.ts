

export class ShareTypesAttributionCapacity {
    public max?: number;
    public min?: number;
    public step?: number;
    public constructor() { 
    }
    public withMax(max: number): ShareTypesAttributionCapacity {
        this['max'] = max;
        return this;
    }
    public withMin(min: number): ShareTypesAttributionCapacity {
        this['min'] = min;
        return this;
    }
    public withStep(step: number): ShareTypesAttributionCapacity {
        this['step'] = step;
        return this;
    }
}