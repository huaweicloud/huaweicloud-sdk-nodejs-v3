

export class ShowNatGatewaySnatRuleRequest {
    private 'snat_rule_id'?: string;
    public constructor(snatRuleId?: string) { 
        this['snat_rule_id'] = snatRuleId;
    }
    public withSnatRuleId(snatRuleId: string): ShowNatGatewaySnatRuleRequest {
        this['snat_rule_id'] = snatRuleId;
        return this;
    }
    public set snatRuleId(snatRuleId: string  | undefined) {
        this['snat_rule_id'] = snatRuleId;
    }
    public get snatRuleId(): string | undefined {
        return this['snat_rule_id'];
    }
}