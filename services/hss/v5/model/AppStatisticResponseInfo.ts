

export class AppStatisticResponseInfo {
    private 'app_name'?: string;
    public num?: number;
    public constructor() { 
    }
    public withAppName(appName: string): AppStatisticResponseInfo {
        this['app_name'] = appName;
        return this;
    }
    public set appName(appName: string  | undefined) {
        this['app_name'] = appName;
    }
    public get appName(): string | undefined {
        return this['app_name'];
    }
    public withNum(num: number): AppStatisticResponseInfo {
        this['num'] = num;
        return this;
    }
}