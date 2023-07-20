

export class CreateLogtankOption {
    private 'loadbalancer_id'?: string;
    private 'log_group_id'?: string;
    private 'log_topic_id'?: string;
    public constructor(loadbalancerId?: string, logGroupId?: string, logTopicId?: string) { 
        this['loadbalancer_id'] = loadbalancerId;
        this['log_group_id'] = logGroupId;
        this['log_topic_id'] = logTopicId;
    }
    public withLoadbalancerId(loadbalancerId: string): CreateLogtankOption {
        this['loadbalancer_id'] = loadbalancerId;
        return this;
    }
    public set loadbalancerId(loadbalancerId: string  | undefined) {
        this['loadbalancer_id'] = loadbalancerId;
    }
    public get loadbalancerId(): string | undefined {
        return this['loadbalancer_id'];
    }
    public withLogGroupId(logGroupId: string): CreateLogtankOption {
        this['log_group_id'] = logGroupId;
        return this;
    }
    public set logGroupId(logGroupId: string  | undefined) {
        this['log_group_id'] = logGroupId;
    }
    public get logGroupId(): string | undefined {
        return this['log_group_id'];
    }
    public withLogTopicId(logTopicId: string): CreateLogtankOption {
        this['log_topic_id'] = logTopicId;
        return this;
    }
    public set logTopicId(logTopicId: string  | undefined) {
        this['log_topic_id'] = logTopicId;
    }
    public get logTopicId(): string | undefined {
        return this['log_topic_id'];
    }
}