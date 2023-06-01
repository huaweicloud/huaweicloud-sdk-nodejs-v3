

export class LogtankItem {
    public id: string;
    private 'log_group_id': string | undefined;
    private 'log_stream_id': string | undefined;
    private 'create_time': string | undefined;
    private 'update_time': string | undefined;
    public constructor(id?: any, logGroupId?: any, logStreamId?: any, createTime?: any, updateTime?: any) { 
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
    public set logGroupId(logGroupId: string | undefined) {
        this['log_group_id'] = logGroupId;
    }
    public get logGroupId() {
        return this['log_group_id'];
    }
    public withLogStreamId(logStreamId: string): LogtankItem {
        this['log_stream_id'] = logStreamId;
        return this;
    }
    public set logStreamId(logStreamId: string | undefined) {
        this['log_stream_id'] = logStreamId;
    }
    public get logStreamId() {
        return this['log_stream_id'];
    }
    public withCreateTime(createTime: string): LogtankItem {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime() {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): LogtankItem {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime() {
        return this['update_time'];
    }
}