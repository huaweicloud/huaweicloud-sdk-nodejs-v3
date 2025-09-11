import { SwitchAuditDbRequest } from './SwitchAuditDbRequest';


export class SwitchAuditDatabaseNewRequest {
    private 'instance_id'?: string;
    public body?: SwitchAuditDbRequest;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): SwitchAuditDatabaseNewRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: SwitchAuditDbRequest): SwitchAuditDatabaseNewRequest {
        this['body'] = body;
        return this;
    }
}