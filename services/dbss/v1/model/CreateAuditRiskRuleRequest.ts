import { RuleAddRiskRuleRequest } from './RuleAddRiskRuleRequest';


export class CreateAuditRiskRuleRequest {
    private 'instance_id'?: string;
    public body?: RuleAddRiskRuleRequest;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): CreateAuditRiskRuleRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: RuleAddRiskRuleRequest): CreateAuditRiskRuleRequest {
        this['body'] = body;
        return this;
    }
}