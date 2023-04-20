

export class DeviceBroadcastRequest {
    private 'app_id'?: string | undefined;
    private 'topic_full_name': string | undefined;
    public message: string;
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
}