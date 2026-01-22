import { BatchResetConsumeOffsetReq } from './BatchResetConsumeOffsetReq';


export class BatchResetRocketMqMessageOffsetsRequest {
    private 'instance_id'?: string;
    public body?: BatchResetConsumeOffsetReq;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): BatchResetRocketMqMessageOffsetsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: BatchResetConsumeOffsetReq): BatchResetRocketMqMessageOffsetsRequest {
        this['body'] = body;
        return this;
    }
}