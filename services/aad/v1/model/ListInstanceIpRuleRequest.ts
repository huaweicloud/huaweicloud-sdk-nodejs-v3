

export class ListInstanceIpRuleRequest {
    private 'instance_id'?: string;
    public ip?: string;
    public constructor(instanceId?: string, ip?: string) { 
        this['instance_id'] = instanceId;
        this['ip'] = ip;
    }
    public withInstanceId(instanceId: string): ListInstanceIpRuleRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withIp(ip: string): ListInstanceIpRuleRequest {
        this['ip'] = ip;
        return this;
    }
}