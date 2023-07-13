

export class UpdateLogtankOption {
    private 'log_group_id'?: string | undefined;
    private 'log_topic_id'?: string | undefined;
    public constructor() { 
    }
    public withLogGroupId(logGroupId: string): UpdateLogtankOption {
        this['log_group_id'] = logGroupId;
        return this;
    }
    public set logGroupId(logGroupId: string | undefined) {
        this['log_group_id'] = logGroupId;
    }
    public get logGroupId() {
        return this['log_group_id'];
    }
    public withLogTopicId(logTopicId: string): UpdateLogtankOption {
        this['log_topic_id'] = logTopicId;
        return this;
    }
    public set logTopicId(logTopicId: string | undefined) {
        this['log_topic_id'] = logTopicId;
    }
    public get logTopicId() {
        return this['log_topic_id'];
    }
}