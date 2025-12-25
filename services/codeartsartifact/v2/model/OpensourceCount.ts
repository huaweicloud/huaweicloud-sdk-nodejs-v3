

export class OpensourceCount {
    public critical?: number;
    public high?: number;
    public medium?: number;
    public low?: number;
    public constructor() { 
    }
    public withCritical(critical: number): OpensourceCount {
        this['critical'] = critical;
        return this;
    }
    public withHigh(high: number): OpensourceCount {
        this['high'] = high;
        return this;
    }
    public withMedium(medium: number): OpensourceCount {
        this['medium'] = medium;
        return this;
    }
    public withLow(low: number): OpensourceCount {
        this['low'] = low;
        return this;
    }
}