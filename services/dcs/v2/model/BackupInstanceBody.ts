

export class BackupInstanceBody {
    public remark?: string;
    private 'backup_format'?: BackupInstanceBodyBackupFormatEnum | undefined;
    public constructor() { 
    }
    public withRemark(remark: string): BackupInstanceBody {
        this['remark'] = remark;
        return this;
    }
    public withBackupFormat(backupFormat: BackupInstanceBodyBackupFormatEnum): BackupInstanceBody {
        this['backup_format'] = backupFormat;
        return this;
    }
    public set backupFormat(backupFormat: BackupInstanceBodyBackupFormatEnum | undefined) {
        this['backup_format'] = backupFormat;
    }
    public get backupFormat() {
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
