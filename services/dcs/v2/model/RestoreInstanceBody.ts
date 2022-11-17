

export class RestoreInstanceBody {
    private 'backup_id': string | undefined;
    public remark?: string;
    public constructor(backupId?: any) { 
        this['backup_id'] = backupId;
    }
    public withBackupId(backupId: string): RestoreInstanceBody {
        this['backup_id'] = backupId;
        return this;
    }
    public set backupId(backupId: string | undefined) {
        this['backup_id'] = backupId;
    }
    public get backupId() {
        return this['backup_id'];
    }
    public withRemark(remark: string): RestoreInstanceBody {
        this['remark'] = remark;
        return this;
    }
}