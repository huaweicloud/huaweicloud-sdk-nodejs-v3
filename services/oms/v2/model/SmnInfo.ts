

export class SmnInfo {
    private 'notify_result'?: boolean;
    private 'notify_error_message'?: string;
    private 'topic_name'?: string;
    public constructor() { 
    }
    public withNotifyResult(notifyResult: boolean): SmnInfo {
        this['notify_result'] = notifyResult;
        return this;
    }
    public set notifyResult(notifyResult: boolean  | undefined) {
        this['notify_result'] = notifyResult;
    }
    public get notifyResult(): boolean | undefined {
        return this['notify_result'];
    }
    public withNotifyErrorMessage(notifyErrorMessage: string): SmnInfo {
        this['notify_error_message'] = notifyErrorMessage;
        return this;
    }
    public set notifyErrorMessage(notifyErrorMessage: string  | undefined) {
        this['notify_error_message'] = notifyErrorMessage;
    }
    public get notifyErrorMessage(): string | undefined {
        return this['notify_error_message'];
    }
    public withTopicName(topicName: string): SmnInfo {
        this['topic_name'] = topicName;
        return this;
    }
    public set topicName(topicName: string  | undefined) {
        this['topic_name'] = topicName;
    }
    public get topicName(): string | undefined {
        return this['topic_name'];
    }
}