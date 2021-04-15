

export class DeviceMessageRequest {
    private 'message_id'?: string | undefined;
    public name?: string;
    public message: object;
    public encoding?: string;
    private 'payload_format'?: string | undefined;
    public topic?: string;
    private 'topic_full_name'?: string | undefined;
    public constructor(message?: any) { 
        this['message'] = message;
    }
    public withMessageId(messageId: string): DeviceMessageRequest {
        this['message_id'] = messageId;
        return this;
    }
    public set messageId(messageId: string | undefined) {
        this['message_id'] = messageId;
    }
    public get messageId() {
        return this['message_id'];
    }
    public withName(name: string): DeviceMessageRequest {
        this['name'] = name;
        return this;
    }
    public withMessage(message: object): DeviceMessageRequest {
        this['message'] = message;
        return this;
    }
    public withEncoding(encoding: string): DeviceMessageRequest {
        this['encoding'] = encoding;
        return this;
    }
    public withPayloadFormat(payloadFormat: string): DeviceMessageRequest {
        this['payload_format'] = payloadFormat;
        return this;
    }
    public set payloadFormat(payloadFormat: string | undefined) {
        this['payload_format'] = payloadFormat;
    }
    public get payloadFormat() {
        return this['payload_format'];
    }
    public withTopic(topic: string): DeviceMessageRequest {
        this['topic'] = topic;
        return this;
    }
    public withTopicFullName(topicFullName: string): DeviceMessageRequest {
        this['topic_full_name'] = topicFullName;
        return this;
    }
    public set topicFullName(topicFullName: string | undefined) {
        this['topic_full_name'] = topicFullName;
    }
    public get topicFullName() {
        return this['topic_full_name'];
    }
}