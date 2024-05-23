

export class HuaweiEiCbs {
    private 'app_id'?: string;
    public region?: number;
    private 'cbs_project_id'?: string;
    private 'sis_region'?: number;
    private 'sis_project_id'?: string;
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
    public withSisRegion(sisRegion: number): HuaweiEiCbs {
        this['sis_region'] = sisRegion;
        return this;
    }
    public set sisRegion(sisRegion: number  | undefined) {
        this['sis_region'] = sisRegion;
    }
    public get sisRegion(): number | undefined {
        return this['sis_region'];
    }
    public withSisProjectId(sisProjectId: string): HuaweiEiCbs {
        this['sis_project_id'] = sisProjectId;
        return this;
    }
    public set sisProjectId(sisProjectId: string  | undefined) {
        this['sis_project_id'] = sisProjectId;
    }
    public get sisProjectId(): string | undefined {
        return this['sis_project_id'];
    }
}