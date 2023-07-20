

export class Logtank {
    public id?: string;
    private 'project_id'?: string;
    private 'loadbalancer_id'?: string;
    private 'log_group_id'?: string;
    private 'log_topic_id'?: string;
    public constructor(id?: string, projectId?: string, loadbalancerId?: string, logGroupId?: string, logTopicId?: string) { 
        this['id'] = id;
        this['project_id'] = projectId;
        this['loadbalancer_id'] = loadbalancerId;
        this['log_group_id'] = logGroupId;
        this['log_topic_id'] = logTopicId;
    }
    public withId(id: string): Logtank {
        this['id'] = id;
        return this;
    }
    public withProjectId(projectId: string): Logtank {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withLoadbalancerId(loadbalancerId: string): Logtank {
        this['loadbalancer_id'] = loadbalancerId;
        return this;
    }
    public set loadbalancerId(loadbalancerId: string  | undefined) {
        this['loadbalancer_id'] = loadbalancerId;
    }
    public get loadbalancerId(): string | undefined {
        return this['loadbalancer_id'];
    }
    public withLogGroupId(logGroupId: string): Logtank {
        this['log_group_id'] = logGroupId;
        return this;
    }
    public set logGroupId(logGroupId: string  | undefined) {
        this['log_group_id'] = logGroupId;
    }
    public get logGroupId(): string | undefined {
        return this['log_group_id'];
    }
    public withLogTopicId(logTopicId: string): Logtank {
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