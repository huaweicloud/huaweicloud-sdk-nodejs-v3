import { AccessConfig } from './AccessConfig';
import { NetworkConfig } from './NetworkConfig';
import { SecurityGroup } from './SecurityGroup';


export class SiteConfigsResponse {
    private 'site_id'?: string;
    private 'site_type'?: SiteConfigsResponseSiteTypeEnum | string;
    private 'site_name'?: string;
    public status?: SiteConfigsResponseStatusEnum | string;
    private 'access_status'?: string;
    private 'config_status'?: string;
    private 'infrastructure_security_group'?: SecurityGroup;
    private 'desktop_security_group'?: SecurityGroup;
    private 'availability_zones'?: Array<string>;
    private 'job_id'?: string;
    public progress?: string;
    private 'fail_code'?: number;
    private 'fail_reason'?: string;
    private 'network_config'?: NetworkConfig;
    private 'access_config'?: AccessConfig;
    public closable?: boolean;
    public constructor() { 
    }
    public withSiteId(siteId: string): SiteConfigsResponse {
        this['site_id'] = siteId;
        return this;
    }
    public set siteId(siteId: string  | undefined) {
        this['site_id'] = siteId;
    }
    public get siteId(): string | undefined {
        return this['site_id'];
    }
    public withSiteType(siteType: SiteConfigsResponseSiteTypeEnum | string): SiteConfigsResponse {
        this['site_type'] = siteType;
        return this;
    }
    public set siteType(siteType: SiteConfigsResponseSiteTypeEnum | string  | undefined) {
        this['site_type'] = siteType;
    }
    public get siteType(): SiteConfigsResponseSiteTypeEnum | string | undefined {
        return this['site_type'];
    }
    public withSiteName(siteName: string): SiteConfigsResponse {
        this['site_name'] = siteName;
        return this;
    }
    public set siteName(siteName: string  | undefined) {
        this['site_name'] = siteName;
    }
    public get siteName(): string | undefined {
        return this['site_name'];
    }
    public withStatus(status: SiteConfigsResponseStatusEnum | string): SiteConfigsResponse {
        this['status'] = status;
        return this;
    }
    public withAccessStatus(accessStatus: string): SiteConfigsResponse {
        this['access_status'] = accessStatus;
        return this;
    }
    public set accessStatus(accessStatus: string  | undefined) {
        this['access_status'] = accessStatus;
    }
    public get accessStatus(): string | undefined {
        return this['access_status'];
    }
    public withConfigStatus(configStatus: string): SiteConfigsResponse {
        this['config_status'] = configStatus;
        return this;
    }
    public set configStatus(configStatus: string  | undefined) {
        this['config_status'] = configStatus;
    }
    public get configStatus(): string | undefined {
        return this['config_status'];
    }
    public withInfrastructureSecurityGroup(infrastructureSecurityGroup: SecurityGroup): SiteConfigsResponse {
        this['infrastructure_security_group'] = infrastructureSecurityGroup;
        return this;
    }
    public set infrastructureSecurityGroup(infrastructureSecurityGroup: SecurityGroup  | undefined) {
        this['infrastructure_security_group'] = infrastructureSecurityGroup;
    }
    public get infrastructureSecurityGroup(): SecurityGroup | undefined {
        return this['infrastructure_security_group'];
    }
    public withDesktopSecurityGroup(desktopSecurityGroup: SecurityGroup): SiteConfigsResponse {
        this['desktop_security_group'] = desktopSecurityGroup;
        return this;
    }
    public set desktopSecurityGroup(desktopSecurityGroup: SecurityGroup  | undefined) {
        this['desktop_security_group'] = desktopSecurityGroup;
    }
    public get desktopSecurityGroup(): SecurityGroup | undefined {
        return this['desktop_security_group'];
    }
    public withAvailabilityZones(availabilityZones: Array<string>): SiteConfigsResponse {
        this['availability_zones'] = availabilityZones;
        return this;
    }
    public set availabilityZones(availabilityZones: Array<string>  | undefined) {
        this['availability_zones'] = availabilityZones;
    }
    public get availabilityZones(): Array<string> | undefined {
        return this['availability_zones'];
    }
    public withJobId(jobId: string): SiteConfigsResponse {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withProgress(progress: string): SiteConfigsResponse {
        this['progress'] = progress;
        return this;
    }
    public withFailCode(failCode: number): SiteConfigsResponse {
        this['fail_code'] = failCode;
        return this;
    }
    public set failCode(failCode: number  | undefined) {
        this['fail_code'] = failCode;
    }
    public get failCode(): number | undefined {
        return this['fail_code'];
    }
    public withFailReason(failReason: string): SiteConfigsResponse {
        this['fail_reason'] = failReason;
        return this;
    }
    public set failReason(failReason: string  | undefined) {
        this['fail_reason'] = failReason;
    }
    public get failReason(): string | undefined {
        return this['fail_reason'];
    }
    public withNetworkConfig(networkConfig: NetworkConfig): SiteConfigsResponse {
        this['network_config'] = networkConfig;
        return this;
    }
    public set networkConfig(networkConfig: NetworkConfig  | undefined) {
        this['network_config'] = networkConfig;
    }
    public get networkConfig(): NetworkConfig | undefined {
        return this['network_config'];
    }
    public withAccessConfig(accessConfig: AccessConfig): SiteConfigsResponse {
        this['access_config'] = accessConfig;
        return this;
    }
    public set accessConfig(accessConfig: AccessConfig  | undefined) {
        this['access_config'] = accessConfig;
    }
    public get accessConfig(): AccessConfig | undefined {
        return this['access_config'];
    }
    public withClosable(closable: boolean): SiteConfigsResponse {
        this['closable'] = closable;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SiteConfigsResponseSiteTypeEnum {
    CENTER = 'CENTER',
    IES = 'IES'
}
/**
    * @export
    * @enum {string}
    */
export enum SiteConfigsResponseStatusEnum {
    PREPARING = 'PREPARING',
    SUBSCRIBING = 'SUBSCRIBING',
    SUBSCRIBED = 'SUBSCRIBED',
    SUBSCRIPTION_FAILED = 'SUBSCRIPTION_FAILED',
    DEREGISTERING = 'DEREGISTERING',
    DEREGISTRATION_FAILED = 'DEREGISTRATION_FAILED',
    RECYCLING = 'RECYCLING',
    RECYCLED = 'RECYCLED',
    RECYCLE_FAILED = 'RECYCLE_FAILED',
    CLOSED = 'CLOSED'
}
