

export class ShareTypesAttributionBandwidth {
    public max?: number;
    public min?: number;
    public step?: number;
    public density?: number;
    public base?: number;
    public constructor() { 
    }
    public withMax(max: number): ShareTypesAttributionBandwidth {
        this['max'] = max;
        return this;
    }
    public withMin(min: number): ShareTypesAttributionBandwidth {
        this['min'] = min;
        return this;
    }
    public withStep(step: number): ShareTypesAttributionBandwidth {
        this['step'] = step;
        return this;
    }
    public withDensity(density: number): ShareTypesAttributionBandwidth {
        this['density'] = density;
        return this;
    }
    public withBase(base: number): ShareTypesAttributionBandwidth {
        this['base'] = base;
        return this;
    }
}