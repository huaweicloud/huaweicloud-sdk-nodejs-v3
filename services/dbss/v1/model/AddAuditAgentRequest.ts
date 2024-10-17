import { AuditAgentRequest } from './AuditAgentRequest';


export class AddAuditAgentRequest {
    private 'instance_id'?: string;
    public body?: AuditAgentRequest;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): AddAuditAgentRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: AuditAgentRequest): AddAuditAgentRequest {
        this['body'] = body;
        return this;
    }
}