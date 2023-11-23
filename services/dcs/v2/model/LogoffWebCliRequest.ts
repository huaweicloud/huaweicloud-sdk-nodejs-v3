import { LogoutWebCliBody } from './LogoutWebCliBody';


export class LogoffWebCliRequest {
    private 'instance_id'?: string;
    public body?: LogoutWebCliBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): LogoffWebCliRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: LogoutWebCliBody): LogoffWebCliRequest {
        this['body'] = body;
        return this;
    }
}