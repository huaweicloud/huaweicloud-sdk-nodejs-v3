

export class DeviceBroadcastRequest {
    private 'app_id'?: string | undefined;
    private 'topic_full_name': string | undefined;
    public message: string;
    public ttl?: number;
    private 'message_id'?: string | undefined;
    public constructor(topicFullName?: any, message?: any) { 
        this['topic_full_name'] = topicFullName;
        this['message'] = message;
    }
    public withAppId(appId: string): DeviceBroadcastRequest {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string | undefined) {
        this['app_id'] = appId;
    }
    public get appId() {
        return this['app_id'];
    }
    public withTopicFullName(topicFullName: string): DeviceBroadcastRequest {
        this['topic_full_name'] = topicFullName;
        return this;
    }
    public set topicFullName(topicFullName: string | undefined) {
        this['topic_full_name'] = topicFullName;
    }
    public get topicFullName() {
        return this['topic_full_name'];
    }
    public withMessage(message: string): DeviceBroadcastRequest {
        this['message'] = message;
        return this;
    }
    public withTtl(ttl: number): DeviceBroadcastRequest {
        this['ttl'] = ttl;
        return this;
    }
    public withMessageId(messageId: string): DeviceBroadcastRequest {
        this['message_id'] = messageId;
        return this;
    }
    public set messageId(messageId: string | undefined) {
        this['message_id'] = messageId;
    }
    public get messageId() {
        return this['message_id'];
    }
}