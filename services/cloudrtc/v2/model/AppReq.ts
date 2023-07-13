

export class AppReq {
    private 'app_name': string | undefined;
    public constructor(appName?: any) { 
        this['app_name'] = appName;
    }
    public withAppName(appName: string): AppReq {
        this['app_name'] = appName;
        return this;
    }
    public set appName(appName: string | undefined) {
        this['app_name'] = appName;
    }
    public get appName() {
        return this['app_name'];
    }
}