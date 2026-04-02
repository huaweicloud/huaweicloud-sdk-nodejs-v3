

export class VulnDto {
    private 'vulnerability_id'?: string;
    public description?: string;
    private 'rule_ids'?: Array<string>;
    private 'create_time'?: number;
    public constructor() { 
    }
    public withVulnerabilityId(vulnerabilityId: string): VulnDto {
        this['vulnerability_id'] = vulnerabilityId;
        return this;
    }
    public set vulnerabilityId(vulnerabilityId: string  | undefined) {
        this['vulnerability_id'] = vulnerabilityId;
    }
    public get vulnerabilityId(): string | undefined {
        return this['vulnerability_id'];
    }
    public withDescription(description: string): VulnDto {
        this['description'] = description;
        return this;
    }
    public withRuleIds(ruleIds: Array<string>): VulnDto {
        this['rule_ids'] = ruleIds;
        return this;
    }
    public set ruleIds(ruleIds: Array<string>  | undefined) {
        this['rule_ids'] = ruleIds;
    }
    public get ruleIds(): Array<string> | undefined {
        return this['rule_ids'];
    }
    public withCreateTime(createTime: number): VulnDto {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
}