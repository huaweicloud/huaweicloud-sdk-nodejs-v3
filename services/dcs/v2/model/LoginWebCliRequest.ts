import { LoginWebCliBody } from './LoginWebCliBody';


export class LoginWebCliRequest {
    private 'instance_id'?: string;
    public body?: LoginWebCliBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): LoginWebCliRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: LoginWebCliBody): LoginWebCliRequest {
        this['body'] = body;
        return this;
    }
}