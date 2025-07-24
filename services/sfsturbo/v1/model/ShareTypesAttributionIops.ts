

export class ShareTypesAttributionIops {
    public max?: number;
    public min?: number;
    public constructor() { 
    }
    public withMax(max: number): ShareTypesAttributionIops {
        this['max'] = max;
        return this;
    }
    public withMin(min: number): ShareTypesAttributionIops {
        this['min'] = min;
        return this;
    }
}