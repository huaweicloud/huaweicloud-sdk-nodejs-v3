

export class TrafficSummaryData {
    public value?: number;
    public domain?: string;
    public constructor() { 
    }
    public withValue(value: number): TrafficSummaryData {
        this['value'] = value;
        return this;
    }
    public withDomain(domain: string): TrafficSummaryData {
        this['domain'] = domain;
        return this;
    }
}