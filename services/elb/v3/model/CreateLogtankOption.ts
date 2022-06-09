

export class CreateLogtankOption {
    private 'loadbalancer_id': string | undefined;
    private 'log_group_id': string | undefined;
    private 'log_topic_id': string | undefined;
    public constructor(loadbalancerId?: any, logGroupId?: any, logTopicId?: any) { 
        this['loadbalancer_id'] = loadbalancerId;
        this['log_group_id'] = logGroupId;
        this['log_topic_id'] = logTopicId;
    }
    public withLoadbalancerId(loadbalancerId: string): CreateLogtankOption {
        this['loadbalancer_id'] = loadbalancerId;
        return this;
    }
    public set loadbalancerId(loadbalancerId: string | undefined) {
        this['loadbalancer_id'] = loadbalancerId;
    }
    public get loadbalancerId() {
        return this['loadbalancer_id'];
    }
    public withLogGroupId(logGroupId: string): CreateLogtankOption {
        this['log_group_id'] = logGroupId;
        return this;
    }
    public set logGroupId(logGroupId: string | undefined) {
        this['log_group_id'] = logGroupId;
    }
    public get logGroupId() {
        return this['log_group_id'];
    }
    public withLogTopicId(logTopicId: string): CreateLogtankOption {
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