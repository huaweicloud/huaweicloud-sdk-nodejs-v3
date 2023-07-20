

export class AppReq {
    private 'app_name'?: string;
    public constructor(appName?: string) { 
        this['app_name'] = appName;
    }
    public withAppName(appName: string): AppReq {
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