

export class AddAppIdRequestBody {
    private 'app_name'?: string;
    public description?: string;
    public constructor(appName?: string) { 
        this['app_name'] = appName;
    }
    public withAppName(appName: string): AddAppIdRequestBody {
        this['app_name'] = appName;
        return this;
    }
    public set appName(appName: string  | undefined) {
        this['app_name'] = appName;
    }
    public get appName(): string | undefined {
        return this['app_name'];
    }
    public withDescription(description: string): AddAppIdRequestBody {
        this['description'] = description;
        return this;
    }
}