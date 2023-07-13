

export class UpdateInstanceAutoCreateTopicReq {
    private 'enable_auto_topic': boolean | undefined;
    public constructor(enableAutoTopic?: any) { 
        this['enable_auto_topic'] = enableAutoTopic;
    }
    public withEnableAutoTopic(enableAutoTopic: boolean): UpdateInstanceAutoCreateTopicReq {
        this['enable_auto_topic'] = enableAutoTopic;
        return this;
    }
    public set enableAutoTopic(enableAutoTopic: boolean | undefined) {
        this['enable_auto_topic'] = enableAutoTopic;
    }
    public get enableAutoTopic() {
        return this['enable_auto_topic'];
    }
}