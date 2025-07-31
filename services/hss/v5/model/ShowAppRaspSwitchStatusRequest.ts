

export class ShowAppRaspSwitchStatusRequest {
    private 'enterprise_project_id'?: string;
    private 'app_type'?: ShowAppRaspSwitchStatusRequestAppTypeEnum | string;
    private 'host_id'?: string;
    public constructor(hostId?: string) { 
        this['host_id'] = hostId;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ShowAppRaspSwitchStatusRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withAppType(appType: ShowAppRaspSwitchStatusRequestAppTypeEnum | string): ShowAppRaspSwitchStatusRequest {
        this['app_type'] = appType;
        return this;
    }
    public set appType(appType: ShowAppRaspSwitchStatusRequestAppTypeEnum | string  | undefined) {
        this['app_type'] = appType;
    }
    public get appType(): ShowAppRaspSwitchStatusRequestAppTypeEnum | string | undefined {
        return this['app_type'];
    }
    public withHostId(hostId: string): ShowAppRaspSwitchStatusRequest {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowAppRaspSwitchStatusRequestAppTypeEnum {
    JAVA = 'java'
}
