

export class ConsumerGroupInfo {
    private 'consumer_group_name'?: string;
    private 'create_time'?: number;
    private 'log_group_id'?: string;
    private 'log_stream_id'?: string;
    private 'project_id'?: string;
    public timeout?: number;
    public constructor(consumerGroupName?: string) { 
        this['consumer_group_name'] = consumerGroupName;
    }
    public withConsumerGroupName(consumerGroupName: string): ConsumerGroupInfo {
        this['consumer_group_name'] = consumerGroupName;
        return this;
    }
    public set consumerGroupName(consumerGroupName: string  | undefined) {
        this['consumer_group_name'] = consumerGroupName;
    }
    public get consumerGroupName(): string | undefined {
        return this['consumer_group_name'];
    }
    public withCreateTime(createTime: number): ConsumerGroupInfo {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withLogGroupId(logGroupId: string): ConsumerGroupInfo {
        this['log_group_id'] = logGroupId;
        return this;
    }
    public set logGroupId(logGroupId: string  | undefined) {
        this['log_group_id'] = logGroupId;
    }
    public get logGroupId(): string | undefined {
        return this['log_group_id'];
    }
    public withLogStreamId(logStreamId: string): ConsumerGroupInfo {
        this['log_stream_id'] = logStreamId;
        return this;
    }
    public set logStreamId(logStreamId: string  | undefined) {
        this['log_stream_id'] = logStreamId;
    }
    public get logStreamId(): string | undefined {
        return this['log_stream_id'];
    }
    public withProjectId(projectId: string): ConsumerGroupInfo {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withTimeout(timeout: number): ConsumerGroupInfo {
        this['timeout'] = timeout;
        return this;
    }
}