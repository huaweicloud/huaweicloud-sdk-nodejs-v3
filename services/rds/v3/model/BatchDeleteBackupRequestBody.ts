

export class BatchDeleteBackupRequestBody {
    private 'backup_ids'?: Array<string>;
    public constructor(backupIds?: Array<string>) { 
        this['backup_ids'] = backupIds;
    }
    public withBackupIds(backupIds: Array<string>): BatchDeleteBackupRequestBody {
        this['backup_ids'] = backupIds;
        return this;
    }
    public set backupIds(backupIds: Array<string>  | undefined) {
        this['backup_ids'] = backupIds;
    }
    public get backupIds(): Array<string> | undefined {
        return this['backup_ids'];
    }
}