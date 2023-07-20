import { PartitionReassignRequest } from './PartitionReassignRequest';


export class CreateReassignmentTaskRequest {
    private 'instance_id'?: string;
    public body?: PartitionReassignRequest;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): CreateReassignmentTaskRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: PartitionReassignRequest): CreateReassignmentTaskRequest {
        this['body'] = body;
        return this;
    }
}