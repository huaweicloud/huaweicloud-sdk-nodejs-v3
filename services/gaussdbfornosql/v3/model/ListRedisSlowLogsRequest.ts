import { ListRedisSlowLogsRequestBody } from './ListRedisSlowLogsRequestBody';


export class ListRedisSlowLogsRequest {
    private 'instance_id'?: string;
    public body?: ListRedisSlowLogsRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ListRedisSlowLogsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: ListRedisSlowLogsRequestBody): ListRedisSlowLogsRequest {
        this['body'] = body;
        return this;
    }
}