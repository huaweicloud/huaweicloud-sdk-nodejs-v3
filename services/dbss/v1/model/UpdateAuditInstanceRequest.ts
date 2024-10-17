import { UpdateAuditBean } from './UpdateAuditBean';


export class UpdateAuditInstanceRequest {
    private 'instance_id'?: string;
    public body?: UpdateAuditBean;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): UpdateAuditInstanceRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: UpdateAuditBean): UpdateAuditInstanceRequest {
        this['body'] = body;
        return this;
    }
}