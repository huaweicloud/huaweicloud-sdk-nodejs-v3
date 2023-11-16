

export class InstanceIpInfo {
    private 'ip_id'?: string;
    public ip?: string;
    private 'basic_bandwidth'?: number;
    private 'elastic_bandwidth'?: number;
    private 'ip_status'?: number;
    public constructor() { 
    }
    public withIpId(ipId: string): InstanceIpInfo {
        this['ip_id'] = ipId;
        return this;
    }
    public set ipId(ipId: string  | undefined) {
        this['ip_id'] = ipId;
    }
    public get ipId(): string | undefined {
        return this['ip_id'];
    }
    public withIp(ip: string): InstanceIpInfo {
        this['ip'] = ip;
        return this;
    }
    public withBasicBandwidth(basicBandwidth: number): InstanceIpInfo {
        this['basic_bandwidth'] = basicBandwidth;
        return this;
    }
    public set basicBandwidth(basicBandwidth: number  | undefined) {
        this['basic_bandwidth'] = basicBandwidth;
    }
    public get basicBandwidth(): number | undefined {
        return this['basic_bandwidth'];
    }
    public withElasticBandwidth(elasticBandwidth: number): InstanceIpInfo {
        this['elastic_bandwidth'] = elasticBandwidth;
        return this;
    }
    public set elasticBandwidth(elasticBandwidth: number  | undefined) {
        this['elastic_bandwidth'] = elasticBandwidth;
    }
    public get elasticBandwidth(): number | undefined {
        return this['elastic_bandwidth'];
    }
    public withIpStatus(ipStatus: number): InstanceIpInfo {
        this['ip_status'] = ipStatus;
        return this;
    }
    public set ipStatus(ipStatus: number  | undefined) {
        this['ip_status'] = ipStatus;
    }
    public get ipStatus(): number | undefined {
        return this['ip_status'];
    }
}