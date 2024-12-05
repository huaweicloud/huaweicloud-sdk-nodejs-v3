import { SaveRedisDisabledCommandsRequestBody } from './SaveRedisDisabledCommandsRequestBody';


export class SaveRedisDisabledCommandsRequest {
    private 'instance_id'?: string;
    public body?: SaveRedisDisabledCommandsRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): SaveRedisDisabledCommandsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: SaveRedisDisabledCommandsRequestBody): SaveRedisDisabledCommandsRequest {
        this['body'] = body;
        return this;
    }
}