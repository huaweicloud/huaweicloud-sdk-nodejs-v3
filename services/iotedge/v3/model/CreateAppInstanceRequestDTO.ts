

export class CreateAppInstanceRequestDTO {
    public id?: string;
    public namespace?: string;
    private 'app_id'?: string;
    private 'app_version'?: string;
    public values?: object;
    public constructor(id?: string, appId?: string, appVersion?: string) { 
        this['id'] = id;
        this['app_id'] = appId;
        this['app_version'] = appVersion;
    }
    public withId(id: string): CreateAppInstanceRequestDTO {
        this['id'] = id;
        return this;
    }
    public withNamespace(namespace: string): CreateAppInstanceRequestDTO {
        this['namespace'] = namespace;
        return this;
    }
    public withAppId(appId: string): CreateAppInstanceRequestDTO {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): string | undefined {
        return this['app_id'];
    }
    public withAppVersion(appVersion: string): CreateAppInstanceRequestDTO {
        this['app_version'] = appVersion;
        return this;
    }
    public set appVersion(appVersion: string  | undefined) {
        this['app_version'] = appVersion;
    }
    public get appVersion(): string | undefined {
        return this['app_version'];
    }
    public withValues(values: object): CreateAppInstanceRequestDTO {
        this['values'] = values;
        return this;
    }
}