import { RuleAddSqlRequest } from './RuleAddSqlRequest';


export class UpdateAuditSqlRuleRequest {
    private 'instance_id'?: string;
    public id?: string;
    public body?: RuleAddSqlRequest;
    public constructor(instanceId?: string, id?: string) { 
        this['instance_id'] = instanceId;
        this['id'] = id;
    }
    public withInstanceId(instanceId: string): UpdateAuditSqlRuleRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withId(id: string): UpdateAuditSqlRuleRequest {
        this['id'] = id;
        return this;
    }
    public withBody(body: RuleAddSqlRequest): UpdateAuditSqlRuleRequest {
        this['body'] = body;
        return this;
    }
}