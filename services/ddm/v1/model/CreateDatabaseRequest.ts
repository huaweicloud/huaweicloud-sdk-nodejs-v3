import { CreateDatabaseReq } from './CreateDatabaseReq';


export class CreateDatabaseRequest {
    private 'instance_id'?: string;
    public body?: CreateDatabaseReq;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): CreateDatabaseRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: CreateDatabaseReq): CreateDatabaseRequest {
        this['body'] = body;
        return this;
    }
}