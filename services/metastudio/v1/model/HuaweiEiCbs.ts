

export class HuaweiEiCbs {
    private 'app_id'?: string;
    public region?: number;
    private 'cbs_project_id'?: string;
    public constructor() { 
    }
    public withAppId(appId: string): HuaweiEiCbs {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): string | undefined {
        return this['app_id'];
    }
    public withRegion(region: number): HuaweiEiCbs {
        this['region'] = region;
        return this;
    }
    public withCbsProjectId(cbsProjectId: string): HuaweiEiCbs {
        this['cbs_project_id'] = cbsProjectId;
        return this;
    }
    public set cbsProjectId(cbsProjectId: string  | undefined) {
        this['cbs_project_id'] = cbsProjectId;
    }
    public get cbsProjectId(): string | undefined {
        return this['cbs_project_id'];
    }
}