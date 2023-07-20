import { DeleteDatabaseUserRequestBody } from './DeleteDatabaseUserRequestBody';


export class DeleteDatabaseUserRequest {
    private 'instance_id'?: string;
    public body?: DeleteDatabaseUserRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): DeleteDatabaseUserRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: DeleteDatabaseUserRequestBody): DeleteDatabaseUserRequest {
        this['body'] = body;
        return this;
    }
}