

export class OpExtendInfoSync {
    private 'sync_backup_num'?: number | undefined;
    private 'delete_backup_num'?: number | undefined;
    private 'err_sync_backup_num'?: number | undefined;
    public constructor() { 
    }
    public withSyncBackupNum(syncBackupNum: number): OpExtendInfoSync {
        this['sync_backup_num'] = syncBackupNum;
        return this;
    }
    public set syncBackupNum(syncBackupNum: number | undefined) {
        this['sync_backup_num'] = syncBackupNum;
    }
    public get syncBackupNum() {
        return this['sync_backup_num'];
    }
    public withDeleteBackupNum(deleteBackupNum: number): OpExtendInfoSync {
        this['delete_backup_num'] = deleteBackupNum;
        return this;
    }
    public set deleteBackupNum(deleteBackupNum: number | undefined) {
        this['delete_backup_num'] = deleteBackupNum;
    }
    public get deleteBackupNum() {
        return this['delete_backup_num'];
    }
    public withErrSyncBackupNum(errSyncBackupNum: number): OpExtendInfoSync {
        this['err_sync_backup_num'] = errSyncBackupNum;
        return this;
    }
    public set errSyncBackupNum(errSyncBackupNum: number | undefined) {
        this['err_sync_backup_num'] = errSyncBackupNum;
    }
    public get errSyncBackupNum() {
        return this['err_sync_backup_num'];
    }
}