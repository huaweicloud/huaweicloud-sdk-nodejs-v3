import { UpdateKafkaUserClientQuotaTaskReq } from './UpdateKafkaUserClientQuotaTaskReq';


export class UpdateKafkaUserClientQuotaTaskRequest {
    private 'instance_id'?: string;
    public body?: UpdateKafkaUserClientQuotaTaskReq;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): UpdateKafkaUserClientQuotaTaskRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: UpdateKafkaUserClientQuotaTaskReq): UpdateKafkaUserClientQuotaTaskRequest {
        this['body'] = body;
        return this;
    }
}