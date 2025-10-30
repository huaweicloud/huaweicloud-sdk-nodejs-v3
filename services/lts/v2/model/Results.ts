

export class Results {
    private 'eps_id'?: string;
    private 'log_group_name'?: string;
    private 'log_group_name_alias'?: string;
    private 'log_stream_name'?: string;
    private 'log_stream_name_alias'?: string;
    public time?: string;
    public constructor(epsId?: string, logGroupName?: string, logGroupNameAlias?: string, logStreamName?: string, logStreamNameAlias?: string, time?: string) { 
        this['eps_id'] = epsId;
        this['log_group_name'] = logGroupName;
        this['log_group_name_alias'] = logGroupNameAlias;
        this['log_stream_name'] = logStreamName;
        this['log_stream_name_alias'] = logStreamNameAlias;
        this['time'] = time;
    }
    public withEpsId(epsId: string): Results {
        this['eps_id'] = epsId;
        return this;
    }
    public set epsId(epsId: string  | undefined) {
        this['eps_id'] = epsId;
    }
    public get epsId(): string | undefined {
        return this['eps_id'];
    }
    public withLogGroupName(logGroupName: string): Results {
        this['log_group_name'] = logGroupName;
        return this;
    }
    public set logGroupName(logGroupName: string  | undefined) {
        this['log_group_name'] = logGroupName;
    }
    public get logGroupName(): string | undefined {
        return this['log_group_name'];
    }
    public withLogGroupNameAlias(logGroupNameAlias: string): Results {
        this['log_group_name_alias'] = logGroupNameAlias;
        return this;
    }
    public set logGroupNameAlias(logGroupNameAlias: string  | undefined) {
        this['log_group_name_alias'] = logGroupNameAlias;
    }
    public get logGroupNameAlias(): string | undefined {
        return this['log_group_name_alias'];
    }
    public withLogStreamName(logStreamName: string): Results {
        this['log_stream_name'] = logStreamName;
        return this;
    }
    public set logStreamName(logStreamName: string  | undefined) {
        this['log_stream_name'] = logStreamName;
    }
    public get logStreamName(): string | undefined {
        return this['log_stream_name'];
    }
    public withLogStreamNameAlias(logStreamNameAlias: string): Results {
        this['log_stream_name_alias'] = logStreamNameAlias;
        return this;
    }
    public set logStreamNameAlias(logStreamNameAlias: string  | undefined) {
        this['log_stream_name_alias'] = logStreamNameAlias;
    }
    public get logStreamNameAlias(): string | undefined {
        return this['log_stream_name_alias'];
    }
    public withTime(time: string): Results {
        this['time'] = time;
        return this;
    }
}