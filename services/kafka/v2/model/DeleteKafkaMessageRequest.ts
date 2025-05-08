import { DeleteKafkaMessageRequestBody } from './DeleteKafkaMessageRequestBody';


export class DeleteKafkaMessageRequest {
    private 'instance_id'?: string;
    public topic?: string;
    public body?: DeleteKafkaMessageRequestBody;
    public constructor(instanceId?: string, topic?: string) { 
        this['instance_id'] = instanceId;
        this['topic'] = topic;
    }
    public withInstanceId(instanceId: string): DeleteKafkaMessageRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withTopic(topic: string): DeleteKafkaMessageRequest {
        this['topic'] = topic;
        return this;
    }
    public withBody(body: DeleteKafkaMessageRequestBody): DeleteKafkaMessageRequest {
        this['body'] = body;
        return this;
    }
}