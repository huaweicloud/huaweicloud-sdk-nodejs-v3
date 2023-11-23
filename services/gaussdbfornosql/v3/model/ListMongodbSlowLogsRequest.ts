import { ListMongodbSlowLogsRequestBody } from './ListMongodbSlowLogsRequestBody';


export class ListMongodbSlowLogsRequest {
    private 'instance_id'?: string;
    public body?: ListMongodbSlowLogsRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ListMongodbSlowLogsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: ListMongodbSlowLogsRequestBody): ListMongodbSlowLogsRequest {
        this['body'] = body;
        return this;
    }
}