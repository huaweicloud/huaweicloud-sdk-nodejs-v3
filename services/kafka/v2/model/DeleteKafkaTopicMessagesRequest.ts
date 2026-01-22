import { DeleteKafkaMessageRequestBody } from './DeleteKafkaMessageRequestBody';


export class DeleteKafkaTopicMessagesRequest {
    private 'instance_id'?: string;
    public topic?: string;
    public body?: DeleteKafkaMessageRequestBody;
    public constructor(instanceId?: string, topic?: string) { 
        this['instance_id'] = instanceId;
        this['topic'] = topic;
    }
    public withInstanceId(instanceId: string): DeleteKafkaTopicMessagesRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withTopic(topic: string): DeleteKafkaTopicMessagesRequest {
        this['topic'] = topic;
        return this;
    }
    public withBody(body: DeleteKafkaMessageRequestBody): DeleteKafkaTopicMessagesRequest {
        this['body'] = body;
        return this;
    }
}