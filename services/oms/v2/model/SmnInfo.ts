

export class SmnInfo {
    private 'notify_result'?: boolean | undefined;
    private 'notify_error_message'?: string | undefined;
    private 'topic_name'?: string | undefined;
    public constructor() { 
    }
    public withNotifyResult(notifyResult: boolean): SmnInfo {
        this['notify_result'] = notifyResult;
        return this;
    }
    public set notifyResult(notifyResult: boolean | undefined) {
        this['notify_result'] = notifyResult;
    }
    public get notifyResult() {
        return this['notify_result'];
    }
    public withNotifyErrorMessage(notifyErrorMessage: string): SmnInfo {
        this['notify_error_message'] = notifyErrorMessage;
        return this;
    }
    public set notifyErrorMessage(notifyErrorMessage: string | undefined) {
        this['notify_error_message'] = notifyErrorMessage;
    }
    public get notifyErrorMessage() {
        return this['notify_error_message'];
    }
    public withTopicName(topicName: string): SmnInfo {
        this['topic_name'] = topicName;
        return this;
    }
    public set topicName(topicName: string | undefined) {
        this['topic_name'] = topicName;
    }
    public get topicName() {
        return this['topic_name'];
    }
}