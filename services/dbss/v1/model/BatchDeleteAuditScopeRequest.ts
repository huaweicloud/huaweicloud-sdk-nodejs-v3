import { AuditScopeRequestNew } from './AuditScopeRequestNew';


export class BatchDeleteAuditScopeRequest {
    private 'instance_id'?: string;
    public body?: AuditScopeRequestNew;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): BatchDeleteAuditScopeRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: AuditScopeRequestNew): BatchDeleteAuditScopeRequest {
        this['body'] = body;
        return this;
    }
}