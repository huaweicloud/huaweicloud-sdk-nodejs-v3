import { RedisDeleteDbUserRequest } from './RedisDeleteDbUserRequest';


export class DeleteDbUserRequest {
    private 'instance_id'?: string;
    public body?: RedisDeleteDbUserRequest;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): DeleteDbUserRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: RedisDeleteDbUserRequest): DeleteDbUserRequest {
        this['body'] = body;
        return this;
    }
}