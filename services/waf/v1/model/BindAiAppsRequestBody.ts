

export class BindAiAppsRequestBody {
    private 'app_ids'?: Array<string>;
    public constructor() { 
    }
    public withAppIds(appIds: Array<string>): BindAiAppsRequestBody {
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