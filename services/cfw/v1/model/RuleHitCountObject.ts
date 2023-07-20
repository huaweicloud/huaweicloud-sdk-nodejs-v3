

export class RuleHitCountObject {
    private 'rule_id'?: string;
    private 'rule_hit_count'?: number;
    public constructor() { 
    }
    public withRuleId(ruleId: string): RuleHitCountObject {
        this['rule_id'] = ruleId;
        return this;
    }
    public set ruleId(ruleId: string  | undefined) {
        this['rule_id'] = ruleId;
    }
    public get ruleId(): string | undefined {
        return this['rule_id'];
    }
    public withRuleHitCount(ruleHitCount: number): RuleHitCountObject {
        this['rule_hit_count'] = ruleHitCount;
        return this;
    }
    public set ruleHitCount(ruleHitCount: number  | undefined) {
        this['rule_hit_count'] = ruleHitCount;
    }
    public get ruleHitCount(): number | undefined {
        return this['rule_hit_count'];
    }
}