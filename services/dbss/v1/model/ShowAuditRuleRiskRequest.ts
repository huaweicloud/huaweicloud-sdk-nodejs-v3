

export class ShowAuditRuleRiskRequest {
    private 'instance_id'?: string;
    private 'risk_id'?: string;
    public constructor(instanceId?: string, riskId?: string) { 
        this['instance_id'] = instanceId;
        this['risk_id'] = riskId;
    }
    public withInstanceId(instanceId: string): ShowAuditRuleRiskRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withRiskId(riskId: string): ShowAuditRuleRiskRequest {
        this['risk_id'] = riskId;
        return this;
    }
    public set riskId(riskId: string  | undefined) {
        this['risk_id'] = riskId;
    }
    public get riskId(): string | undefined {
        return this['risk_id'];
    }
}