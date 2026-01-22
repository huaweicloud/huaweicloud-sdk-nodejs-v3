

export class RuleHitStatusListVO {
    private 'rule_id'?: string;
    private 'rule_hit_count'?: number;
    private 'rule_last_hit_time'?: number;
    public constructor() { 
    }
    public withRuleId(ruleId: string): RuleHitStatusListVO {
        this['rule_id'] = ruleId;
        return this;
    }
    public set ruleId(ruleId: string  | undefined) {
        this['rule_id'] = ruleId;
    }
    public get ruleId(): string | undefined {
        return this['rule_id'];
    }
    public withRuleHitCount(ruleHitCount: number): RuleHitStatusListVO {
        this['rule_hit_count'] = ruleHitCount;
        return this;
    }
    public set ruleHitCount(ruleHitCount: number  | undefined) {
        this['rule_hit_count'] = ruleHitCount;
    }
    public get ruleHitCount(): number | undefined {
        return this['rule_hit_count'];
    }
    public withRuleLastHitTime(ruleLastHitTime: number): RuleHitStatusListVO {
        this['rule_last_hit_time'] = ruleLastHitTime;
        return this;
    }
    public set ruleLastHitTime(ruleLastHitTime: number  | undefined) {
        this['rule_last_hit_time'] = ruleLastHitTime;
    }
    public get ruleLastHitTime(): number | undefined {
        return this['rule_last_hit_time'];
    }
}