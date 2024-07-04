import { BatchDeleteBody } from './BatchDeleteBody';


export class BatchDeleteVhostsRequest {
    private 'instance_id'?: string;
    public body?: BatchDeleteBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): BatchDeleteVhostsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: BatchDeleteBody): BatchDeleteVhostsRequest {
        this['body'] = body;
        return this;
    }
}