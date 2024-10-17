import { SwitchAuditDbRequest } from './SwitchAuditDbRequest';


export class SwitchAuditDatabaseRequest {
    private 'instance_id'?: string;
    public body?: SwitchAuditDbRequest;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): SwitchAuditDatabaseRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: SwitchAuditDbRequest): SwitchAuditDatabaseRequest {
        this['body'] = body;
        return this;
    }
}