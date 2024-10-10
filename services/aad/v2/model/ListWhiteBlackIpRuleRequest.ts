

export class ListWhiteBlackIpRuleRequest {
    public type?: string;
    private 'instance_id'?: string;
    public constructor(type?: string, instanceId?: string) { 
        this['type'] = type;
        this['instance_id'] = instanceId;
    }
    public withType(type: string): ListWhiteBlackIpRuleRequest {
        this['type'] = type;
        return this;
    }
    public withInstanceId(instanceId: string): ListWhiteBlackIpRuleRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
}