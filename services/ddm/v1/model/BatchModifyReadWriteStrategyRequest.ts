import { BatchModifyReadAndWriteStrategyRequest } from './BatchModifyReadAndWriteStrategyRequest';


export class BatchModifyReadWriteStrategyRequest {
    private 'instance_id'?: string;
    public body?: BatchModifyReadAndWriteStrategyRequest;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): BatchModifyReadWriteStrategyRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: BatchModifyReadAndWriteStrategyRequest): BatchModifyReadWriteStrategyRequest {
        this['body'] = body;
        return this;
    }
}