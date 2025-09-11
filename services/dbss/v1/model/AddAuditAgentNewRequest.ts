import { AuditAgentRequest } from './AuditAgentRequest';


export class AddAuditAgentNewRequest {
    private 'instance_id'?: string;
    public body?: AuditAgentRequest;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): AddAuditAgentNewRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: AuditAgentRequest): AddAuditAgentNewRequest {
        this['body'] = body;
        return this;
    }
}