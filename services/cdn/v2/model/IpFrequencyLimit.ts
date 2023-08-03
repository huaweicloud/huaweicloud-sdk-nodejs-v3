

export class IpFrequencyLimit {
    public status?: string;
    public qps?: number;
    public constructor(status?: string) { 
        this['status'] = status;
    }
    public withStatus(status: string): IpFrequencyLimit {
        this['status'] = status;
        return this;
    }
    public withQps(qps: number): IpFrequencyLimit {
        this['qps'] = qps;
        return this;
    }
}