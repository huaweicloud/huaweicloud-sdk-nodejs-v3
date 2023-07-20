import { RedisResetDbUserPasswordRequestBody } from './RedisResetDbUserPasswordRequestBody';


export class ResetDbUserPasswordRequest {
    private 'instance_id'?: string;
    public body?: RedisResetDbUserPasswordRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ResetDbUserPasswordRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: RedisResetDbUserPasswordRequestBody): ResetDbUserPasswordRequest {
        this['body'] = body;
        return this;
    }
}