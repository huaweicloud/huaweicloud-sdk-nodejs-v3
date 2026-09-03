

export class UpdateInstanceBackupMethodRequestBody {
    private 'backup_method'?: string;
    public constructor() { 
    }
    public withBackupMethod(backupMethod: string): UpdateInstanceBackupMethodRequestBody {
        this['backup_method'] = backupMethod;
        return this;
    }
    public set backupMethod(backupMethod: string  | undefined) {
        this['backup_method'] = backupMethod;
    }
    public get backupMethod(): string | undefined {
        return this['backup_method'];
    }
}