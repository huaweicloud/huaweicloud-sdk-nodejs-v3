import { User } from './User';


export class UpdateUserRequest {
    private 'instance_id': string | undefined;
    private 'user_name': string | undefined;
    public body?: User;
    public constructor(instanceId?: any, userName?: any) { 
        this['instance_id'] = instanceId;
        this['user_name'] = userName;
    }
    public withInstanceId(instanceId: string): UpdateUserRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId() {
        return this['instance_id'];
    }
    public withUserName(userName: string): UpdateUserRequest {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string | undefined) {
        this['user_name'] = userName;
    }
    public get userName() {
        return this['user_name'];
    }
    public withBody(body: User): UpdateUserRequest {
        this['body'] = body;
        return this;
    }
}