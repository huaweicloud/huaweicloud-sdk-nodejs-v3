import { ReduceNodeOpenRequest } from './ReduceNodeOpenRequest';


export class DeleteNodesRequest {
    private 'instance_id'?: string;
    public body?: ReduceNodeOpenRequest;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): DeleteNodesRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: ReduceNodeOpenRequest): DeleteNodesRequest {
        this['body'] = body;
        return this;
    }
}