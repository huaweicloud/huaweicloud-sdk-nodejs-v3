

export class UpdateTrafficLimitConfig {
    public qps?: number;
    private 'per_source_ip_qps'?: number;
    public burst?: number;
    public constructor() { 
    }
    public withQps(qps: number): UpdateTrafficLimitConfig {
        this['qps'] = qps;
        return this;
    }
    public withPerSourceIpQps(perSourceIpQps: number): UpdateTrafficLimitConfig {
        this['per_source_ip_qps'] = perSourceIpQps;
        return this;
    }
    public set perSourceIpQps(perSourceIpQps: number  | undefined) {
        this['per_source_ip_qps'] = perSourceIpQps;
    }
    public get perSourceIpQps(): number | undefined {
        return this['per_source_ip_qps'];
    }
    public withBurst(burst: number): UpdateTrafficLimitConfig {
        this['burst'] = burst;
        return this;
    }
}