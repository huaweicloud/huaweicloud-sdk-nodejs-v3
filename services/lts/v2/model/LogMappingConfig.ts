import { LogMappingStreamInfo } from './LogMappingStreamInfo';


export class LogMappingConfig {
    private 'source_log_group_id'?: string;
    private 'target_log_group_id'?: string;
    private 'target_log_group_name'?: string;
    private 'log_stream_config'?: Array<LogMappingStreamInfo>;
    public constructor() { 
    }
    public withSourceLogGroupId(sourceLogGroupId: string): LogMappingConfig {
        this['source_log_group_id'] = sourceLogGroupId;
        return this;
    }
    public set sourceLogGroupId(sourceLogGroupId: string  | undefined) {
        this['source_log_group_id'] = sourceLogGroupId;
    }
    public get sourceLogGroupId(): string | undefined {
        return this['source_log_group_id'];
    }
    public withTargetLogGroupId(targetLogGroupId: string): LogMappingConfig {
        this['target_log_group_id'] = targetLogGroupId;
        return this;
    }
    public set targetLogGroupId(targetLogGroupId: string  | undefined) {
        this['target_log_group_id'] = targetLogGroupId;
    }
    public get targetLogGroupId(): string | undefined {
        return this['target_log_group_id'];
    }
    public withTargetLogGroupName(targetLogGroupName: string): LogMappingConfig {
        this['target_log_group_name'] = targetLogGroupName;
        return this;
    }
    public set targetLogGroupName(targetLogGroupName: string  | undefined) {
        this['target_log_group_name'] = targetLogGroupName;
    }
    public get targetLogGroupName(): string | undefined {
        return this['target_log_group_name'];
    }
    public withLogStreamConfig(logStreamConfig: Array<LogMappingStreamInfo>): LogMappingConfig {
        this['log_stream_config'] = logStreamConfig;
        return this;
    }
    public set logStreamConfig(logStreamConfig: Array<LogMappingStreamInfo>  | undefined) {
        this['log_stream_config'] = logStreamConfig;
    }
    public get logStreamConfig(): Array<LogMappingStreamInfo> | undefined {
        return this['log_stream_config'];
    }
}