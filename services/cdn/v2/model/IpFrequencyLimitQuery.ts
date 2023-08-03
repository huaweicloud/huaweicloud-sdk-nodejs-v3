

export class IpFrequencyLimitQuery {
    public status?: string;
    public qps?: number;
    public constructor(status?: string) { 
        this['status'] = status;
    }
    public withStatus(status: string): IpFrequencyLimitQuery {
        this['status'] = status;
        return this;
    }
    public withQps(qps: number): IpFrequencyLimitQuery {
        this['qps'] = qps;
        return this;
    }
}