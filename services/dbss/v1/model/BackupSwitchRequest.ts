

export class BackupSwitchRequest {
    private 'bucket_name'?: string;
    private 'bucket_root_path'?: string;
    public cycle?: string;
    public mode?: string;
    public status?: number;
    private 'trigger_time'?: Date;
    public constructor(bucketName?: string, cycle?: string, mode?: string, status?: number, triggerTime?: Date) { 
        this['bucket_name'] = bucketName;
        this['cycle'] = cycle;
        this['mode'] = mode;
        this['status'] = status;
        this['trigger_time'] = triggerTime;
    }
    public withBucketName(bucketName: string): BackupSwitchRequest {
        this['bucket_name'] = bucketName;
        return this;
    }
    public set bucketName(bucketName: string  | undefined) {
        this['bucket_name'] = bucketName;
    }
    public get bucketName(): string | undefined {
        return this['bucket_name'];
    }
    public withBucketRootPath(bucketRootPath: string): BackupSwitchRequest {
        this['bucket_root_path'] = bucketRootPath;
        return this;
    }
    public set bucketRootPath(bucketRootPath: string  | undefined) {
        this['bucket_root_path'] = bucketRootPath;
    }
    public get bucketRootPath(): string | undefined {
        return this['bucket_root_path'];
    }
    public withCycle(cycle: string): BackupSwitchRequest {
        this['cycle'] = cycle;
        return this;
    }
    public withMode(mode: string): BackupSwitchRequest {
        this['mode'] = mode;
        return this;
    }
    public withStatus(status: number): BackupSwitchRequest {
        this['status'] = status;
        return this;
    }
    public withTriggerTime(triggerTime: Date): BackupSwitchRequest {
        this['trigger_time'] = triggerTime;
        return this;
    }
    public set triggerTime(triggerTime: Date  | undefined) {
        this['trigger_time'] = triggerTime;
    }
    public get triggerTime(): Date | undefined {
        return this['trigger_time'];
    }
}