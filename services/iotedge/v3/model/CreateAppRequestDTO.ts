

export class CreateAppRequestDTO {
    private 'app_id'?: string;
    private 'app_name'?: string;
    public description?: string;
    private 'app_type'?: string;
    public constructor(appId?: string, appType?: string) { 
        this['app_id'] = appId;
        this['app_type'] = appType;
    }
    public withAppId(appId: string): CreateAppRequestDTO {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): string | undefined {
        return this['app_id'];
    }
    public withAppName(appName: string): CreateAppRequestDTO {
        this['app_name'] = appName;
        return this;
    }
    public set appName(appName: string  | undefined) {
        this['app_name'] = appName;
    }
    public get appName(): string | undefined {
        return this['app_name'];
    }
    public withDescription(description: string): CreateAppRequestDTO {
        this['description'] = description;
        return this;
    }
    public withAppType(appType: string): CreateAppRequestDTO {
        this['app_type'] = appType;
        return this;
    }
    public set appType(appType: string  | undefined) {
        this['app_type'] = appType;
    }
    public get appType(): string | undefined {
        return this['app_type'];
    }
}