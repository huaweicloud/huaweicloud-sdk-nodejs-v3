import { BatchUpdateConsumerGroupReq } from './BatchUpdateConsumerGroupReq';


export class BatchUpdateConsumerGroupRequest {
    private 'instance_id'?: string;
    public body?: BatchUpdateConsumerGroupReq;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): BatchUpdateConsumerGroupRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: BatchUpdateConsumerGroupReq): BatchUpdateConsumerGroupRequest {
        this['body'] = body;
        return this;
    }
}