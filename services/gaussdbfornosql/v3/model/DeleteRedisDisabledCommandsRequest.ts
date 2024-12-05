import { DeleteRedisDisabledCommandsRequestBody } from './DeleteRedisDisabledCommandsRequestBody';


export class DeleteRedisDisabledCommandsRequest {
    private 'instance_id'?: string;
    public body?: DeleteRedisDisabledCommandsRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): DeleteRedisDisabledCommandsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: DeleteRedisDisabledCommandsRequestBody): DeleteRedisDisabledCommandsRequest {
        this['body'] = body;
        return this;
    }
}