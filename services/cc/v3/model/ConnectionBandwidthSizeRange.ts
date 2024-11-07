

export class ConnectionBandwidthSizeRange {
    public min?: number;
    public max?: number;
    public constructor(min?: number, max?: number) { 
        this['min'] = min;
        this['max'] = max;
    }
    public withMin(min: number): ConnectionBandwidthSizeRange {
        this['min'] = min;
        return this;
    }
    public withMax(max: number): ConnectionBandwidthSizeRange {
        this['max'] = max;
        return this;
    }
}