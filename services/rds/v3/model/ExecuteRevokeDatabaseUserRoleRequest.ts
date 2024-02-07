import { DatabaseUserRoleRequest } from './DatabaseUserRoleRequest';


export class ExecuteRevokeDatabaseUserRoleRequest {
    private 'instance_id'?: string;
    public body?: DatabaseUserRoleRequest;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ExecuteRevokeDatabaseUserRoleRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: DatabaseUserRoleRequest): ExecuteRevokeDatabaseUserRoleRequest {
        this['body'] = body;
        return this;
    }
}