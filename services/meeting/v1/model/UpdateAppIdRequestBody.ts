

export class UpdateAppIdRequestBody {
    private 'app_name'?: string;
    public description?: string;
    public status?: number;
    public constructor() { 
    }
    public withAppName(appName: string): UpdateAppIdRequestBody {
        this['app_name'] = appName;
        return this;
    }
    public set appName(appName: string  | undefined) {
        this['app_name'] = appName;
    }
    public get appName(): string | undefined {
        return this['app_name'];
    }
    public withDescription(description: string): UpdateAppIdRequestBody {
        this['description'] = description;
        return this;
    }
    public withStatus(status: number): UpdateAppIdRequestBody {
        this['status'] = status;
        return this;
    }
}