import { ReduceRequest } from './ReduceRequest';


export class ShrinkInstanceNodesRequest {
    private 'instance_id'?: string;
    public body?: ReduceRequest;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ShrinkInstanceNodesRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: ReduceRequest): ShrinkInstanceNodesRequest {
        this['body'] = body;
        return this;
    }
}