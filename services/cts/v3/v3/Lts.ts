

export class Lts {
    private 'is_lts_enabled'?: boolean | undefined;
    private 'log_group_name'?: string | undefined;
    private 'log_topic_name'?: string | undefined;
    public constructor() { 
    }
    public withIsLtsEnabled(isLtsEnabled: boolean): Lts {
        this['is_lts_enabled'] = isLtsEnabled;
        return this;
    }
    public set isLtsEnabled(isLtsEnabled: boolean | undefined) {
        this['is_lts_enabled'] = isLtsEnabled;
    }
    public get isLtsEnabled() {
        return this['is_lts_enabled'];
    }
    public withLogGroupName(logGroupName: string): Lts {
        this['log_group_name'] = logGroupName;
        return this;
    }
    public set logGroupName(logGroupName: string | undefined) {
        this['log_group_name'] = logGroupName;
    }
    public get logGroupName() {
        return this['log_group_name'];
    }
    public withLogTopicName(logTopicName: string): Lts {
        this['log_topic_name'] = logTopicName;
        return this;
    }
    public set logTopicName(logTopicName: string | undefined) {
        this['log_topic_name'] = logTopicName;
    }
    public get logTopicName() {
        return this['log_topic_name'];
    }
}