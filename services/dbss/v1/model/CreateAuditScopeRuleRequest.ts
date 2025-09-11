import { RuleScopeRequest } from './RuleScopeRequest';


export class CreateAuditScopeRuleRequest {
    private 'instance_id'?: string;
    public body?: RuleScopeRequest;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): CreateAuditScopeRuleRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: RuleScopeRequest): CreateAuditScopeRuleRequest {
        this['body'] = body;
        return this;
    }
}