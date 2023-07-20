import { TenantBasic } from './TenantBasic';


export class SmsAppQueryResp {
    public id?: string;
    private 'create_time'?: string;
    private 'update_time'?: string;
    private 'customer_id'?: string;
    private 'resource_id'?: string;
    private 'developer_account'?: string;
    private 'app_name'?: string;
    private 'omp_app_name'?: string;
    private 'app_key'?: string;
    private 'up_link_addr'?: string;
    public status?: string;
    public industry?: number;
    public region?: string;
    private 'intl_channel_num'?: string;
    private 'enterprise_project_id'?: string;
    private 'enterprise_project_name'?: string;
    private 'ip_white_list'?: string;
    private 'app_access_addr'?: string;
    public protocol?: string;
    public platform?: string;
    private 'is_support_multiomp'?: boolean;
    public tenant?: TenantBasic;
    public constructor() { 
    }
    public withId(id: string): SmsAppQueryResp {
        this['id'] = id;
        return this;
    }
    public withCreateTime(createTime: string): SmsAppQueryResp {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): SmsAppQueryResp {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
    public withCustomerId(customerId: string): SmsAppQueryResp {
        this['customer_id'] = customerId;
        return this;
    }
    public set customerId(customerId: string  | undefined) {
        this['customer_id'] = customerId;
    }
    public get customerId(): string | undefined {
        return this['customer_id'];
    }
    public withResourceId(resourceId: string): SmsAppQueryResp {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withDeveloperAccount(developerAccount: string): SmsAppQueryResp {
        this['developer_account'] = developerAccount;
        return this;
    }
    public set developerAccount(developerAccount: string  | undefined) {
        this['developer_account'] = developerAccount;
    }
    public get developerAccount(): string | undefined {
        return this['developer_account'];
    }
    public withAppName(appName: string): SmsAppQueryResp {
        this['app_name'] = appName;
        return this;
    }
    public set appName(appName: string  | undefined) {
        this['app_name'] = appName;
    }
    public get appName(): string | undefined {
        return this['app_name'];
    }
    public withOmpAppName(ompAppName: string): SmsAppQueryResp {
        this['omp_app_name'] = ompAppName;
        return this;
    }
    public set ompAppName(ompAppName: string  | undefined) {
        this['omp_app_name'] = ompAppName;
    }
    public get ompAppName(): string | undefined {
        return this['omp_app_name'];
    }
    public withAppKey(appKey: string): SmsAppQueryResp {
        this['app_key'] = appKey;
        return this;
    }
    public set appKey(appKey: string  | undefined) {
        this['app_key'] = appKey;
    }
    public get appKey(): string | undefined {
        return this['app_key'];
    }
    public withUpLinkAddr(upLinkAddr: string): SmsAppQueryResp {
        this['up_link_addr'] = upLinkAddr;
        return this;
    }
    public set upLinkAddr(upLinkAddr: string  | undefined) {
        this['up_link_addr'] = upLinkAddr;
    }
    public get upLinkAddr(): string | undefined {
        return this['up_link_addr'];
    }
    public withStatus(status: string): SmsAppQueryResp {
        this['status'] = status;
        return this;
    }
    public withIndustry(industry: number): SmsAppQueryResp {
        this['industry'] = industry;
        return this;
    }
    public withRegion(region: string): SmsAppQueryResp {
        this['region'] = region;
        return this;
    }
    public withIntlChannelNum(intlChannelNum: string): SmsAppQueryResp {
        this['intl_channel_num'] = intlChannelNum;
        return this;
    }
    public set intlChannelNum(intlChannelNum: string  | undefined) {
        this['intl_channel_num'] = intlChannelNum;
    }
    public get intlChannelNum(): string | undefined {
        return this['intl_channel_num'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): SmsAppQueryResp {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withEnterpriseProjectName(enterpriseProjectName: string): SmsAppQueryResp {
        this['enterprise_project_name'] = enterpriseProjectName;
        return this;
    }
    public set enterpriseProjectName(enterpriseProjectName: string  | undefined) {
        this['enterprise_project_name'] = enterpriseProjectName;
    }
    public get enterpriseProjectName(): string | undefined {
        return this['enterprise_project_name'];
    }
    public withIpWhiteList(ipWhiteList: string): SmsAppQueryResp {
        this['ip_white_list'] = ipWhiteList;
        return this;
    }
    public set ipWhiteList(ipWhiteList: string  | undefined) {
        this['ip_white_list'] = ipWhiteList;
    }
    public get ipWhiteList(): string | undefined {
        return this['ip_white_list'];
    }
    public withAppAccessAddr(appAccessAddr: string): SmsAppQueryResp {
        this['app_access_addr'] = appAccessAddr;
        return this;
    }
    public set appAccessAddr(appAccessAddr: string  | undefined) {
        this['app_access_addr'] = appAccessAddr;
    }
    public get appAccessAddr(): string | undefined {
        return this['app_access_addr'];
    }
    public withProtocol(protocol: string): SmsAppQueryResp {
        this['protocol'] = protocol;
        return this;
    }
    public withPlatform(platform: string): SmsAppQueryResp {
        this['platform'] = platform;
        return this;
    }
    public withIsSupportMultiomp(isSupportMultiomp: boolean): SmsAppQueryResp {
        this['is_support_multiomp'] = isSupportMultiomp;
        return this;
    }
    public set isSupportMultiomp(isSupportMultiomp: boolean  | undefined) {
        this['is_support_multiomp'] = isSupportMultiomp;
    }
    public get isSupportMultiomp(): boolean | undefined {
        return this['is_support_multiomp'];
    }
    public withTenant(tenant: TenantBasic): SmsAppQueryResp {
        this['tenant'] = tenant;
        return this;
    }
}