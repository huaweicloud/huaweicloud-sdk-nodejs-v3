

export class ShowPrivateDnatRequest {
    private 'dnat_rule_id'?: string;
    public constructor(dnatRuleId?: string) { 
        this['dnat_rule_id'] = dnatRuleId;
    }
    public withDnatRuleId(dnatRuleId: string): ShowPrivateDnatRequest {
        this['dnat_rule_id'] = dnatRuleId;
        return this;
    }
    public set dnatRuleId(dnatRuleId: string  | undefined) {
        this['dnat_rule_id'] = dnatRuleId;
    }
    public get dnatRuleId(): string | undefined {
        return this['dnat_rule_id'];
    }
}