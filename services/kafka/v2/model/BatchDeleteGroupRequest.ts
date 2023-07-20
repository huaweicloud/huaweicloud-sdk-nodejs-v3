import { BatchDeleteGroupReq } from './BatchDeleteGroupReq';


export class BatchDeleteGroupRequest {
    private 'instance_id'?: string;
    public body?: BatchDeleteGroupReq;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): BatchDeleteGroupRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: BatchDeleteGroupReq): BatchDeleteGroupRequest {
        this['body'] = body;
        return this;
    }
}