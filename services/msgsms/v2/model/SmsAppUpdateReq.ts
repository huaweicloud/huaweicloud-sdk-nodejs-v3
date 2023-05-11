

export class SmsAppUpdateReq {
    private 'app_name': string | undefined;
    private 'create_sign_and_template'?: boolean | undefined;
    private 'enterprise_project_id': string | undefined;
    private 'enterprise_project_name': string | undefined;
    public region?: string;
    private 'up_link_addr'?: string | undefined;
    public constructor(appName?: any, enterpriseProjectId?: any, enterpriseProjectName?: any) { 
        this['app_name'] = appName;
        this['enterprise_project_id'] = enterpriseProjectId;
        this['enterprise_project_name'] = enterpriseProjectName;
    }
    public withAppName(appName: string): SmsAppUpdateReq {
        this['app_name'] = appName;
        return this;
    }
    public set appName(appName: string | undefined) {
        this['app_name'] = appName;
    }
    public get appName() {
        return this['app_name'];
    }
    public withCreateSignAndTemplate(createSignAndTemplate: boolean): SmsAppUpdateReq {
        this['create_sign_and_template'] = createSignAndTemplate;
        return this;
    }
    public set createSignAndTemplate(createSignAndTemplate: boolean | undefined) {
        this['create_sign_and_template'] = createSignAndTemplate;
    }
    public get createSignAndTemplate() {
        return this['create_sign_and_template'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): SmsAppUpdateReq {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['enterprise_project_id'];
    }
    public withEnterpriseProjectName(enterpriseProjectName: string): SmsAppUpdateReq {
        this['enterprise_project_name'] = enterpriseProjectName;
        return this;
    }
    public set enterpriseProjectName(enterpriseProjectName: string | undefined) {
        this['enterprise_project_name'] = enterpriseProjectName;
    }
    public get enterpriseProjectName() {
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
    public set upLinkAddr(upLinkAddr: string | undefined) {
        this['up_link_addr'] = upLinkAddr;
    }
    public get upLinkAddr() {
        return this['up_link_addr'];
    }
}