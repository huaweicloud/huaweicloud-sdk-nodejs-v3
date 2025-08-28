import { EnlargeRequest } from './EnlargeRequest';


export class ExpandInstanceNodesRequest {
    private 'instance_id'?: string;
    public body?: EnlargeRequest;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ExpandInstanceNodesRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: EnlargeRequest): ExpandInstanceNodesRequest {
        this['body'] = body;
        return this;
    }
}