import { LtsResponseVoLogTypes } from './LtsResponseVoLogTypes';
import { LtsResponseVoLtsInfos } from './LtsResponseVoLtsInfos';


export class LtsResponseVo {
    private 'config_id'?: string;
    private 'config_name'?: string;
    public enable?: string;
    private 'log_group_id'?: string;
    private 'log_stream_id'?: string;
    private 'log_type'?: string;
    private 'log_types'?: LtsResponseVoLogTypes;
    private 'lts_infos'?: Array<LtsResponseVoLtsInfos>;
    private 'pipe_alias'?: string;
    private 'type_prefix'?: string;
    public constructor() { 
    }
    public withConfigId(configId: string): LtsResponseVo {
        this['config_id'] = configId;
        return this;
    }
    public set configId(configId: string  | undefined) {
        this['config_id'] = configId;
    }
    public get configId(): string | undefined {
        return this['config_id'];
    }
    public withConfigName(configName: string): LtsResponseVo {
        this['config_name'] = configName;
        return this;
    }
    public set configName(configName: string  | undefined) {
        this['config_name'] = configName;
    }
    public get configName(): string | undefined {
        return this['config_name'];
    }
    public withEnable(enable: string): LtsResponseVo {
        this['enable'] = enable;
        return this;
    }
    public withLogGroupId(logGroupId: string): LtsResponseVo {
        this['log_group_id'] = logGroupId;
        return this;
    }
    public set logGroupId(logGroupId: string  | undefined) {
        this['log_group_id'] = logGroupId;
    }
    public get logGroupId(): string | undefined {
        return this['log_group_id'];
    }
    public withLogStreamId(logStreamId: string): LtsResponseVo {
        this['log_stream_id'] = logStreamId;
        return this;
    }
    public set logStreamId(logStreamId: string  | undefined) {
        this['log_stream_id'] = logStreamId;
    }
    public get logStreamId(): string | undefined {
        return this['log_stream_id'];
    }
    public withLogType(logType: string): LtsResponseVo {
        this['log_type'] = logType;
        return this;
    }
    public set logType(logType: string  | undefined) {
        this['log_type'] = logType;
    }
    public get logType(): string | undefined {
        return this['log_type'];
    }
    public withLogTypes(logTypes: LtsResponseVoLogTypes): LtsResponseVo {
        this['log_types'] = logTypes;
        return this;
    }
    public set logTypes(logTypes: LtsResponseVoLogTypes  | undefined) {
        this['log_types'] = logTypes;
    }
    public get logTypes(): LtsResponseVoLogTypes | undefined {
        return this['log_types'];
    }
    public withLtsInfos(ltsInfos: Array<LtsResponseVoLtsInfos>): LtsResponseVo {
        this['lts_infos'] = ltsInfos;
        return this;
    }
    public set ltsInfos(ltsInfos: Array<LtsResponseVoLtsInfos>  | undefined) {
        this['lts_infos'] = ltsInfos;
    }
    public get ltsInfos(): Array<LtsResponseVoLtsInfos> | undefined {
        return this['lts_infos'];
    }
    public withPipeAlias(pipeAlias: string): LtsResponseVo {
        this['pipe_alias'] = pipeAlias;
        return this;
    }
    public set pipeAlias(pipeAlias: string  | undefined) {
        this['pipe_alias'] = pipeAlias;
    }
    public get pipeAlias(): string | undefined {
        return this['pipe_alias'];
    }
    public withTypePrefix(typePrefix: string): LtsResponseVo {
        this['type_prefix'] = typePrefix;
        return this;
    }
    public set typePrefix(typePrefix: string  | undefined) {
        this['type_prefix'] = typePrefix;
    }
    public get typePrefix(): string | undefined {
        return this['type_prefix'];
    }
}