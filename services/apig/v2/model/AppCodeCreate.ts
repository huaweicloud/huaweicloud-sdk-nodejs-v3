

export class AppCodeCreate {
    private 'app_code'?: string;
    public constructor(appCode?: string) { 
        this['app_code'] = appCode;
    }
    public withAppCode(appCode: string): AppCodeCreate {
        this['app_code'] = appCode;
        return this;
    }
    public set appCode(appCode: string  | undefined) {
        this['app_code'] = appCode;
    }
    public get appCode(): string | undefined {
        return this['app_code'];
    }
}