

export class EndpointResp {
    public id?: string;
    public name?: string;
    public direction?: string;
    public status?: string;
    private 'vpc_id'?: string;
    private 'ipaddress_count'?: number;
    private 'resolver_rule_count'?: number;
    private 'create_time'?: string;
    private 'update_time'?: string;
    public constructor() { 
    }
    public withId(id: string): EndpointResp {
        this['id'] = id;
        return this;
    }
    public withName(name: string): EndpointResp {
        this['name'] = name;
        return this;
    }
    public withDirection(direction: string): EndpointResp {
        this['direction'] = direction;
        return this;
    }
    public withStatus(status: string): EndpointResp {
        this['status'] = status;
        return this;
    }
    public withVpcId(vpcId: string): EndpointResp {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withIpaddressCount(ipaddressCount: number): EndpointResp {
        this['ipaddress_count'] = ipaddressCount;
        return this;
    }
    public set ipaddressCount(ipaddressCount: number  | undefined) {
        this['ipaddress_count'] = ipaddressCount;
    }
    public get ipaddressCount(): number | undefined {
        return this['ipaddress_count'];
    }
    public withResolverRuleCount(resolverRuleCount: number): EndpointResp {
        this['resolver_rule_count'] = resolverRuleCount;
        return this;
    }
    public set resolverRuleCount(resolverRuleCount: number  | undefined) {
        this['resolver_rule_count'] = resolverRuleCount;
    }
    public get resolverRuleCount(): number | undefined {
        return this['resolver_rule_count'];
    }
    public withCreateTime(createTime: string): EndpointResp {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): EndpointResp {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
}