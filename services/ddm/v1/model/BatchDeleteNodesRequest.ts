import { ReduceNodeOpenRequest } from './ReduceNodeOpenRequest';


export class BatchDeleteNodesRequest {
    private 'instance_id'?: string;
    public body?: ReduceNodeOpenRequest;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): BatchDeleteNodesRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: ReduceNodeOpenRequest): BatchDeleteNodesRequest {
        this['body'] = body;
        return this;
    }
}