

export class SmsAppUpdateReq {
    private 'app_name'?: string;
    private 'create_sign_and_template'?: boolean;
    private 'enterprise_project_id'?: string;
    private 'enterprise_project_name'?: string;
    public region?: string;
    private 'up_link_addr'?: string;
    public constructor(appName?: string, region?: string) { 
        this['app_name'] = appName;
        this['region'] = region;
    }
    public withAppName(appName: string): SmsAppUpdateReq {
        this['app_name'] = appName;
        return this;
    }
    public set appName(appName: string  | undefined) {
        this['app_name'] = appName;
    }
    public get appName(): string | undefined {
        return this['app_name'];
    }
    public withCreateSignAndTemplate(createSignAndTemplate: boolean): SmsAppUpdateReq {
        this['create_sign_and_template'] = createSignAndTemplate;
        return this;
    }
    public set createSignAndTemplate(createSignAndTemplate: boolean  | undefined) {
        this['create_sign_and_template'] = createSignAndTemplate;
    }
    public get createSignAndTemplate(): boolean | undefined {
        return this['create_sign_and_template'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): SmsAppUpdateReq {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withEnterpriseProjectName(enterpriseProjectName: string): SmsAppUpdateReq {
        this['enterprise_project_name'] = enterpriseProjectName;
        return this;
    }
    public set enterpriseProjectName(enterpriseProjectName: string  | undefined) {
        this['enterprise_project_name'] = enterpriseProjectName;
    }
    public get enterpriseProjectName(): string | undefined {
        return this['enterprise_project_name'];
    }
    public withRegion(region: string): SmsAppUpdateReq {
        this['region'] = region;
        return this;
    }
    public withUpLinkAddr(upLinkAddr: string): SmsAppUpdateReq {
        this['up_link_addr'] = upLinkAddr;
        return this;
    }
    public set upLinkAddr(upLinkAddr: string  | undefined) {
        this['up_link_addr'] = upLinkAddr;
    }
    public get upLinkAddr(): string | undefined {
        return this['up_link_addr'];
    }
}