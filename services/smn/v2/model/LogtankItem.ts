

export class LogtankItem {
    public id?: string;
    private 'log_group_id'?: string;
    private 'log_stream_id'?: string;
    private 'create_time'?: string;
    private 'update_time'?: string;
    public constructor(id?: string, logGroupId?: string, logStreamId?: string, createTime?: string, updateTime?: string) { 
        this['id'] = id;
        this['log_group_id'] = logGroupId;
        this['log_stream_id'] = logStreamId;
        this['create_time'] = createTime;
        this['update_time'] = updateTime;
    }
    public withId(id: string): LogtankItem {
        this['id'] = id;
        return this;
    }
    public withLogGroupId(logGroupId: string): LogtankItem {
        this['log_group_id'] = logGroupId;
        return this;
    }
    public set logGroupId(logGroupId: string  | undefined) {
        this['log_group_id'] = logGroupId;
    }
    public get logGroupId(): string | undefined {
        return this['log_group_id'];
    }
    public withLogStreamId(logStreamId: string): LogtankItem {
        this['log_stream_id'] = logStreamId;
        return this;
    }
    public set logStreamId(logStreamId: string  | undefined) {
        this['log_stream_id'] = logStreamId;
    }
    public get logStreamId(): string | undefined {
        return this['log_stream_id'];
    }
    public withCreateTime(createTime: string): LogtankItem {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): LogtankItem {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
}