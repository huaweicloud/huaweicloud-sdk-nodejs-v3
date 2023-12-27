

export class BlackWhiteIpListRequest {
    private 'instance_id'?: string;
    public type?: string;
    public ips?: Array<string>;
    public constructor(instanceId?: string, type?: string, ips?: Array<string>) { 
        this['instance_id'] = instanceId;
        this['type'] = type;
        this['ips'] = ips;
    }
    public withInstanceId(instanceId: string): BlackWhiteIpListRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withType(type: string): BlackWhiteIpListRequest {
        this['type'] = type;
        return this;
    }
    public withIps(ips: Array<string>): BlackWhiteIpListRequest {
        this['ips'] = ips;
        return this;
    }
}