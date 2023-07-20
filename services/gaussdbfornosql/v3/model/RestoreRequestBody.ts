

export class RestoreRequestBody {
    private 'backup_id'?: string;
    public password?: string;
    public constructor(backupId?: string) { 
        this['backup_id'] = backupId;
    }
    public withBackupId(backupId: string): RestoreRequestBody {
        this['backup_id'] = backupId;
        return this;
    }
    public set backupId(backupId: string  | undefined) {
        this['backup_id'] = backupId;
    }
    public get backupId(): string | undefined {
        return this['backup_id'];
    }
    public withPassword(password: string): RestoreRequestBody {
        this['password'] = password;
        return this;
    }
}