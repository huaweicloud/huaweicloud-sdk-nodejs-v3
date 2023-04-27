

export class BackupSyncRespBody {
    private 'backup_id': string | undefined;
    private 'operation_log_id': string | undefined;
    public constructor(backupId?: any, operationLogId?: any) { 
        this['backup_id'] = backupId;
        this['operation_log_id'] = operationLogId;
    }
    public withBackupId(backupId: string): BackupSyncRespBody {
        this['backup_id'] = backupId;
        return this;
    }
    public set backupId(backupId: string | undefined) {
        this['backup_id'] = backupId;
    }
    public get backupId() {
        return this['backup_id'];
    }
    public withOperationLogId(operationLogId: string): BackupSyncRespBody {
        this['operation_log_id'] = operationLogId;
        return this;
    }
    public set operationLogId(operationLogId: string | undefined) {
        this['operation_log_id'] = operationLogId;
    }
    public get operationLogId() {
        return this['operation_log_id'];
    }
}