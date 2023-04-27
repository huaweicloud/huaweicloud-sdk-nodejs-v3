

export class AomMappingLogStreamInfo {
    private 'target_log_group_id': string | undefined;
    private 'target_log_group_name': string | undefined;
    private 'target_log_stream_id': string | undefined;
    private 'target_log_stream_name': string | undefined;
    public constructor(targetLogGroupId?: any, targetLogGroupName?: any, targetLogStreamId?: any, targetLogStreamName?: any) { 
        this['target_log_group_id'] = targetLogGroupId;
        this['target_log_group_name'] = targetLogGroupName;
        this['target_log_stream_id'] = targetLogStreamId;
        this['target_log_stream_name'] = targetLogStreamName;
    }
    public withTargetLogGroupId(targetLogGroupId: string): AomMappingLogStreamInfo {
        this['target_log_group_id'] = targetLogGroupId;
        return this;
    }
    public set targetLogGroupId(targetLogGroupId: string | undefined) {
        this['target_log_group_id'] = targetLogGroupId;
    }
    public get targetLogGroupId() {
        return this['target_log_group_id'];
    }
    public withTargetLogGroupName(targetLogGroupName: string): AomMappingLogStreamInfo {
        this['target_log_group_name'] = targetLogGroupName;
        return this;
    }
    public set targetLogGroupName(targetLogGroupName: string | undefined) {
        this['target_log_group_name'] = targetLogGroupName;
    }
    public get targetLogGroupName() {
        return this['target_log_group_name'];
    }
    public withTargetLogStreamId(targetLogStreamId: string): AomMappingLogStreamInfo {
        this['target_log_stream_id'] = targetLogStreamId;
        return this;
    }
    public set targetLogStreamId(targetLogStreamId: string | undefined) {
        this['target_log_stream_id'] = targetLogStreamId;
    }
    public get targetLogStreamId() {
        return this['target_log_stream_id'];
    }
    public withTargetLogStreamName(targetLogStreamName: string): AomMappingLogStreamInfo {
        this['target_log_stream_name'] = targetLogStreamName;
        return this;
    }
    public set targetLogStreamName(targetLogStreamName: string | undefined) {
        this['target_log_stream_name'] = targetLogStreamName;
    }
    public get targetLogStreamName() {
        return this['target_log_stream_name'];
    }
}