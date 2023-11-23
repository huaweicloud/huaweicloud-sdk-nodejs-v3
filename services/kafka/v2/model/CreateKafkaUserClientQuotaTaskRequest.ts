import { CreateKafkaUserClientQuotaTaskReq } from './CreateKafkaUserClientQuotaTaskReq';


export class CreateKafkaUserClientQuotaTaskRequest {
    private 'instance_id'?: string;
    public body?: CreateKafkaUserClientQuotaTaskReq;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): CreateKafkaUserClientQuotaTaskRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: CreateKafkaUserClientQuotaTaskReq): CreateKafkaUserClientQuotaTaskRequest {
        this['body'] = body;
        return this;
    }
}