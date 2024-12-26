

export class AdvancedIpsRuleVo {
    public action?: number;
    private 'ips_rule_id'?: string;
    private 'ips_rule_type'?: number;
    public param?: string;
    public status?: number;
    public constructor() { 
    }
    public withAction(action: number): AdvancedIpsRuleVo {
        this['action'] = action;
        return this;
    }
    public withIpsRuleId(ipsRuleId: string): AdvancedIpsRuleVo {
        this['ips_rule_id'] = ipsRuleId;
        return this;
    }
    public set ipsRuleId(ipsRuleId: string  | undefined) {
        this['ips_rule_id'] = ipsRuleId;
    }
    public get ipsRuleId(): string | undefined {
        return this['ips_rule_id'];
    }
    public withIpsRuleType(ipsRuleType: number): AdvancedIpsRuleVo {
        this['ips_rule_type'] = ipsRuleType;
        return this;
    }
    public set ipsRuleType(ipsRuleType: number  | undefined) {
        this['ips_rule_type'] = ipsRuleType;
    }
    public get ipsRuleType(): number | undefined {
        return this['ips_rule_type'];
    }
    public withParam(param: string): AdvancedIpsRuleVo {
        this['param'] = param;
        return this;
    }
    public withStatus(status: number): AdvancedIpsRuleVo {
        this['status'] = status;
        return this;
    }
}