import { AdDomain } from './AdDomain';
import { ApplySharedVpcDedicatedParam } from './ApplySharedVpcDedicatedParam';
import { AssistAuthMethodConfigRequest } from './AssistAuthMethodConfigRequest';
import { SiteConfigsRequest } from './SiteConfigsRequest';
import { Subnet } from './Subnet';
import { ThirdGatewayConfigInfo } from './ThirdGatewayConfigInfo';


export class ApplyWorkspaceReq {
    private 'auth_type'?: ApplyWorkspaceReqAuthTypeEnum | string;
    private 'ad_domains'?: AdDomain;
    private 'third_gateway_info'?: ThirdGatewayConfigInfo;
    private 'enterprise_id'?: string;
    private 'vpc_id'?: string;
    private 'subnet_ids'?: Array<Subnet>;
    private 'manage_subnet_cidr'?: string;
    private 'access_mode'?: ApplyWorkspaceReqAccessModeEnum | string;
    private 'apply_shared_vpc_dedicated_param'?: ApplySharedVpcDedicatedParam;
    private 'dedicated_subnets'?: string;
    private 'availability_zone'?: string;
    private 'publicip_type'?: string;
    private 'assist_auth_config'?: AssistAuthMethodConfigRequest;
    private 'site_configs'?: Array<SiteConfigsRequest>;
    private 'is_send_email'?: boolean;
    private 'enterprise_project_id'?: string;
    public constructor(adDomains?: AdDomain) { 
        this['ad_domains'] = adDomains;
    }
    public withAuthType(authType: ApplyWorkspaceReqAuthTypeEnum | string): ApplyWorkspaceReq {
        this['auth_type'] = authType;
        return this;
    }
    public set authType(authType: ApplyWorkspaceReqAuthTypeEnum | string  | undefined) {
        this['auth_type'] = authType;
    }
    public get authType(): ApplyWorkspaceReqAuthTypeEnum | string | undefined {
        return this['auth_type'];
    }
    public withAdDomains(adDomains: AdDomain): ApplyWorkspaceReq {
        this['ad_domains'] = adDomains;
        return this;
    }
    public set adDomains(adDomains: AdDomain  | undefined) {
        this['ad_domains'] = adDomains;
    }
    public get adDomains(): AdDomain | undefined {
        return this['ad_domains'];
    }
    public withThirdGatewayInfo(thirdGatewayInfo: ThirdGatewayConfigInfo): ApplyWorkspaceReq {
        this['third_gateway_info'] = thirdGatewayInfo;
        return this;
    }
    public set thirdGatewayInfo(thirdGatewayInfo: ThirdGatewayConfigInfo  | undefined) {
        this['third_gateway_info'] = thirdGatewayInfo;
    }
    public get thirdGatewayInfo(): ThirdGatewayConfigInfo | undefined {
        return this['third_gateway_info'];
    }
    public withEnterpriseId(enterpriseId: string): ApplyWorkspaceReq {
        this['enterprise_id'] = enterpriseId;
        return this;
    }
    public set enterpriseId(enterpriseId: string  | undefined) {
        this['enterprise_id'] = enterpriseId;
    }
    public get enterpriseId(): string | undefined {
        return this['enterprise_id'];
    }
    public withVpcId(vpcId: string): ApplyWorkspaceReq {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withSubnetIds(subnetIds: Array<Subnet>): ApplyWorkspaceReq {
        this['subnet_ids'] = subnetIds;
        return this;
    }
    public set subnetIds(subnetIds: Array<Subnet>  | undefined) {
        this['subnet_ids'] = subnetIds;
    }
    public get subnetIds(): Array<Subnet> | undefined {
        return this['subnet_ids'];
    }
    public withManageSubnetCidr(manageSubnetCidr: string): ApplyWorkspaceReq {
        this['manage_subnet_cidr'] = manageSubnetCidr;
        return this;
    }
    public set manageSubnetCidr(manageSubnetCidr: string  | undefined) {
        this['manage_subnet_cidr'] = manageSubnetCidr;
    }
    public get manageSubnetCidr(): string | undefined {
        return this['manage_subnet_cidr'];
    }
    public withAccessMode(accessMode: ApplyWorkspaceReqAccessModeEnum | string): ApplyWorkspaceReq {
        this['access_mode'] = accessMode;
        return this;
    }
    public set accessMode(accessMode: ApplyWorkspaceReqAccessModeEnum | string  | undefined) {
        this['access_mode'] = accessMode;
    }
    public get accessMode(): ApplyWorkspaceReqAccessModeEnum | string | undefined {
        return this['access_mode'];
    }
    public withApplySharedVpcDedicatedParam(applySharedVpcDedicatedParam: ApplySharedVpcDedicatedParam): ApplyWorkspaceReq {
        this['apply_shared_vpc_dedicated_param'] = applySharedVpcDedicatedParam;
        return this;
    }
    public set applySharedVpcDedicatedParam(applySharedVpcDedicatedParam: ApplySharedVpcDedicatedParam  | undefined) {
        this['apply_shared_vpc_dedicated_param'] = applySharedVpcDedicatedParam;
    }
    public get applySharedVpcDedicatedParam(): ApplySharedVpcDedicatedParam | undefined {
        return this['apply_shared_vpc_dedicated_param'];
    }
    public withDedicatedSubnets(dedicatedSubnets: string): ApplyWorkspaceReq {
        this['dedicated_subnets'] = dedicatedSubnets;
        return this;
    }
    public set dedicatedSubnets(dedicatedSubnets: string  | undefined) {
        this['dedicated_subnets'] = dedicatedSubnets;
    }
    public get dedicatedSubnets(): string | undefined {
        return this['dedicated_subnets'];
    }
    public withAvailabilityZone(availabilityZone: string): ApplyWorkspaceReq {
        this['availability_zone'] = availabilityZone;
        return this;
    }
    public set availabilityZone(availabilityZone: string  | undefined) {
        this['availability_zone'] = availabilityZone;
    }
    public get availabilityZone(): string | undefined {
        return this['availability_zone'];
    }
    public withPublicipType(publicipType: string): ApplyWorkspaceReq {
        this['publicip_type'] = publicipType;
        return this;
    }
    public set publicipType(publicipType: string  | undefined) {
        this['publicip_type'] = publicipType;
    }
    public get publicipType(): string | undefined {
        return this['publicip_type'];
    }
    public withAssistAuthConfig(assistAuthConfig: AssistAuthMethodConfigRequest): ApplyWorkspaceReq {
        this['assist_auth_config'] = assistAuthConfig;
        return this;
    }
    public set assistAuthConfig(assistAuthConfig: AssistAuthMethodConfigRequest  | undefined) {
        this['assist_auth_config'] = assistAuthConfig;
    }
    public get assistAuthConfig(): AssistAuthMethodConfigRequest | undefined {
        return this['assist_auth_config'];
    }
    public withSiteConfigs(siteConfigs: Array<SiteConfigsRequest>): ApplyWorkspaceReq {
        this['site_configs'] = siteConfigs;
        return this;
    }
    public set siteConfigs(siteConfigs: Array<SiteConfigsRequest>  | undefined) {
        this['site_configs'] = siteConfigs;
    }
    public get siteConfigs(): Array<SiteConfigsRequest> | undefined {
        return this['site_configs'];
    }
    public withIsSendEmail(isSendEmail: boolean): ApplyWorkspaceReq {
        this['is_send_email'] = isSendEmail;
        return this;
    }
    public set isSendEmail(isSendEmail: boolean  | undefined) {
        this['is_send_email'] = isSendEmail;
    }
    public get isSendEmail(): boolean | undefined {
        return this['is_send_email'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ApplyWorkspaceReq {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ApplyWorkspaceReqAuthTypeEnum {
    KERBEROS = 'KERBEROS',
    KERBEROS_THIRD_SSO = 'KERBEROS_THIRD_SSO'
}
/**
    * @export
    * @enum {string}
    */
export enum ApplyWorkspaceReqAccessModeEnum {
    INTERNET = 'INTERNET',
    DEDICATED = 'DEDICATED',
    BOTH = 'BOTH'
}
