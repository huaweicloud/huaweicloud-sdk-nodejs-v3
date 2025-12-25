

export class LtsRquestVo {
    private 'config_name'?: string;
    public description?: string;
    public enable?: string;
    private 'log_group_id'?: string;
    private 'log_stream_id'?: string;
    private 'log_type'?: string;
    private 'log_type_prefix'?: string;
    private 'pipe_alias'?: string;
    public constructor() { 
    }
    public withConfigName(configName: string): LtsRquestVo {
        this['config_name'] = configName;
        return this;
    }
    public set configName(configName: string  | undefined) {
        this['config_name'] = configName;
    }
    public get configName(): string | undefined {
        return this['config_name'];
    }
    public withDescription(description: string): LtsRquestVo {
        this['description'] = description;
        return this;
    }
    public withEnable(enable: string): LtsRquestVo {
        this['enable'] = enable;
        return this;
    }
    public withLogGroupId(logGroupId: string): LtsRquestVo {
        this['log_group_id'] = logGroupId;
        return this;
    }
    public set logGroupId(logGroupId: string  | undefined) {
        this['log_group_id'] = logGroupId;
    }
    public get logGroupId(): string | undefined {
        return this['log_group_id'];
    }
    public withLogStreamId(logStreamId: string): LtsRquestVo {
        this['log_stream_id'] = logStreamId;
        return this;
    }
    public set logStreamId(logStreamId: string  | undefined) {
        this['log_stream_id'] = logStreamId;
    }
    public get logStreamId(): string | undefined {
        return this['log_stream_id'];
    }
    public withLogType(logType: string): LtsRquestVo {
        this['log_type'] = logType;
        return this;
    }
    public set logType(logType: string  | undefined) {
        this['log_type'] = logType;
    }
    public get logType(): string | undefined {
        return this['log_type'];
    }
    public withLogTypePrefix(logTypePrefix: string): LtsRquestVo {
        this['log_type_prefix'] = logTypePrefix;
        return this;
    }
    public set logTypePrefix(logTypePrefix: string  | undefined) {
        this['log_type_prefix'] = logTypePrefix;
    }
    public get logTypePrefix(): string | undefined {
        return this['log_type_prefix'];
    }
    public withPipeAlias(pipeAlias: string): LtsRquestVo {
        this['pipe_alias'] = pipeAlias;
        return this;
    }
    public set pipeAlias(pipeAlias: string  | undefined) {
        this['pipe_alias'] = pipeAlias;
    }
    public get pipeAlias(): string | undefined {
        return this['pipe_alias'];
    }
}