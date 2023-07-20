

export class BackupSyncRespBody {
    private 'backup_id'?: string;
    private 'operation_log_id'?: string;
    public constructor(backupId?: string, operationLogId?: string) { 
        this['backup_id'] = backupId;
        this['operation_log_id'] = operationLogId;
    }
    public withBackupId(backupId: string): BackupSyncRespBody {
        this['backup_id'] = backupId;
        return this;
    }
    public set backupId(backupId: string  | undefined) {
        this['backup_id'] = backupId;
    }
    public get backupId(): string | undefined {
        return this['backup_id'];
    }
    public withOperationLogId(operationLogId: string): BackupSyncRespBody {
        this['operation_log_id'] = operationLogId;
        return this;
    }
    public set operationLogId(operationLogId: string  | undefined) {
        this['operation_log_id'] = operationLogId;
    }
    public get operationLogId(): string | undefined {
        return this['operation_log_id'];
    }
}