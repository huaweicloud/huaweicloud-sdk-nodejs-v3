import { RuleAddRiskRuleRequest } from './RuleAddRiskRuleRequest';


export class SetRiskOperationPolicyRequest {
    private 'instance_id'?: string;
    public id?: string;
    public body?: RuleAddRiskRuleRequest;
    public constructor(instanceId?: string, id?: string) { 
        this['instance_id'] = instanceId;
        this['id'] = id;
    }
    public withInstanceId(instanceId: string): SetRiskOperationPolicyRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withId(id: string): SetRiskOperationPolicyRequest {
        this['id'] = id;
        return this;
    }
    public withBody(body: RuleAddRiskRuleRequest): SetRiskOperationPolicyRequest {
        this['body'] = body;
        return this;
    }
}