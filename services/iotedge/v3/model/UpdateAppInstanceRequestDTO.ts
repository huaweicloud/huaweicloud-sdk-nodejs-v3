

export class UpdateAppInstanceRequestDTO {
    public action?: string;
    public namespace?: string;
    private 'app_version'?: string;
    public values?: object;
    private 'rollback_version'?: string;
    public constructor(action?: string) { 
        this['action'] = action;
    }
    public withAction(action: string): UpdateAppInstanceRequestDTO {
        this['action'] = action;
        return this;
    }
    public withNamespace(namespace: string): UpdateAppInstanceRequestDTO {
        this['namespace'] = namespace;
        return this;
    }
    public withAppVersion(appVersion: string): UpdateAppInstanceRequestDTO {
        this['app_version'] = appVersion;
        return this;
    }
    public set appVersion(appVersion: string  | undefined) {
        this['app_version'] = appVersion;
    }
    public get appVersion(): string | undefined {
        return this['app_version'];
    }
    public withValues(values: object): UpdateAppInstanceRequestDTO {
        this['values'] = values;
        return this;
    }
    public withRollbackVersion(rollbackVersion: string): UpdateAppInstanceRequestDTO {
        this['rollback_version'] = rollbackVersion;
        return this;
    }
    public set rollbackVersion(rollbackVersion: string  | undefined) {
        this['rollback_version'] = rollbackVersion;
    }
    public get rollbackVersion(): string | undefined {
        return this['rollback_version'];
    }
}