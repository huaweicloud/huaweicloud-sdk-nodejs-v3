import { UpdateUserReq } from './UpdateUserReq';


export class UpdateInstanceUserRequest {
    public engine?: string;
    private 'instance_id'?: string;
    private 'user_name'?: string;
    public body?: UpdateUserReq;
    public constructor(engine?: string, instanceId?: string, userName?: string) { 
        this['engine'] = engine;
        this['instance_id'] = instanceId;
        this['user_name'] = userName;
    }
    public withEngine(engine: string): UpdateInstanceUserRequest {
        this['engine'] = engine;
        return this;
    }
    public withInstanceId(instanceId: string): UpdateInstanceUserRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withUserName(userName: string): UpdateInstanceUserRequest {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withBody(body: UpdateUserReq): UpdateInstanceUserRequest {
        this['body'] = body;
        return this;
    }
}