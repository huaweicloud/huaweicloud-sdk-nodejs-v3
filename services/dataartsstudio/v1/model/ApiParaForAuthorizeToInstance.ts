

export class ApiParaForAuthorizeToInstance {
    public time?: string;
    private 'app_ids'?: Array<string>;
    public constructor() { 
    }
    public withTime(time: string): ApiParaForAuthorizeToInstance {
        this['time'] = time;
        return this;
    }
    public withAppIds(appIds: Array<string>): ApiParaForAuthorizeToInstance {
        this['app_ids'] = appIds;
        return this;
    }
    public set appIds(appIds: Array<string>  | undefined) {
        this['app_ids'] = appIds;
    }
    public get appIds(): Array<string> | undefined {
        return this['app_ids'];
    }
}