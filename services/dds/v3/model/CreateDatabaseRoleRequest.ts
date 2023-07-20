import { CreateDatabaseRoleRequestBody } from './CreateDatabaseRoleRequestBody';


export class CreateDatabaseRoleRequest {
    private 'instance_id'?: string;
    public body?: CreateDatabaseRoleRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): CreateDatabaseRoleRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: CreateDatabaseRoleRequestBody): CreateDatabaseRoleRequest {
        this['body'] = body;
        return this;
    }
}