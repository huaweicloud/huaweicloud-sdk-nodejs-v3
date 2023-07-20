

export class Lts {
    private 'is_lts_enabled'?: boolean;
    private 'log_group_name'?: string;
    private 'log_topic_name'?: string;
    public constructor() { 
    }
    public withIsLtsEnabled(isLtsEnabled: boolean): Lts {
        this['is_lts_enabled'] = isLtsEnabled;
        return this;
    }
    public set isLtsEnabled(isLtsEnabled: boolean  | undefined) {
        this['is_lts_enabled'] = isLtsEnabled;
    }
    public get isLtsEnabled(): boolean | undefined {
        return this['is_lts_enabled'];
    }
    public withLogGroupName(logGroupName: string): Lts {
        this['log_group_name'] = logGroupName;
        return this;
    }
    public set logGroupName(logGroupName: string  | undefined) {
        this['log_group_name'] = logGroupName;
    }
    public get logGroupName(): string | undefined {
        return this['log_group_name'];
    }
    public withLogTopicName(logTopicName: string): Lts {
        this['log_topic_name'] = logTopicName;
        return this;
    }
    public set logTopicName(logTopicName: string  | undefined) {
        this['log_topic_name'] = logTopicName;
    }
    public get logTopicName(): string | undefined {
        return this['log_topic_name'];
    }
}