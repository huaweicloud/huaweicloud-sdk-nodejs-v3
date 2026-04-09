import { ResetUserPasswordV3RequestBody } from './ResetUserPasswordV3RequestBody';


export class ResetDdmUserPasswordRequest {
    private 'instance_id'?: string;
    public username?: string;
    public body?: ResetUserPasswordV3RequestBody;
    public constructor(instanceId?: string, username?: string) { 
        this['instance_id'] = instanceId;
        this['username'] = username;
    }
    public withInstanceId(instanceId: string): ResetDdmUserPasswordRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withUsername(username: string): ResetDdmUserPasswordRequest {
        this['username'] = username;
        return this;
    }
    public withBody(body: ResetUserPasswordV3RequestBody): ResetDdmUserPasswordRequest {
        this['body'] = body;
        return this;
    }
}