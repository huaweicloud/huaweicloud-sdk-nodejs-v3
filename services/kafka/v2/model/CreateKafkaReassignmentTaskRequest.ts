import { PartitionReassignRequest } from './PartitionReassignRequest';


export class CreateKafkaReassignmentTaskRequest {
    private 'instance_id'?: string;
    public body?: PartitionReassignRequest;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): CreateKafkaReassignmentTaskRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: PartitionReassignRequest): CreateKafkaReassignmentTaskRequest {
        this['body'] = body;
        return this;
    }
}