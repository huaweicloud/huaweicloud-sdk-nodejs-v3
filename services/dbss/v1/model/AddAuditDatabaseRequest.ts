import { CreateDatabaseRequest } from './CreateDatabaseRequest';


export class AddAuditDatabaseRequest {
    private 'instance_id'?: string;
    public body?: CreateDatabaseRequest;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): AddAuditDatabaseRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: CreateDatabaseRequest): AddAuditDatabaseRequest {
        this['body'] = body;
        return this;
    }
}