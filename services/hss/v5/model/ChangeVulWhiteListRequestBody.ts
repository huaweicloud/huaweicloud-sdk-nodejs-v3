

export class ChangeVulWhiteListRequestBody {
    private 'rule_type'?: string;
    private 'host_ids'?: Array<string>;
    public description?: string;
    public constructor(ruleType?: string) { 
        this['rule_type'] = ruleType;
    }
    public withRuleType(ruleType: string): ChangeVulWhiteListRequestBody {
        this['rule_type'] = ruleType;
        return this;
    }
    public set ruleType(ruleType: string  | undefined) {
        this['rule_type'] = ruleType;
    }
    public get ruleType(): string | undefined {
        return this['rule_type'];
    }
    public withHostIds(hostIds: Array<string>): ChangeVulWhiteListRequestBody {
        this['host_ids'] = hostIds;
        return this;
    }
    public set hostIds(hostIds: Array<string>  | undefined) {
        this['host_ids'] = hostIds;
    }
    public get hostIds(): Array<string> | undefined {
        return this['host_ids'];
    }
    public withDescription(description: string): ChangeVulWhiteListRequestBody {
        this['description'] = description;
        return this;
    }
}