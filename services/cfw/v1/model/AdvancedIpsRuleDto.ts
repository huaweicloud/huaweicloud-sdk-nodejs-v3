

export class AdvancedIpsRuleDto {
    public action?: number;
    private 'ips_rule_id'?: string;
    private 'ips_rule_type'?: number;
    private 'object_id'?: string;
    public param?: string;
    public status?: number;
    public constructor() { 
    }
    public withAction(action: number): AdvancedIpsRuleDto {
        this['action'] = action;
        return this;
    }
    public withIpsRuleId(ipsRuleId: string): AdvancedIpsRuleDto {
        this['ips_rule_id'] = ipsRuleId;
        return this;
    }
    public set ipsRuleId(ipsRuleId: string  | undefined) {
        this['ips_rule_id'] = ipsRuleId;
    }
    public get ipsRuleId(): string | undefined {
        return this['ips_rule_id'];
    }
    public withIpsRuleType(ipsRuleType: number): AdvancedIpsRuleDto {
        this['ips_rule_type'] = ipsRuleType;
        return this;
    }
    public set ipsRuleType(ipsRuleType: number  | undefined) {
        this['ips_rule_type'] = ipsRuleType;
    }
    public get ipsRuleType(): number | undefined {
        return this['ips_rule_type'];
    }
    public withObjectId(objectId: string): AdvancedIpsRuleDto {
        this['object_id'] = objectId;
        return this;
    }
    public set objectId(objectId: string  | undefined) {
        this['object_id'] = objectId;
    }
    public get objectId(): string | undefined {
        return this['object_id'];
    }
    public withParam(param: string): AdvancedIpsRuleDto {
        this['param'] = param;
        return this;
    }
    public withStatus(status: number): AdvancedIpsRuleDto {
        this['status'] = status;
        return this;
    }
}