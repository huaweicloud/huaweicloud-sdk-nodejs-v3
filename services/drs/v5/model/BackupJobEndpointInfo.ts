

export class BackupJobEndpointInfo {
    private 'target_instance_id'?: string;
    private 'ms_file_stream_status'?: string;
    private 'file_id'?: string;
    public constructor(targetInstanceId?: string) { 
        this['target_instance_id'] = targetInstanceId;
    }
    public withTargetInstanceId(targetInstanceId: string): BackupJobEndpointInfo {
        this['target_instance_id'] = targetInstanceId;
        return this;
    }
    public set targetInstanceId(targetInstanceId: string  | undefined) {
        this['target_instance_id'] = targetInstanceId;
    }
    public get targetInstanceId(): string | undefined {
        return this['target_instance_id'];
    }
    public withMsFileStreamStatus(msFileStreamStatus: string): BackupJobEndpointInfo {
        this['ms_file_stream_status'] = msFileStreamStatus;
        return this;
    }
    public set msFileStreamStatus(msFileStreamStatus: string  | undefined) {
        this['ms_file_stream_status'] = msFileStreamStatus;
    }
    public get msFileStreamStatus(): string | undefined {
        return this['ms_file_stream_status'];
    }
    public withFileId(fileId: string): BackupJobEndpointInfo {
        this['file_id'] = fileId;
        return this;
    }
    public set fileId(fileId: string  | undefined) {
        this['file_id'] = fileId;
    }
    public get fileId(): string | undefined {
        return this['file_id'];
    }
}