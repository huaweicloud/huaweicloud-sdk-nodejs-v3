import { ListMongodbErrorLogsRequestBody } from './ListMongodbErrorLogsRequestBody';


export class ListMongodbErrorLogsRequest {
    private 'instance_id'?: string;
    public body?: ListMongodbErrorLogsRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ListMongodbErrorLogsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: ListMongodbErrorLogsRequestBody): ListMongodbErrorLogsRequest {
        this['body'] = body;
        return this;
    }
}