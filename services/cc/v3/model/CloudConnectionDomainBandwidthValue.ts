

export class CloudConnectionDomainBandwidthValue {
    public min?: number;
    public max?: number;
    public constructor() { 
    }
    public withMin(min: number): CloudConnectionDomainBandwidthValue {
        this['min'] = min;
        return this;
    }
    public withMax(max: number): CloudConnectionDomainBandwidthValue {
        this['max'] = max;
        return this;
    }
}