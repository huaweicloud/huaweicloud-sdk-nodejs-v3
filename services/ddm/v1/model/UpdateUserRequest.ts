import { UpdateUserReq } from './UpdateUserReq';


export class UpdateUserRequest {
    private 'instance_id'?: string;
    public username?: string;
    public body?: UpdateUserReq;
    public constructor(instanceId?: string, username?: string) { 
        this['instance_id'] = instanceId;
        this['username'] = username;
    }
    public withInstanceId(instanceId: string): UpdateUserRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withUsername(username: string): UpdateUserRequest {
        this['username'] = username;
        return this;
    }
    public withBody(body: UpdateUserReq): UpdateUserRequest {
        this['body'] = body;
        return this;
    }
}