

export class ListAuditRuleRisksNewRequest {
    private 'instance_id'?: string;
    public name?: string;
    private 'risk_levels'?: string;
    private 'support_db_classify_rule'?: boolean;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ListAuditRuleRisksNewRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withName(name: string): ListAuditRuleRisksNewRequest {
        this['name'] = name;
        return this;
    }
    public withRiskLevels(riskLevels: string): ListAuditRuleRisksNewRequest {
        this['risk_levels'] = riskLevels;
        return this;
    }
    public set riskLevels(riskLevels: string  | undefined) {
        this['risk_levels'] = riskLevels;
    }
    public get riskLevels(): string | undefined {
        return this['risk_levels'];
    }
    public withSupportDbClassifyRule(supportDbClassifyRule: boolean): ListAuditRuleRisksNewRequest {
        this['support_db_classify_rule'] = supportDbClassifyRule;
        return this;
    }
    public set supportDbClassifyRule(supportDbClassifyRule: boolean  | undefined) {
        this['support_db_classify_rule'] = supportDbClassifyRule;
    }
    public get supportDbClassifyRule(): boolean | undefined {
        return this['support_db_classify_rule'];
    }
}