

export class UpdateApplicationDTO {
    private 'app_name'?: string;
    public constructor() { 
    }
    public withAppName(appName: string): UpdateApplicationDTO {
        this['app_name'] = appName;
        return this;
    }
    public set appName(appName: string  | undefined) {
        this['app_name'] = appName;
    }
    public get appName(): string | undefined {
        return this['app_name'];
    }
}