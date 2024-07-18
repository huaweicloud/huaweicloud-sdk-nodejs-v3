

export class CreateTrafficLimitConfig {
    public qps?: number;
    private 'per_source_ip_qps'?: number;
    public burst?: number;
    public constructor() { 
    }
    public withQps(qps: number): CreateTrafficLimitConfig {
        this['qps'] = qps;
        return this;
    }
    public withPerSourceIpQps(perSourceIpQps: number): CreateTrafficLimitConfig {
        this['per_source_ip_qps'] = perSourceIpQps;
        return this;
    }
    public set perSourceIpQps(perSourceIpQps: number  | undefined) {
        this['per_source_ip_qps'] = perSourceIpQps;
    }
    public get perSourceIpQps(): number | undefined {
        return this['per_source_ip_qps'];
    }
    public withBurst(burst: number): CreateTrafficLimitConfig {
        this['burst'] = burst;
        return this;
    }
}