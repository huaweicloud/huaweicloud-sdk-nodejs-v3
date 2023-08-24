

export class ResourceInfo {
    private 'host_id'?: string;
    private 'history_backup_status'?: ResourceInfoHistoryBackupStatusEnum | string;
    public constructor() { 
    }
    public withHostId(hostId: string): ResourceInfo {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
    public withHistoryBackupStatus(historyBackupStatus: ResourceInfoHistoryBackupStatusEnum | string): ResourceInfo {
        this['history_backup_status'] = historyBackupStatus;
        return this;
    }
    public set historyBackupStatus(historyBackupStatus: ResourceInfoHistoryBackupStatusEnum | string  | undefined) {
        this['history_backup_status'] = historyBackupStatus;
    }
    public get historyBackupStatus(): ResourceInfoHistoryBackupStatusEnum | string | undefined {
        return this['history_backup_status'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ResourceInfoHistoryBackupStatusEnum {
    OPENED = 'opened',
    CLOSED = 'closed'
}
