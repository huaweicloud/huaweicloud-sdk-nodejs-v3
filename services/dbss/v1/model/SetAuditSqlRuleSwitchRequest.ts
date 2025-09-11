import { RuleSqlIdRequest } from './RuleSqlIdRequest';


export class SetAuditSqlRuleSwitchRequest {
    private 'instance_id'?: string;
    public body?: RuleSqlIdRequest;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): SetAuditSqlRuleSwitchRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: RuleSqlIdRequest): SetAuditSqlRuleSwitchRequest {
        this['body'] = body;
        return this;
    }
}