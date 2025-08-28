import { CreateDdmDatabaseRequestBody } from './CreateDdmDatabaseRequestBody';


export class CreateDdmDatabaseRequest {
    private 'instance_id'?: string;
    public body?: CreateDdmDatabaseRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): CreateDdmDatabaseRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: CreateDdmDatabaseRequestBody): CreateDdmDatabaseRequest {
        this['body'] = body;
        return this;
    }
}