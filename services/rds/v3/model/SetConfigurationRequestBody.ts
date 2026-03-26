

export class SetConfigurationRequestBody {
    private 'default_backup_method'?: string;
    public constructor(defaultBackupMethod?: string) { 
        this['default_backup_method'] = defaultBackupMethod;
    }
    public withDefaultBackupMethod(defaultBackupMethod: string): SetConfigurationRequestBody {
        this['default_backup_method'] = defaultBackupMethod;
        return this;
    }
    public set defaultBackupMethod(defaultBackupMethod: string  | undefined) {
        this['default_backup_method'] = defaultBackupMethod;
    }
    public get defaultBackupMethod(): string | undefined {
        return this['default_backup_method'];
    }
}