

export class TopIpSummary {
    public ip?: string;
    public value?: number;
    public ratio?: number;
    public constructor() { 
    }
    public withIp(ip: string): TopIpSummary {
        this['ip'] = ip;
        return this;
    }
    public withValue(value: number): TopIpSummary {
        this['value'] = value;
        return this;
    }
    public withRatio(ratio: number): TopIpSummary {
        this['ratio'] = ratio;
        return this;
    }
}