import { RedisCreateDbUserRequest } from './RedisCreateDbUserRequest';


export class CreateDbUserRequest {
    private 'instance_id'?: string;
    public body?: RedisCreateDbUserRequest;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): CreateDbUserRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: RedisCreateDbUserRequest): CreateDbUserRequest {
        this['body'] = body;
        return this;
    }
}