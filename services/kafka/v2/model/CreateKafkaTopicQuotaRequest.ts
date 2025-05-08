import { KafkaTopicQuota } from './KafkaTopicQuota';


export class CreateKafkaTopicQuotaRequest {
    private 'instance_id'?: string;
    public body?: KafkaTopicQuota;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): CreateKafkaTopicQuotaRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: KafkaTopicQuota): CreateKafkaTopicQuotaRequest {
        this['body'] = body;
        return this;
    }
}