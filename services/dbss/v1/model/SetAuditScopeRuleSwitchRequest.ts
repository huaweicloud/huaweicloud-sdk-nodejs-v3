import { AuditScopeSwitchRequestNew } from './AuditScopeSwitchRequestNew';


export class SetAuditScopeRuleSwitchRequest {
    private 'instance_id'?: string;
    public body?: AuditScopeSwitchRequestNew;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): SetAuditScopeRuleSwitchRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: AuditScopeSwitchRequestNew): SetAuditScopeRuleSwitchRequest {
        this['body'] = body;
        return this;
    }
}