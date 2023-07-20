import { EnlargeReplicasetNodeRequestBody } from './EnlargeReplicasetNodeRequestBody';


export class ExpandReplicasetNodeRequest {
    private 'instance_id'?: string;
    public body?: EnlargeReplicasetNodeRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ExpandReplicasetNodeRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: EnlargeReplicasetNodeRequestBody): ExpandReplicasetNodeRequest {
        this['body'] = body;
        return this;
    }
}