import { UpdateUserV3RequestBody } from './UpdateUserV3RequestBody';


export class UpdateDdmUserRequest {
    private 'instance_id'?: string;
    public username?: string;
    public body?: UpdateUserV3RequestBody;
    public constructor(instanceId?: string, username?: string) { 
        this['instance_id'] = instanceId;
        this['username'] = username;
    }
    public withInstanceId(instanceId: string): UpdateDdmUserRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withUsername(username: string): UpdateDdmUserRequest {
        this['username'] = username;
        return this;
    }
    public withBody(body: UpdateUserV3RequestBody): UpdateDdmUserRequest {
        this['body'] = body;
        return this;
    }
}