import { BatchDeleteShardsRequestBody } from './BatchDeleteShardsRequestBody';


export class BatchDeleteShardsRequest {
    private 'instance_id'?: string;
    public body?: BatchDeleteShardsRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): BatchDeleteShardsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: BatchDeleteShardsRequestBody): BatchDeleteShardsRequest {
        this['body'] = body;
        return this;
    }
}