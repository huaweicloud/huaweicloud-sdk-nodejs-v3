import { AuditSqlRequest } from './AuditSqlRequest';


export class ListAuditSqlsNewRequest {
    private 'instance_id'?: string;
    public body?: AuditSqlRequest;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ListAuditSqlsNewRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: AuditSqlRequest): ListAuditSqlsNewRequest {
        this['body'] = body;
        return this;
    }
}