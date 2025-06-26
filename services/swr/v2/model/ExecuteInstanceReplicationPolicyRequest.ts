import { CreateReplicationExecutionRequestBody } from './CreateReplicationExecutionRequestBody';


export class ExecuteInstanceReplicationPolicyRequest {
    private 'instance_id'?: string;
    public body?: CreateReplicationExecutionRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ExecuteInstanceReplicationPolicyRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: CreateReplicationExecutionRequestBody): ExecuteInstanceReplicationPolicyRequest {
        this['body'] = body;
        return this;
    }
}