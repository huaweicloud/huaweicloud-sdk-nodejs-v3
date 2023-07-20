import { BatchCreateOrDeleteTagReq } from './BatchCreateOrDeleteTagReq';


export class BatchCreateOrDeleteRabbitMqTagRequest {
    private 'instance_id'?: string;
    public body?: BatchCreateOrDeleteTagReq;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): BatchCreateOrDeleteRabbitMqTagRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: BatchCreateOrDeleteTagReq): BatchCreateOrDeleteRabbitMqTagRequest {
        this['body'] = body;
        return this;
    }
}