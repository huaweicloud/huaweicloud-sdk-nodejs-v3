import { BatchDeleteInstanceTopicReq } from './BatchDeleteInstanceTopicReq';


export class BatchDeleteInstanceTopicRequest {
    private 'instance_id'?: string;
    public body?: BatchDeleteInstanceTopicReq;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): BatchDeleteInstanceTopicRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: BatchDeleteInstanceTopicReq): BatchDeleteInstanceTopicRequest {
        this['body'] = body;
        return this;
    }
}