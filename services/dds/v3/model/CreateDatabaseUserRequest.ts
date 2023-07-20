import { CreateDatabaseUserRequestBody } from './CreateDatabaseUserRequestBody';


export class CreateDatabaseUserRequest {
    private 'instance_id'?: string;
    public body?: CreateDatabaseUserRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): CreateDatabaseUserRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: CreateDatabaseUserRequestBody): CreateDatabaseUserRequest {
        this['body'] = body;
        return this;
    }
}