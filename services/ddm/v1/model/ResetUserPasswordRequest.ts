import { ResetUserPasswordReq } from './ResetUserPasswordReq';


export class ResetUserPasswordRequest {
    private 'instance_id'?: string;
    public username?: string;
    public body?: ResetUserPasswordReq;
    public constructor(instanceId?: string, username?: string) { 
        this['instance_id'] = instanceId;
        this['username'] = username;
    }
    public withInstanceId(instanceId: string): ResetUserPasswordRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withUsername(username: string): ResetUserPasswordRequest {
        this['username'] = username;
        return this;
    }
    public withBody(body: ResetUserPasswordReq): ResetUserPasswordRequest {
        this['body'] = body;
        return this;
    }
}