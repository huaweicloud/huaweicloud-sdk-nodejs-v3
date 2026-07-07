import { ParseDeadLockRequestBody } from './ParseDeadLockRequestBody';


export class ParseDeadLockRequest {
    private 'instance_id'?: string;
    public body?: ParseDeadLockRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ParseDeadLockRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: ParseDeadLockRequestBody): ParseDeadLockRequest {
        this['body'] = body;
        return this;
    }
}