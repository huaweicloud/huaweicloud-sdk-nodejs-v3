

export class UpdateInstanceAutoCreateTopicReq {
    private 'enable_auto_topic'?: boolean;
    public constructor(enableAutoTopic?: boolean) { 
        this['enable_auto_topic'] = enableAutoTopic;
    }
    public withEnableAutoTopic(enableAutoTopic: boolean): UpdateInstanceAutoCreateTopicReq {
        this['enable_auto_topic'] = enableAutoTopic;
        return this;
    }
    public set enableAutoTopic(enableAutoTopic: boolean  | undefined) {
        this['enable_auto_topic'] = enableAutoTopic;
    }
    public get enableAutoTopic(): boolean | undefined {
        return this['enable_auto_topic'];
    }
}