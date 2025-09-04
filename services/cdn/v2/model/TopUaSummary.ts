

export class TopUaSummary {
    public ua?: string;
    public value?: number;
    public ratio?: number;
    public constructor() { 
    }
    public withUa(ua: string): TopUaSummary {
        this['ua'] = ua;
        return this;
    }
    public withValue(value: number): TopUaSummary {
        this['value'] = value;
        return this;
    }
    public withRatio(ratio: number): TopUaSummary {
        this['ratio'] = ratio;
        return this;
    }
}