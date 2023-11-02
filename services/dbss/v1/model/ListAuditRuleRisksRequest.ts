

export class ListAuditRuleRisksRequest {
    private 'instance_id'?: string;
    public name?: string;
    private 'risk_levels'?: string;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ListAuditRuleRisksRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withName(name: string): ListAuditRuleRisksRequest {
        this['name'] = name;
        return this;
    }
    public withRiskLevels(riskLevels: string): ListAuditRuleRisksRequest {
        this['risk_levels'] = riskLevels;
        return this;
    }
    public set riskLevels(riskLevels: string  | undefined) {
        this['risk_levels'] = riskLevels;
    }
    public get riskLevels(): string | undefined {
        return this['risk_levels'];
    }
}