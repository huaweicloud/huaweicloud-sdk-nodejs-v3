import { ListInfluxdbSlowLogsRequestBody } from './ListInfluxdbSlowLogsRequestBody';


export class ListInfluxdbSlowLogsRequest {
    private 'instance_id'?: string;
    public body?: ListInfluxdbSlowLogsRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ListInfluxdbSlowLogsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: ListInfluxdbSlowLogsRequestBody): ListInfluxdbSlowLogsRequest {
        this['body'] = body;
        return this;
    }
}