

export class PeakBandwidthData {
    public value?: number;
    public domain?: string;
    public constructor() { 
    }
    public withValue(value: number): PeakBandwidthData {
        this['value'] = value;
        return this;
    }
    public withDomain(domain: string): PeakBandwidthData {
        this['domain'] = domain;
        return this;
    }
}