import { DeleteKafkaUserClientQuotaTaskReq } from './DeleteKafkaUserClientQuotaTaskReq';


export class DeleteKafkaUserClientQuotaTaskRequest {
    private 'instance_id'?: string;
    public body?: DeleteKafkaUserClientQuotaTaskReq;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): DeleteKafkaUserClientQuotaTaskRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: DeleteKafkaUserClientQuotaTaskReq): DeleteKafkaUserClientQuotaTaskRequest {
        this['body'] = body;
        return this;
    }
}