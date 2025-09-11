import { RuleAddSqlRequest } from './RuleAddSqlRequest';


export class CreateAuditSqlRuleRequest {
    private 'instance_id'?: string;
    public body?: RuleAddSqlRequest;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): CreateAuditSqlRuleRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: RuleAddSqlRequest): CreateAuditSqlRuleRequest {
        this['body'] = body;
        return this;
    }
}