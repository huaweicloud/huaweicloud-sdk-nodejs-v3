import { UpdateAuditBean } from './UpdateAuditBean';


export class UpdateAuditInstanceNewRequest {
    private 'instance_id'?: string;
    public body?: UpdateAuditBean;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): UpdateAuditInstanceNewRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: UpdateAuditBean): UpdateAuditInstanceNewRequest {
        this['body'] = body;
        return this;
    }
}