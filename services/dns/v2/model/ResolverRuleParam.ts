

export class ResolverRuleParam {
    public id?: string;
    public name?: string;
    private 'domain_name'?: string;
    private 'endpoint_id'?: string;
    public status?: string;
    private 'rule_type'?: string;
    private 'ipaddress_count'?: number;
    private 'create_time'?: string;
    private 'update_time'?: string;
    public constructor() { 
    }
    public withId(id: string): ResolverRuleParam {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ResolverRuleParam {
        this['name'] = name;
        return this;
    }
    public withDomainName(domainName: string): ResolverRuleParam {
        this['domain_name'] = domainName;
        return this;
    }
    public set domainName(domainName: string  | undefined) {
        this['domain_name'] = domainName;
    }
    public get domainName(): string | undefined {
        return this['domain_name'];
    }
    public withEndpointId(endpointId: string): ResolverRuleParam {
        this['endpoint_id'] = endpointId;
        return this;
    }
    public set endpointId(endpointId: string  | undefined) {
        this['endpoint_id'] = endpointId;
    }
    public get endpointId(): string | undefined {
        return this['endpoint_id'];
    }
    public withStatus(status: string): ResolverRuleParam {
        this['status'] = status;
        return this;
    }
    public withRuleType(ruleType: string): ResolverRuleParam {
        this['rule_type'] = ruleType;
        return this;
    }
    public set ruleType(ruleType: string  | undefined) {
        this['rule_type'] = ruleType;
    }
    public get ruleType(): string | undefined {
        return this['rule_type'];
    }
    public withIpaddressCount(ipaddressCount: number): ResolverRuleParam {
        this['ipaddress_count'] = ipaddressCount;
        return this;
    }
    public set ipaddressCount(ipaddressCount: number  | undefined) {
        this['ipaddress_count'] = ipaddressCount;
    }
    public get ipaddressCount(): number | undefined {
        return this['ipaddress_count'];
    }
    public withCreateTime(createTime: string): ResolverRuleParam {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): ResolverRuleParam {
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