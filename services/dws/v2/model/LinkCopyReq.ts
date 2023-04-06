

export class LinkCopyReq {
    private 'backup_name': string | undefined;
    public description?: string;
    public constructor(backupName?: any) { 
        this['backup_name'] = backupName;
    }
    public withBackupName(backupName: string): LinkCopyReq {
        this['backup_name'] = backupName;
        return this;
    }
    public set backupName(backupName: string | undefined) {
        this['backup_name'] = backupName;
    }
    public get backupName() {
        return this['backup_name'];
    }
    public withDescription(description: string): LinkCopyReq {
        this['description'] = description;
        return this;
    }
}