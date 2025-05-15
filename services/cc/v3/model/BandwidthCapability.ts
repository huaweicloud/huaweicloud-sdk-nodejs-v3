

export class BandwidthCapability {
    public min?: number;
    public max?: number;
    public constructor() { 
    }
    public withMin(min: number): BandwidthCapability {
        this['min'] = min;
        return this;
    }
    public withMax(max: number): BandwidthCapability {
        this['max'] = max;
        return this;
    }
}