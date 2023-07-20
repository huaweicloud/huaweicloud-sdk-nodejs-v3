

export class LinkCopyReq {
    private 'backup_name'?: string;
    public description?: string;
    public constructor(backupName?: string) { 
        this['backup_name'] = backupName;
    }
    public withBackupName(backupName: string): LinkCopyReq {
        this['backup_name'] = backupName;
        return this;
    }
    public set backupName(backupName: string  | undefined) {
        this['backup_name'] = backupName;
    }
    public get backupName(): string | undefined {
        return this['backup_name'];
    }
    public withDescription(description: string): LinkCopyReq {
        this['description'] = description;
        return this;
    }
}