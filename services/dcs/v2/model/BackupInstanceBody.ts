

export class BackupInstanceBody {
    public remark?: string;
    private 'backup_format'?: BackupInstanceBodyBackupFormatEnum | string;
    public constructor() { 
    }
    public withRemark(remark: string): BackupInstanceBody {
        this['remark'] = remark;
        return this;
    }
    public withBackupFormat(backupFormat: BackupInstanceBodyBackupFormatEnum | string): BackupInstanceBody {
        this['backup_format'] = backupFormat;
        return this;
    }
    public set backupFormat(backupFormat: BackupInstanceBodyBackupFormatEnum | string  | undefined) {
        this['backup_format'] = backupFormat;
    }
    public get backupFormat(): BackupInstanceBodyBackupFormatEnum | string | undefined {
        return this['backup_format'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BackupInstanceBodyBackupFormatEnum {
    AOF = 'aof',
    RDB = 'rdb'
}
